package com.avchathq.engine
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.external.ExternalInterface;
	import flash.media.Sound;
	import flash.utils.ByteArray;

	public class AudioEngine extends Sprite
	{
		
		private var _SoundRecorder:SoundRecorder;
		private var _SoundPlayer:SoundPlayer;
		private var _SoundEncoder:SoundEncoder;
		private var _buffer:ByteArray;
		
		private var _maxTimeLimit:Number = 120;
		private var _recordName:String = "record";
		private var _addRandomNumberToName:Boolean = true;
		private var _recorderId:String = "";
		private var _userId:String = "";
		private var _uploadURL:String;
		
		public function AudioEngine(_recordName:String = "record", _addRandomNumberToName:Boolean = true, _maxTimeLimit:int = 120, _recorderId:String = "", _userId:String = "", uploadURL:String="upload.php"){
			this._recorderId = _recorderId;
			this._uploadURL = uploadURL;
			this._userId = _userId;
			this._recordName = _recordName;
			this._addRandomNumberToName = _addRandomNumberToName;
			this._maxTimeLimit =  _maxTimeLimit;
		}
		
		public function init(){
			this._SoundRecorder = new SoundRecorder(this._maxTimeLimit,this._recorderId );
			this._SoundPlayer =  new SoundPlayer();
			this._SoundEncoder = new SoundEncoder(this._recordName, this._addRandomNumberToName, this._uploadURL);
			
			this.addEventListener("RECORD_TERMINATED",onRecordDone);
			

			this.addChild(this._SoundRecorder);
			this.addChild(this._SoundPlayer);
			this.addChild(this._SoundEncoder);
			this._SoundRecorder.setUpMicrophone();
		}
		
		public function reset():void{
			this._buffer.clear();
			this._buffer.position = 0;
			this.removeChild(this._SoundRecorder);
			this.removeChild(this._SoundPlayer);
			this.removeChild(this._SoundEncoder);
			
			this._SoundRecorder = null;
			this._SoundPlayer =  null;
			this._SoundEncoder = null;
			
		}
		
		private function onRecordDone(e:CustomEvent):void{
			this._buffer = e.data["buffer_data"];
		}
		
		public function recordStart(e:Event):void{
			trace("AudioEngine::recordStart()");
			this._SoundRecorder.start();
			this._SoundPlayer.resetBuffer();
			
		}
		
		public function recordStop(e:Event):void{
			trace("AudioEngine::recordStop()");
			this._SoundRecorder.stop();
		}
		
		public function recordPause(e:Event):void{
			trace("AudioEngine::recordPause()");
			this._SoundRecorder.pause();
		}
		
		public function recordResume(e:Event):void{
			trace("AudioEngine::recordResume()");
			this._SoundRecorder.resume();
		}
		
		public function playStart(e:Event):void{
			trace("AudioEngine::playStart("+this._buffer.length+")");
			this._SoundPlayer.play(this._buffer);	
		}
		
		public function playPause(e:Event):void{
			trace("AudioEngine::playPause()");
			this._SoundPlayer.pause();
		}
		
		public function playPaused(e:Event):void{
			trace("AudioEngine::playPaused()");
			this._SoundPlayer.pause();
		}
		
		public function playStop(e:Event):void{
			trace("AudioEngine::playStop()");
			this._SoundPlayer.stop();
		}
		
		public function save(e:Event):void{
			trace("AudioEngine::save()");
		
			//var recordTime:Number = this._SoundRecorder._recorderTime / 1000 ;
			this._SoundEncoder.encodeWav(this._buffer,0,0,false);
			/*
			if(ExternalInterface.available){
				ExternalInterface.call("btSaveClick",this._recordName+".mp3", recordTime, this._recorderId);
			}
			*/
		}
		
		public function download(e:Event):void{
			trace("AudioEngine::download()");
			this._SoundEncoder.download();
			
		}
		public function upload(e:Event):void{
			trace("AudioEngine::upload()");
			this._SoundEncoder.upload(this._recorderId, this._userId, this._SoundRecorder._recorderTime / 1000);
			
		}
		
		public function resetMicrophone():void{
			trace("AudioEngine::resetMicrophone()");
			this._SoundRecorder.setUpMicrophone();
		}
		
		
	}
}