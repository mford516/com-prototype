package com.avchathq.engine
{
	import flash.events.*;
	import flash.events.SampleDataEvent;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.media.SoundTransform;
	import flash.utils.ByteArray;
	import flash.display.Sprite;

	public class SoundPlayer  extends Sprite
	{
		private var _sound:Sound;
		private var _soundChannel:SoundChannel;
		private var _soundTransform:SoundTransform;
		private var _baSoundToPlay:ByteArray;
		
		
		public function SoundPlayer(){
		//	this._baSoundToPlay 
			//this._sound =  new Sound();
			this._soundTransform = new SoundTransform();
		//	this._soundChannel = 
		}
		
		public function resetBuffer():void{
			this._baSoundToPlay = null;
		}
		
		/*public function play(baSoundToPlay:ByteArray):void{
			trace("SoundPlayer::play() #########################################################################");
			if(this._baSoundToPlay == null || this._baSoundToPlay.length == 0){
				trace("SoundPlayer::play()A");
				//if we have no sound data to play
				if(this._sound){
					trace("SoundPlayer::play()B")
					//if we already have a sound obj we reset it
					if(this._sound.hasEventListener(SampleDataEvent.SAMPLE_DATA)){
						this._sound.removeEventListener(SampleDataEvent.SAMPLE_DATA, onPlaybackSample);
					}
					this._sound = null;
					this._sound = new Sound();
				}
				this._baSoundToPlay = baSoundToPlay;
				this._baSoundToPlay.position = 0;
				this._sound.addEventListener(SampleDataEvent.SAMPLE_DATA, onPlaybackSample);
			}
			
			this._soundChannel = this._sound.play(0, 0, this._soundTransform);
			this._soundChannel.addEventListener(Event.SOUND_COMPLETE, onSoundComplete);
		}*/
		
		public function play(baSoundToPlay:ByteArray):void{
			trace("SoundPlayer::play() #########################################################################");
			//if(this._baSoundToPlay == null || this._baSoundToPlay.length == 0){
			//	trace("SoundPlayer::play()A");
				//if we have no sound data to play
				if(this._sound){
					//trace("SoundPlayer::play()B")
					//if we already have a sound obj we reset it
					if(this._sound.hasEventListener(SampleDataEvent.SAMPLE_DATA)){
						this._sound.removeEventListener(SampleDataEvent.SAMPLE_DATA, onPlaybackSample);
					}
					this._sound = null;
				}
				_sound = new Sound();
				_sound.addEventListener(SampleDataEvent.SAMPLE_DATA, onPlaybackSample);				
				
				if (_soundChannel){	
					if(_soundChannel.hasEventListener(Event.SOUND_COMPLETE)){
						_soundChannel.removeEventListener(Event.SOUND_COMPLETE, onSoundComplete);
					}
					_soundChannel= null
				}
				
				//if (_baSoundToPlay){
				if (_baSoundToPlay){
					_baSoundToPlay =  null
				}
				_baSoundToPlay	= new ByteArray();
				_baSoundToPlay = baSoundToPlay;
				_baSoundToPlay.position = 0;
				
			//	}
				
		//	}
			_soundChannel= new SoundChannel();
			
			this._soundChannel = this._sound.play(0, 0, this._soundTransform);
			_soundChannel.addEventListener(Event.SOUND_COMPLETE, onSoundComplete);
			
		}
		
		public function pause():void{
			this._soundChannel.stop();
		}
		
		public function stop():void{
		}
		
		private function onSoundComplete(e:Event):void{
			this._baSoundToPlay.position = 0;
			dispatchEvent(new Event("PLAY_DONE", true));
		}
		
		public function onPlaybackSample(e:SampleDataEvent):void{
			for (var i:int = 0; i < Math.min(2048*2, _baSoundToPlay.bytesAvailable) && _baSoundToPlay.bytesAvailable > 0; i++){
				var sample:Number = _baSoundToPlay.readFloat();
				e.data.writeFloat(sample);
				e.data.writeFloat(sample);
			}
			var latency:Number = e.position / (44.1)-this._soundChannel.position;
			var params:Array = [];
			params["time"] =(e.position / (44.1))
			//trace("SoundPlayer::onPlaybackSample() time in milliseconds="+params["time"]+" latency="+latency)
			dispatchEvent(new CustomEvent("MICROPHONE_EVENT",params));
		}
	}
}