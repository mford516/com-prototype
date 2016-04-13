package com.avchathq.looks
{
	
	import flash.display.Sprite;
	import flash.geom.ColorTransform;
	import flash.geom.Rectangle;
	import flash.media.*;
	import flash.utils.ByteArray;
	

	public class Spectrum extends Sprite{
		
		private var _buffer:ByteArray;
		private var _spWaveForm:Sprite;
	    private var _mask:Sprite;
		private var _width:Number;
		private var _height:Number;
		private var _playbackMask:Sprite;
		private var _markerDistance:Number = 20
		private var _nextMarkerAt:Number = 20  
		private var useA32BitSampleEvery : int;
		private var _soundWaveColor:uint;
		private var _waveForMask:Sprite;
		private var _waveFillColor:uint;
		
		public function Spectrum(_width:Number = 470, _height:Number = 60, markerDistance:Number =20, soundWaveColor:uint = 0x333333, waveFillColor:uint = 0xFA5223)
		{
			
			this._width = _width;
			this._height = _height;
			this._markerDistance = _nextMarkerAt = markerDistance;
			this._soundWaveColor = soundWaveColor;
			this._waveFillColor = waveFillColor;
			
			this._buffer = new ByteArray();
			this._mask = new Sprite();
			this._mask.graphics.beginFill(0x00FF00);
			this._mask.graphics.drawRect(0, 0, _width, _height);
			this._mask.graphics.endFill();
			addChild(this._mask);
			
			
			this._spWaveForm = new Sprite();
			
			this._waveForMask = new Sprite();
			
			if(this._spWaveForm != null && this.contains(this._spWaveForm))
			{
				this.removeChild(this._spWaveForm);
			}
			
			this._spWaveForm.mask = this._mask;
			this.addChild(this._spWaveForm);
			this._spWaveForm.y = this._height/2;
			this._spWaveForm.graphics.moveTo(0,0);
			this._spWaveForm.graphics.lineStyle(1,this._soundWaveColor);
		}
		
		public function init(_bf:ByteArray, _width:Number = 470, _height:Number = 60):void
		{
			//if we do not receive any sounda data we exit the function
			if(_bf == null)
			{
				return;
			}
			
			//we reset the next marker position to the 1st position
			_nextMarkerAt=_markerDistance
				
			//we reset the inside buffer
			this._buffer = _bf;
			this._buffer.position = 0;
			
			//we reset the wave form as well
			if(this._spWaveForm != null && this.contains(this._spWaveForm))
			{
				this._spWaveForm.graphics.clear()
				this.removeChild(this._spWaveForm);
				this._spWaveForm=null
			}
			this._spWaveForm = new Sprite();
			this._spWaveForm.mask = this._mask;
			this.addChild(this._spWaveForm);
			this._spWaveForm.y  = _height/2;
			this._spWaveForm.graphics.moveTo(0,0);
			this._spWaveForm.graphics.lineStyle(1,this._soundWaveColor);
			
			//since we're using the available width to draw a long or short sound we're only going to use some samples from the sound , not all.
			var samplesInThisBuffer:int = this._buffer.length/4;
			//useA32BitSampleEvery is the distance in samples between the samples used for each px in the width
			useA32BitSampleEvery = (samplesInThisBuffer / _width) ;
		

			for (var i:uint = 0; i < _width;i++) {
					var left:Number = this._buffer.readFloat();
					var right:Number = left
					var mono:Number = Math.abs(Math.max(left, right)) + Math.abs(Math.min(left, right));
	
					//_buffer is a byte array containing bytes, each audio sample = 32bits = 4 bytes
					//so first we divide by 4 to obtain the number of samples and then by 44100 (samples/s) to obtain the time and compare it with _nextMarkerAt
					if (this._buffer.position/4/44100>_nextMarkerAt && _nextMarkerAt!=0)
					{
						//if we need to draw a marker element	
						this._spWaveForm.graphics.lineTo(i,0);
						this._spWaveForm.graphics.lineStyle(1,0xff0000)
						this._spWaveForm.graphics.lineTo(i,this._height/2);
						this._spWaveForm.graphics.lineTo(i,-this._height/2);
						this._spWaveForm.graphics.lineTo(i,0);
						this._spWaveForm.graphics.lineStyle(1,this._soundWaveColor)
						//the next marker position is calculated
						_nextMarkerAt+=_markerDistance
					}else{
						//if we need to draw the normal sound wave
						this._spWaveForm.graphics.lineTo(i,(mono * _height)/2);
						this._spWaveForm.graphics.lineTo(i,-(mono * _height)/2);
					}
					//we advance trough the _buffer byte array containing the sound to the next sample
					this._buffer.position = i * useA32BitSampleEvery*4;		
			}
			//we miove the sound wave to o,o
			//this._spWaveForm.graphics.moveTo(0,0);
			//this._spWaveForm.graphics.lineStyle(1,0xff0000,1);
			
			//we make and add the playback mask
			this._playbackMask = new Sprite();
			this._playbackMask.graphics.beginFill(0x00FF00,1);
			this._playbackMask.graphics.drawRect(0,0,1,this._height);
			this.addChild(this._playbackMask);
			
			
			//creating a duplicate of the actual drawing to use for the mask
			_waveForMask.graphics.copyFrom(_spWaveForm.graphics);
			_waveForMask.x = _spWaveForm.x;
			_waveForMask.y = _spWaveForm.y;
			var newCol:ColorTransform = new ColorTransform();
			newCol.color = _waveFillColor;
			_waveForMask.transform.colorTransform = newCol;
			this.addChild(_waveForMask);
			_waveForMask.mask = _playbackMask;
		}

		public function drawRealTime(sample32Bits:Number, time:Number):void
		{
			//every time 8192 bytes (2048 samples) come from the mic in SoundRecorder.as the last 32bits (4 bytes) reach this function
			//8192bytes = 2048 samples because 1 sample = 32bits = 4 bytes, _buffer.length will grow by 4
			//so when the _buffer.length = 86.1328125 that's 1 second
			//the mic is recording 44100 samples/s which means each time this function is called the actual sound length grows by 0.046439... s (46ms, 2048 samples)
			
			this._buffer.writeFloat(sample32Bits);
			
			var left:Number = sample32Bits;
			var right:Number = sample32Bits;
			var mono:Number = Math.abs(Math.max(left, right)) + Math.abs(Math.min(left, right));
			
			var rect:Rectangle = new Rectangle(0, 0, 1, 0);
			rect.height = mono * this._height;
			//we decrease 4 so the first x value is 0
			//each new call of this function will grow the sound wave by 1 px and it will represent 46ms
			rect.x      = (this._buffer.length-4)/4
			rect.y      = (this._height - rect.height) / 2;
			
			if (_nextMarkerAt!=0 && time/1000>_nextMarkerAt)
			{
				this._spWaveForm.graphics.lineTo(rect.x,0);
				this._spWaveForm.graphics.lineStyle(1,0xff0000)
				this._spWaveForm.graphics.lineTo(rect.x,this.height/2);
				this._spWaveForm.graphics.lineTo(rect.x,-this.height/2);
				this._spWaveForm.graphics.lineTo(rect.x,0);
				this._spWaveForm.graphics.lineStyle(1,this._soundWaveColor)
				_nextMarkerAt+=_markerDistance
			}else{
				this._spWaveForm.graphics.lineTo(rect.x,rect.height/2);
				this._spWaveForm.graphics.lineTo(rect.x,-rect.height/2);
			}
			
			if(this._spWaveForm.width > this._width)
			{
				//if we nee to scroll the sound wave to the left because it's biggetr than the available width...
				this._spWaveForm.x = this._width-this._spWaveForm.width ;
			}
		}
		
	
		public function movePlayBackMaskToPosition(position:Number):void
		{
			trace("movePlayBackMaskToPosition("+position+")");
			if (_playbackMask)
			{
				if (position>1)
				{
					position=1;
				}
				this._playbackMask.width = this._width *position;
				_playbackMask.x =0
			}
		}
		
	}
}