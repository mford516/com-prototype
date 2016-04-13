package com.avchathq.engine
{
	import cmodule.shine.*;
	
	import flash.display.Sprite;
	import flash.events.*;
	import flash.events.TimerEvent;
	import flash.net.FileReference;
	import flash.net.URLLoader;
	import flash.net.URLLoaderDataFormat;
	import flash.net.URLRequest;
	import flash.net.URLRequestHeader;
	import flash.net.URLRequestMethod;
	import flash.utils.ByteArray;
	import flash.utils.Endian;
	import flash.utils.Timer;
	
	import fr.kikko.lab.ShineMP3Encoder;

	public class SoundEncoder extends Sprite
	{
		private var _rawData:ByteArray;
		private var _mp3Data:ByteArray    =  new ByteArray();
		private var _wavData:ByteArray    =  new ByteArray();
		private var end:Number=0;
		private var wavTimer:Timer;
		private var _mp3Encoder:ShineMP3Encoder;
		private var _uploadURL:String = "upload.php"
		private var _recordName:String = "record";
		private var _addRandomNumberToName:Boolean = true;
		private var _isDownload:Boolean = false;
		public var   isEncoded:Boolean = false;
		
		public function SoundEncoder(_recordName:String = "record", _addRandomNumberToName:Boolean  = true, uploadURL:String = "upload.php"){
			this._isDownload = false;
			this._uploadURL = uploadURL;
			this.isEncoded  = false;
			this._recordName = _recordName;
			this._addRandomNumberToName = _addRandomNumberToName;
			if(_addRandomNumberToName){
				this._recordName +=Math.ceil(Math.random()*999999);
			}
		}
		
		public function encodeWav(samples:ByteArray, startPos:Number = 0, endPos:Number = 0, _isDownload:Boolean = false):void{
			this._isDownload = _isDownload;
			_rawData = samples;
			endPos   = samples.length;
			
			end = endPos;
			var length:int = ((endPos-startPos)/2) >> 2
			_rawData.position = startPos;
			
			var channels:int    =  1;
			var bits:int        =  16;
			var rate:int        =  44100;
			_wavData.length  =  0;
			_wavData.endian  =  Endian.LITTLE_ENDIAN;
			
			_wavData.writeUTFBytes("RIFF");
			_wavData.writeInt(uint(length + 44));
			_wavData.writeUTFBytes("WAVE");
			_wavData.writeUTFBytes("fmt ");
			_wavData.writeInt(uint(16));
			_wavData.writeShort(uint(1));
			_wavData.writeShort(channels);
			_wavData.writeInt(rate);
			_wavData.writeInt(uint(rate * channels * (bits >> 3)));
			_wavData.writeShort(uint(channels * (bits >> 3)));
			_wavData.writeShort(bits);
			_wavData.writeUTFBytes("data");
			_wavData.writeInt(length);
			//_wavData.writeBytes(data);
			wavTimer=new Timer(1,0);
			wavTimer.start()
			wavTimer.addEventListener(TimerEvent.TIMER,wavEncodeProgress);
		}
		
		
		private function wavEncodeProgress(e:TimerEvent):void{
			var c:Number= end - _rawData.position;
			if(c <= 0){
				wavTimer.stop();
				this.mp3Encode();
				end=0
				return
			}
			var to:Number=Math.min(8000,c/4)
			for (var i:int = 0; i < to; i++){
				_wavData.writeShort(_rawData.readFloat() * (0x7fff));
			}
			dispatchEvent(new ProgressEvent(ProgressEvent.PROGRESS, true, false, _rawData.position/end*40, 100));
		}
		
		
		private function mp3Encode():void{
			_wavData.position = 0;
			_mp3Encoder = new ShineMP3Encoder(_wavData);
			_mp3Encoder.addEventListener(Event.COMPLETE, mp3EncodeComplete);
			_mp3Encoder.addEventListener(ProgressEvent.PROGRESS, mp3EncodeProgress);
			_mp3Encoder.addEventListener(ErrorEvent.ERROR, mp3EncodeError);
			_mp3Encoder.start();
		}
		
		private function mp3EncodeProgress(e:ProgressEvent):void{
			dispatchEvent(new ProgressEvent(ProgressEvent.PROGRESS, true, false, 40+(e.bytesLoaded)/100*60, 100));
		}
			
		private function mp3EncodeError(e:ErrorEvent):void{
		}
		
		private function mp3EncodeComplete(e:Event):void{
			var params:Array = [];
			this.isEncoded = true;
			params["is_download"] = this._isDownload;
			this._mp3Data = this._mp3Encoder.mp3Data;
			dispatchEvent(new CustomEvent("MP3_READY",params));
			
		}
		
		public function upload(recorderId:String="", userId:String="",duration:Number=0):void{
			trace("SE:upload, this._uploadURL="+this._uploadURL)
			
			
			//create request
			var mp3URLRequest:URLRequest = new URLRequest(this._uploadURL+"?recordName="+this._recordName+".mp3&recorderId="+recorderId+"&userId="+userId+"&duration="+duration);
			//add header
			var header:URLRequestHeader = new URLRequestHeader("Content-type", "application/octet-stream");
			mp3URLRequest.requestHeaders.push(header);
			//set POST data
			mp3URLRequest.method = URLRequestMethod.POST;
			mp3URLRequest.data = this._mp3Data;
			
			//URLLOAder object
			var mp3Uploader:URLLoader = new URLLoader();
			mp3Uploader.dataFormat = URLLoaderDataFormat.VARIABLES;
			mp3Uploader.addEventListener(Event.COMPLETE, onMP3UploadSuccess);
			mp3Uploader.addEventListener(IOErrorEvent.IO_ERROR, unMP3UploadFail);
			mp3Uploader.load(mp3URLRequest);	
		}
		
		public function onMP3UploadSuccess(e:Event):void{
			var params:Array = [];
			params["save"]=e.target.data["save"]
			params["name"] = this._recordName+".mp3";
			params["fileurl"]=e.target.data["fileurl"];
			dispatchEvent(new CustomEvent("UPLOAD_READY",params));
		}
		
		public function unMP3UploadFail(e:Event):void{
			var params:Array = [];
			params["name"] = this._recordName+".mp3";
			dispatchEvent(new CustomEvent("UPLOAD_FAILED",params));
		}
		public function download():void{
			(new FileReference()).save(this._mp3Data,  this._recordName+".mp3");
		}
	}
}