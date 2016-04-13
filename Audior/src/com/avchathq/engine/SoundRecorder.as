package com.avchathq.engine
{
	import com.avchathq.engine.CustomEvent;
	
	import flash.display.Sprite;
	import flash.events.*;
	import flash.external.ExternalInterface;
	import flash.media.Microphone;
	import flash.system.Security;
	import flash.system.SecurityPanel;
	import flash.utils.ByteArray;
	import flash.utils.Timer;
	
	import flashx.textLayout.formats.Float;
	
	public class SoundRecorder extends Sprite
	{
		
		private var _microphone:Microphone;
		private var _buffer:ByteArray;
		private var _timeLimit:Number =60 *2* 1000 ;
		public  var _recorderTime:Number =  0;
		private var _recorderId:String = "";
		private var recCountDown:Timer = new Timer(2000,1);
		private var _params:Array;
		private var _actualPosition:Number = 0;
		private var _lastPosition:Number = 0;
		
		public function SoundRecorder(timeLimit:Number = 120, recorderId:String=""){
			this._timeLimit = timeLimit *1000;
			this._recorderId = recorderId
		}
		
		public function start():void{
			//trace("start() this._micMuted="+this._micMuted)
		//	if(this._micMuted == false){
				
				if(this._microphone != null){
					if (this._microphone.muted){
						//Security.showSettings(SecurityPanel.PRIVACY);
						dispatchEvent(new Event("MIC_MUTED",true));
					}else{
						ExternalInterface.call( "onMicAccess", true,this._recorderId);
					}
					this._recorderTime = 0;
					this._buffer = new ByteArray();
					this._microphone.addEventListener(SampleDataEvent.SAMPLE_DATA, onSampleData);
						
				}
		//	}else{
			//	Security.showSettings(SecurityPanel.PRIVACY);
			//}	
		}
		
		public function stop():void{
			this._microphone.removeEventListener(SampleDataEvent.SAMPLE_DATA, onSampleData);
			var params:Array = [];
			params["buffer_data"] = this._buffer;
			dispatchEvent(new CustomEvent("RECORD_TERMINATED",params));
		}
		
		public function pause():void{
			this._microphone.removeEventListener(SampleDataEvent.SAMPLE_DATA, onSampleData);
			_actualPosition = _lastPosition;
			//trace("PAUSE POSITIONS " + _actualPosition);
		}
		
		public function resume():void{
			this._microphone.addEventListener(SampleDataEvent.SAMPLE_DATA, onSampleData);
		}
		
		public function setUpMicrophone():void{
			trace("SoundRecorder::setUpMicrophone()");
			if(this._microphone == null){
				this._microphone = Microphone.getMicrophone();
			}
			
			if(this._microphone == null){
				dispatchEvent(new Event("NO_MICROPHONE", true));
			}else{
				var params:Array = [];
				params["mic_name"] = this._microphone.name;
				trace(this._microphone.name)
				dispatchEvent(new CustomEvent("MIC_SET",params));
				this._microphone.setSilenceLevel(0, 4000);
				//this._microphone.gain = _gain;
				this._microphone.rate = 44;
				this._microphone.addEventListener(StatusEvent.STATUS, onMicStatus);
			}
		}
		
		private function onSampleData(e:SampleDataEvent):void{
			//trace("POSITIONS " + _lastPosition + " " + _actualPosition);
			
			var current_time:Number = (_actualPosition + e.position) / (44.1);
			_lastPosition = _actualPosition + e.position;
			
			trace("SoundRecorder::onSampleData() e.position="+e.position+" e.data.bytesAvailable="+e.data.bytesAvailable);
			//e.data is most times = to 8192 bytes (2048 samples), but sometimes it's double that 
			var params:Array = [];
			if (current_time > this._timeLimit){
				stop();
				return;
			}
			while (e.data.bytesAvailable > 0){
				var fs:Number = e.data.readFloat()
				this._buffer.writeFloat(fs);
				params["32BitSample"] = fs;
			}
			
			params["time"] = current_time;
			params["activityLevel"] = this._microphone.activityLevel;
			this._recorderTime = current_time;
			
			//_params = new Array();
			//_params = params;
			
			dispatchEvent(new CustomEvent("MICROPHONE_EVENT",params));
			//recCountDown.addEventListener(TimerEvent.TIMER,startRecording);
			//recCountDown.start();
		}
		
		private function onMicStatus(e:StatusEvent):void{
			trace("SoundRecorder::onMicStatus("+e+")");
			if (e.code == "Microphone.Muted"){
				this._microphone.removeEventListener(SampleDataEvent.SAMPLE_DATA, onSampleData);
				//this._micMuted = true;
				dispatchEvent(new Event("MIC_MUTED",true));
				ExternalInterface.call( "onMicAccess", false,this._recorderId);
			}else if(e.code == "Microphone.Unmuted"){
				//this._micMuted = false;
				this._microphone.addEventListener(SampleDataEvent.SAMPLE_DATA, onSampleData);
				dispatchEvent(new Event("MIC_UNMUTED",true));
				ExternalInterface.call( "onMicAccess", true,this._recorderId);
			}
		}
		
		/*private function startRecording(e:TimerEvent):void{
			dispatchEvent(new CustomEvent("MICROPHONE_EVENT",_params));
		}*/
	}
}