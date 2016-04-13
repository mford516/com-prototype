package com.avchathq.looks
{
	import com.avchathq.engine.CustomEvent;
	
	import fl.controls.Button;
	import fl.lang.*;
	
	import flash.display.DisplayObject;
	import flash.display.Sprite;
	import flash.events.*;
	import flash.events.MouseEvent;
	import flash.external.*;
	import flash.external.ExternalInterface;
	import flash.media.Microphone;
	import flash.net.*;
	import flash.system.Security;
	import flash.system.SecurityPanel;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.text.TextFormat;
	import flash.utils.Timer;
	
	public class MainContainer extends Sprite{
		
		//ALL THE BUTTONS SKINS
		[Embed(source="assets/btn-rec-start-out.png")]
		public var icon_record_start_out:Class;
		[Embed(source="assets/btn-rec-start-over.png")]
		public var icon_record_start_over:Class;
		[Embed(source="assets/btn-rec-stop-out.png")]
		public var icon_record_stop_out:Class;
		[Embed(source="assets/btn-rec-stop-over.png")]
		public var icon_record_stop_over:Class;
		[Embed(source="assets/btn-play-out.png")]
		public var icon_play_out:Class;
		[Embed(source="assets/btn-play-over.png")]
		public var icon_play_over:Class;
		[Embed(source="assets/btn-pause-out.png")]
		public var icon_pause_out:Class;
		[Embed(source="assets/btn-pause-over.png")]
		public var icon_pause_over:Class;
		
		
		//OTHER SKINS
		[Embed(source="assets/linear-gradient.png")]
		public var linear_gradient:Class;
		[Embed(source="assets/round-gradient-left.png")]
		public var round_gradient:Class;
		[Embed(source="assets/v-line.png")]
		public var v_line:Class;
		
		
		private var _width:Number;
		private var _height:Number;
		
		// ALL THE BUTTONS FOR THE INTERFACE 
		private var _mainButton:Button;
		private var _playButton:Button;
		private var _saveButton:Button;
		private var _downloadButton:Button;
		private var _settingsButton:Button;
		private var _recordAgainButton:Button;
		private var _pauseResumeRecButton:Button;
		
		//OTHER INTERFACE ELEMENTS
		private var _textFormat:TextFormat;
		private var _timerLabel:TextField;
		private var _resolutionLabel:TextField;
		private var _sampleRateLabel:TextField;
		private var _microphoneLabel:TextField;
		private var _encodingLabel:TextField;
		private var _mainLabel:TextField;
	    private var _markerDistance:Number = 20;
		private var _spectrum:Spectrum;
		
		private var _lGradient:DisplayObject;
		private var _leftGradient:DisplayObject;
		private var _rightGradient:DisplayObject;
		private var _vLineL:DisplayObject;
		private var _vLineR:DisplayObject;
		
		//SOME CONFIG VARS
		private var _recordedTime:Number = 0;
		private var _timeLimit:Number = 60 *2* 1000;
		private var _saved:Boolean;
		private var _canDownload:Boolean;
		private var _recorderId:String = "";
		private var _userId:String = "";
		private var _showSoundWave:Boolean = true; 
		private  var _state:String = ""
		private var _fileurl:String ="";
		private var _showButtons:Boolean = true;
		private var _disableSaveButton:Boolean = false;
		private var _disableRecordAgainButton:Boolean = false;
		private var _soundWaveColor:uint;
		private var _waveFillColor:uint;
		
		//THE STAGES OF THE UI
		private const RECORD:String = "RECORD";
		private const STOP:String = "STOP";
		private const PLAY:String = "PLAY";
		private const PAUSE:String = "PAUSE";
		
		private var recordingState:String ="PAUSED";
		
		//OTHER
		private var recCountDown:Timer = new Timer(2000,1);
		
		public function MainContainer(width:Number = 600, height:Number = 600, timeLimit:Number = 120, canDownload:Boolean = true, _recorderId:String = "", _userId:String="", showSoundWave:Boolean=true, markerDistance:Number = 20, showButtons:Boolean=true, disableSaveButton:Boolean = false, disableRecordAgainButton:Boolean = false, sounWaveColor:uint = 0x333333, waveFillColor:uint = 0xFA5223):void{
			trace("MainContainer("+arguments.join(",")+")")
			this._width = width;
			this._height = height;
			this._recorderId = _recorderId;
			this._userId = _userId;
			this.state = this.RECORD;
			this._timeLimit = timeLimit *1000;
			this._canDownload = canDownload;
			this._saved = false;
			this._showSoundWave = showSoundWave
			this._markerDistance= markerDistance
			this._showButtons =  showButtons;
			this._disableSaveButton = disableSaveButton;
			this._disableRecordAgainButton = disableRecordAgainButton;
			this._soundWaveColor = sounWaveColor;
			this._waveFillColor = waveFillColor;
						
			this._mainButton = new Button();
			this._playButton = new Button();
			this._saveButton = new Button();
			this._downloadButton = new Button();
			//this._settingsButton = new Button();
			this._recordAgainButton = new Button();
			this._pauseResumeRecButton = new Button();
			
			this._mainButton.label = "";
			this._mainButton.setStyle("upSkin",icon_record_start_out);
			this._mainButton.setStyle("overSkin",icon_record_start_over);
			this._mainButton.setStyle("downSkin",icon_record_start_out);
			this._mainButton.useHandCursor = true;
			this._mainButton.width = 102;
			this._mainButton.height = 102;
			this._mainButton.addEventListener(MouseEvent.CLICK,onMainBtnClick); 
			
			this._playButton.label = "Play";
			this._playButton.enabled = false;
			this._playButton.width = 60;
			this._playButton.height = 60;
			this._playButton.addEventListener(MouseEvent.CLICK,onPlayClick);
			
			this._saveButton.label = Locale.loadString("IDS_BT_SAVE");
			this._saveButton.width = 80;
			this._saveButton.height = 20;
			this._saveButton.addEventListener(MouseEvent.CLICK, onSaveClick);
			
			this._downloadButton.label = Locale.loadString("IDS_BT_DOWNLOAD");
			this._downloadButton.enabled = true;
			this._downloadButton.width = 80;
			this._downloadButton.height = 20;
			this._downloadButton.addEventListener(MouseEvent.CLICK, onDownloadClick);
			
			this._pauseResumeRecButton.label = "";
			this._pauseResumeRecButton.setStyle("upSkin",icon_pause_out);
			this._pauseResumeRecButton.setStyle("overSkin",icon_pause_over);
			this._pauseResumeRecButton.setStyle("downSkin",icon_pause_out);
			this._pauseResumeRecButton.useHandCursor = true;
			this._pauseResumeRecButton.width = 50;
			this._pauseResumeRecButton.height = 50;
			this._pauseResumeRecButton.addEventListener(MouseEvent.CLICK,onPauseRecording);
			
			this._textFormat = new TextFormat();
			this._textFormat.font = "Arial";
			this._textFormat.size = 12;
			this._textFormat.color = 0x333333;
			this._textFormat.align = "center";
			
			this._timerLabel = new TextField();
			this._timerLabel.defaultTextFormat = this._textFormat;
			this._timerLabel.height = 20;
			this._timerLabel.wordWrap = false;
			this._timerLabel.selectable = false;
			this._timerLabel.autoSize = TextFieldAutoSize.CENTER;
			
			this._encodingLabel = new TextField();
			this._encodingLabel.defaultTextFormat = new TextFormat("Arial", 12, 0x33333,false,false,false,null,null,"right");
			this._encodingLabel.width = 180;
			this._encodingLabel.wordWrap = false;
			this._encodingLabel.selectable = false;
			_encodingLabel.multiline = false;
			
			this._microphoneLabel = new TextField();
			this._microphoneLabel.defaultTextFormat = new TextFormat("Arial", 12, 0x33333,false,false,false,null,null,"center");
			this._microphoneLabel.width = this._width -130;;
			this._microphoneLabel.wordWrap = false;
			this._microphoneLabel.selectable = false;
			this._microphoneLabel.focusRect = false;
			this._microphoneLabel.addEventListener(TextEvent.LINK, changeMic);
			
			_recordAgainButton.label = Locale.loadString("IDS_BT_RECAGAIN");
			_recordAgainButton.width = 80
			_recordAgainButton.height =20
			_recordAgainButton.addEventListener(MouseEvent.CLICK,onStartAgainClick); 
					
			this._mainLabel = new TextField();
			this._mainLabel.defaultTextFormat = new TextFormat("Arial", 18, 0x33333,false,false,false,null,null,"center");
			this._mainLabel.width = this._width -130;
			this._mainLabel.wordWrap = true;
			this._mainLabel.selectable = false;
			this._mainLabel.autoSize = TextFieldAutoSize.CENTER;
			this._mainLabel.text = Locale.loadString("IDS_TXT_RECORD")
			
			if(_showButtons == true){
				this._spectrum = new Spectrum(this._width - 132,60,_markerDistance,_soundWaveColor,_waveFillColor);	
			}else{
				this._spectrum = new Spectrum(this._width - 22,60,_markerDistance,_soundWaveColor,_waveFillColor);
			}
			
			
			this._lGradient = new linear_gradient();
			this._leftGradient = new round_gradient();
			this._rightGradient = new round_gradient();
			this._vLineL = new v_line();
			this._vLineR = new v_line();
			
			
			//setup the external JS interface
			ExternalInterface.addCallback("mainbtn", onClickRecordJS);
			ExternalInterface.addCallback("save", onClickSaveJS);
			ExternalInterface.addCallback("download", onClickDownloadJS);
			ExternalInterface.addCallback("recordagain", onClickRecAgainJS);
			ExternalInterface.addCallback("pauseResumeBtn", onClickPauseResumeJS);
			
			//execut a JS function so that JS/HTML knows it can call functions in this swf
			if(ExternalInterface.available){
				ExternalInterface.call("onFlashReady",this._recorderId);
			}
			
			if(_showButtons == false){
				_mainButton.visible = false;
				_playButton.visible = false;
				_recordAgainButton.visible = false;
				_downloadButton.visible = false;
				_saveButton.visible = false;
				_pauseResumeRecButton.visible = false;
			}
			
			if(_disableSaveButton == true){
				_saveButton.visible = false;
			}
			
			if(_disableRecordAgainButton == true){
				_recordAgainButton.visible = false;
			}
			
		}
		
		public function init():void{
			
			this.addChild(this._mainButton);
			this.addChild(this._lGradient);
			
			//long line gradient
			
			if(_showButtons == false){
				this._lGradient.width = this._width -10;
				this._lGradient.x = 10;
			}else{
				this._lGradient.width = this._width -130;
				this._lGradient.x = 120;	
			}
			
			this._lGradient.y = 10;
			
			//left gradient
			this.addChild(this._leftGradient);
			
			if(_showButtons == false){
				this._leftGradient.x = 10;
			}else{
				this._leftGradient.x = 120;	
			}
			
			this._leftGradient.y = 10;
			
			//right gradient
			this.addChild(this._rightGradient);
			this._rightGradient.rotation = 180;
			this._rightGradient.x = this._width - 10;
			this._rightGradient.y = 110;
			
			this.addChild(this._vLineL);
			this.addChild(this._vLineR);
			this._vLineR.rotation = 180;
			this._vLineL.y = 10;
			this._vLineR.y = 110;
			
			if(_showButtons == false){
				this._vLineL.x = 10;	
			}else{
				this._vLineL.x = 120;
			}
			
			this._vLineR.x = this._width -10;
			
			this.addChild(this._mainLabel);
			this.addChild(this._timerLabel);
			this.addChild(this._microphoneLabel);
			this.addChild(this._spectrum);
			this.addChild(this._recordAgainButton);
			
			this._mainButton.x  = 10;
			this._mainButton.y  = 10;
			
			if(_showButtons == true){
				this._spectrum.x = this._mainButton.x +100+10;	
			}else{
				this._spectrum.x = 10;
			}
			
			
			this._spectrum.y = 30;
			
			this._saveButton.x = this._width - 80 -  10;
			this._saveButton.y = this._height - 20 - 10;
			
			this._downloadButton.x = this._saveButton.x
			this._downloadButton.y = this._saveButton.y;
			
			this._encodingLabel.x = this._width - _encodingLabel.width -  10;
			this._encodingLabel.y  = this._saveButton.y;
			
			this._microphoneLabel.y = 10;
			if(_showButtons == true){
				this._microphoneLabel.x = this._mainButton.x +100 + 10;	
			}else{
				this._microphoneLabel.x = (this._width - _microphoneLabel.width)/2
			}
			
			
			this._timerLabel.y =  90;
			if(_showButtons == true){
				this._timerLabel.x =   120 + (this._width -120 -10- this._timerLabel.width) /2;	
			}else{
				this._timerLabel.x =  (this._width - _timerLabel.width)/2;
			}
			
			this._timerLabel.text = this.formatTimeInMs(0)+"/"+ this.formatTimeInMs(this._timeLimit);
			
			if(_showButtons == true){
				this._mainLabel.x = this._mainButton.x +this._mainButton.width + 10;	
			}else{
				this._mainLabel.x = (this._width - _mainLabel.width)/2;
			}
			
			this._mainLabel.y = (120 - this._mainLabel.height)/2;
			
			this._recordAgainButton.y = this._mainButton.y + 100 ;
			this._recordAgainButton.x = (120 - 80)/2;
			this._recordAgainButton.visible = false;
			
			this._pauseResumeRecButton.x = 70;
			this._pauseResumeRecButton.y = 80;
			this.addChild(_pauseResumeRecButton);
			this._pauseResumeRecButton.visible = false;
			
		}
		
		public function onClickRecordJS():void{
			trace("MC.onClickRecordJS()")
			onMainBtnClick()
		}
		
		public function onClickStopJS():void{
			trace("MC.onClickStopJS()")
			onMainBtnClick()
		}
		
		public function onClickPlayJS():void{
			trace("MC.onClickPlayJS()")
			onMainBtnClick()
		}
		
		public function onClickSaveJS(extra:String =""):void{
			trace("MC.onClickSaveJS()")
			if (contains(_saveButton) && _saveButton.enabled == true){
				onSaveClick();
			}
		}
		public function onClickDownloadJS(extra:String =""):void{
			trace("MC.onClickDownloadJS()")
			if (contains(_downloadButton) && _downloadButton.enabled == true){
				onDownloadClick();
			}
		}
		
		public function onClickRecAgainJS(extra:String =""):void{
			trace("MC.onClickRecAgainJS()")
			if (contains(_recordAgainButton) && _recordAgainButton.enabled == true){
				onStartAgainClick();
			}
		}
		
		public function onClickPauseResumeJS():void{
			trace("MC.onClickPauseResumeJS()")
			onPauseRecording();
		}
		
		
		/*-------------[+]MOUSE EVENTS[+]--------------------*/
		private function onMainBtnClick(e:MouseEvent = null):void{
			trace("onMainBtnClick() current UI state="+_state)
			if(this._state == this.RECORD){
				this._recordAgainButton.visible = false
				if(this._spectrum!= null ){
					if(this.contains(this._spectrum)){
						this.removeChild(this._spectrum);
					}
					
					if(_showButtons == true){
						this._spectrum = new Spectrum(this._width -132, 60,_markerDistance,_soundWaveColor,_waveFillColor);
						this._pauseResumeRecButton.visible = true;
					}else{
						this._spectrum = new Spectrum(this._width -22, 60,_markerDistance,_soundWaveColor,_waveFillColor);
					}
					
					this.addChild(this._spectrum);
					this._spectrum.y = 30;
					
					if(_showButtons == true){
						this._spectrum.x = this._mainButton.x + 100+10+1;	
					}else{
						this._spectrum.x = 10;
					}
					
				}
				if(this._mainLabel != null){
					this._mainLabel.visible = false;
				}
				this.state = this.STOP;
				dispatchEvent(new Event("RECORD_START",true));
				
				if(ExternalInterface.available){
					ExternalInterface.call("btRecordClick",this._recorderId);
				}
				return;
			}
			if(this._state == this.STOP){
				if(_showButtons == true && _disableRecordAgainButton == false){
					 this._recordAgainButton.visible = true; 
				}
				
				this._pauseResumeRecButton.visible = false;
				
				this.state = this.PLAY;
				dispatchEvent(new Event("RECORD_STOP",true));
				if(ExternalInterface.available){
					ExternalInterface.call("btStopClick",this._recorderId);
				}
				
				_mainButton.removeEventListener(MouseEvent.CLICK,onMainBtnClick);
				_mainButton.buttonMode = false;
				_mainButton.alpha = 0.5;
				_mainButton.mouseEnabled = false;
				
				return;
			}
			if(this._state == this.PLAY){
				this.state = this.PAUSE;
				dispatchEvent(new Event("PLAY_START",true));
				if(ExternalInterface.available){
					ExternalInterface.call("btPlayClick",this._recorderId);
				}
				return;
			}
			if(this._state == this.PAUSE){
				this.state = this.PLAY;
				dispatchEvent(new Event("PLAY_PAUSE",true));
				if(ExternalInterface.available){
					ExternalInterface.call("btPauseClick",this._recorderId);
				}
				return;
			}
		}
		
		private function onPlayClick(e:MouseEvent):void{
			if(this._playButton.label == "Play"){
				this._playButton.label = "Pause";
				dispatchEvent(new Event("PLAY_START",true));
			}else{
				this._playButton.label = "Play";
				dispatchEvent(new Event("PLAY_PAUSE",true));
			}
		}
		
		
		private function onSaveClick(e:MouseEvent=null):void{
			this._encodingLabel.text = Locale.loadString("IDS_TXT_UPLOADING");
			
			if(ExternalInterface.available){
				ExternalInterface.call("btSaveClick",this._recordedTime/1000, this._recorderId);
			}
			
			dispatchEvent(new Event("UPLOAD",true));
			
			this._saveButton.enabled = false;
			this._saved = true;
		}
		
		private function onDownloadClick(e:MouseEvent=null):void{
			//dispatchEvent(new Event("DOWNLOAD",true));
			var urlRequest:URLRequest = new URLRequest(_fileurl);
			navigateToURL(urlRequest,"_blank");
			if(ExternalInterface.available){
				ExternalInterface.call("btDownloadClick",this._recorderId);
			}
		}
		
		private function onStartAgainClick(e:MouseEvent=null):void{
			dispatchEvent(new Event("START_AGAIN",true));
		}
		
		private function changeMic(s:String):void{
			trace("MainContainer::changeMic()");
			dispatchEvent(new Event("PRIVACY_PANEL",true));
			Security.showSettings(SecurityPanel.MICROPHONE);	
		};
		
		private function onPauseRecording(e:MouseEvent = null):void{
			trace("MainContainer::onPauseRecording()");
			
			if(recordingState == "PAUSED"){
				this._pauseResumeRecButton.setStyle("upSkin",icon_record_start_out);
				this._pauseResumeRecButton.setStyle("overSkin",icon_record_start_over);
				this._pauseResumeRecButton.setStyle("downSkin",icon_record_start_out);	
				
				_mainButton.removeEventListener(MouseEvent.CLICK,onMainBtnClick);
				_mainButton.buttonMode = false;
				_mainButton.alpha = 0.5;
				_mainButton.mouseEnabled = false;
				
				recordingState = "RESUMED";
				dispatchEvent(new Event("RECORD_PAUSE",true));
				
				if(ExternalInterface.available){
					ExternalInterface.call("btPauseRecordingClick",this._recorderId);
				}
				
			}else if (recordingState =="RESUMED"){
				this._pauseResumeRecButton.setStyle("upSkin",icon_pause_out);
				this._pauseResumeRecButton.setStyle("overSkin",icon_pause_over);
				this._pauseResumeRecButton.setStyle("downSkin",icon_pause_out);
				
				_mainButton.addEventListener(MouseEvent.CLICK,onMainBtnClick);
				_mainButton.buttonMode = true;
				_mainButton.alpha = 1;
				_mainButton.mouseEnabled = true;
				
				recordingState = "PAUSED";
				dispatchEvent(new Event("RECORD_RESUME",true));
				
				if(ExternalInterface.available){
					ExternalInterface.call("btResumeRecordingClick",this._recorderId);
				}
			}

		}
		
		/*-------------[-]MOUSE EVENTS[-]--------------------*/
		
		
		
		/*-------------[+]EXTERNAL EVENTS[+]--------------------*/
		
		public function playDone(e:Event):void{
			this.state = this.PLAY;
			this._spectrum.movePlayBackMaskToPosition(1);
			this._timerLabel.text = this.formatTimeInMs(_recordedTime)+"/"+this.formatTimeInMs(_recordedTime);
			if(ExternalInterface.available){
				ExternalInterface.call("onRecordingPlaybackStopped",this._recorderId);
			}
		}
		
		public function recordStop(e:CustomEvent):void{
			
			if(_showButtons == true){
				this._spectrum.init(e.data["buffer_data"],this._width -132, 60);	
			}else{
				this._spectrum.init(e.data["buffer_data"],this._width -12, 60);
			}
			
			_mainButton.removeEventListener(MouseEvent.CLICK,onMainBtnClick);
			_mainButton.buttonMode = false;
			_mainButton.alpha = 0.5;
			_mainButton.mouseEnabled = false;
			
			_pauseResumeRecButton.visible = false;
						
			//_recordedTime += 1000;
			this._timerLabel.text = this.formatTimeInMs(0)+"/"+this.formatTimeInMs(_recordedTime);
			this.state = this.PLAY;
			dispatchEvent(new Event("SAVE",true));
		}

		public function set state(s:String):void{
			trace("MainContainer::setState("+s+" "+this+")")
			this._state = s;
			if(this._state == this.RECORD){
				
				if(this._mainButton && icon_record_start_out){
				
					this._mainButton.setStyle("upSkin",icon_record_start_out);
					this._mainButton.setStyle("overSkin",icon_record_start_over);
					this._mainButton.setStyle("downSkin",icon_record_start_out);
					if(this._recordAgainButton){
						this._recordAgainButton.visible = false;
					}
				}
			}
			if(this._state == this.STOP){
				this._mainButton.setStyle("upSkin",icon_record_stop_out);
				this._mainButton.setStyle("overSkin",icon_record_stop_over);
				this._mainButton.setStyle("downSkin",icon_record_stop_out);
			
			}
			if(this._state == this.PLAY){
				this._mainButton.setStyle("upSkin",icon_play_out);
				this._mainButton.setStyle("overSkin",icon_play_over);
				this._mainButton.setStyle("downSkin",icon_play_out);
				this.addChild(this._encodingLabel);
				
			}
			if(this._state == this.PAUSE){
				this._mainButton.setStyle("upSkin",icon_pause_out);
				this._mainButton.setStyle("overSkin",icon_pause_over);
				this._mainButton.setStyle("downSkin",icon_pause_out);
				
			}
		}
		
		public function onMicrophoneEvent(e:CustomEvent):void{
			//trace("MainContainer::onMicrophoneEvent("+this._state+")");
			
			if(this._state == this.STOP){
				if (_showSoundWave){
					this._spectrum.drawRealTime(e.data['32BitSample'], e.data["time"]);
				}else{
					this._spectrum.drawRealTime(0,0);
				}
				this._timerLabel.text = this.formatTimeInMs(e.data["time"])+"/"+ this.formatTimeInMs(this._timeLimit);
				
				//this._timerLabel.text = e.data["time"]+"/"+ this._timeLimit;
				_recordedTime = e.data["time"];
			}else if(this._state == this.PAUSE){
				//trace("MainContainer::onMicrophoneEvent("+e.data["time"]+"/"+_recordedTime+")");
				this._spectrum.movePlayBackMaskToPosition(e.data["time"]/_recordedTime);
				this._timerLabel.text = this.formatTimeInMs(e.data["time"])+"/"+this.formatTimeInMs(_recordedTime);
				//this._timerLabel.text = e.data["time"]+"/"+_recordedTime;
			}
			
			if(_showButtons == true){
				this._timerLabel.x =   120 + (this._width -120 -10- this._timerLabel.width) /2;	
			}else{
				this._timerLabel.x =   (this._width - _timerLabel.width)/2;
			}
			
		}
		
		public function onProgressEncode(e:ProgressEvent):void{
			trace("MainContainer::onProgressEncode()"+e.bytesLoaded+" "+e.bytesTotal);
			this._encodingLabel.text = Locale.loadString("IDS_TXT_ENCODING")+Math.round(e.bytesLoaded)+"%";
			
		}
		
		public function onMp3Ready(e:CustomEvent):void{
			trace("MainContainer::onMp3Ready()");
			
			//this._downloadButton.enabled = true;
			addChild(_saveButton)
			this._saveButton.enabled = true;
			_encodingLabel.x-=(_saveButton.width+10)
			_encodingLabel..text=""
			
			if(ExternalInterface.available){
				ExternalInterface.call("onEncodingDone",this._recordedTime/1000, this._recorderId);
			}
			
			_mainButton.addEventListener(MouseEvent.CLICK,onMainBtnClick);
			_mainButton.buttonMode = true;
			_mainButton.alpha = 1;
			_mainButton.mouseEnabled = true;
			
			if(_showButtons == true && _disableRecordAgainButton == false){
				this._recordAgainButton.visible = true; 	
			}
		}
		
		public function onUploadReady(e:CustomEvent):void{
			trace("MainContainer::onUploadReady("+e.data["save"]+")");
			
			if (e.data["save"]=="ok"){
				this._encodingLabel.text = Locale.loadString("IDS_TXT_UPLOAD_DONE");
				this._fileurl=e.data["fileurl"];
				if(this._canDownload!=0){
					this.addChild(this._downloadButton);
					this._downloadButton.enabled = true;
				}
				if (contains(_saveButton)){
					removeChild(_saveButton)
				}
				if(ExternalInterface.available){
					ExternalInterface.call("onUploadDone", true, e.data["name"],this._recordedTime/1000, this._recorderId);
				}
			}else{
				onUploadFailed(e);
			}
		}
		
		
		public function onUploadFailed(e:CustomEvent):void{
			trace("MainContainer::onUploadFailed()");
			this._encodingLabel.text = Locale.loadString("IDS_TXT_UPLOAD_FAILED");
			if(this._canDownload!=0){
				this.addChild(this._downloadButton);
				this._downloadButton.enabled = true;
			}
			if(ExternalInterface.available){
				ExternalInterface.call("onUploadDone", false, e.data["name"], this._recordedTime/1000, this._recorderId);
			}
		}
		
		public function onMutedMicrophone(e:Event):void{
			trace("MainContainer::onMutedMicrophone()");
			this.state = this.RECORD;
			this._mainLabel.visible = true;
			this._mainLabel.text = Locale.loadString("IDS_TXT_UNMUTE");
		}
		
		public function onUnmutedMicrophone(e:Event):void{
			trace("MainContainer::onUnmutedMicrophone()");
			this.state = this.STOP;
			//recCountDown.addEventListener(TimerEvent.TIMER,starRecording);
			//recCountDown.start();
			this._mainLabel.visible = false;
			this._mainLabel.text = Locale.loadString("IDS_TXT_UNMUTE");
		}
		
		/*private function starRecording(e:TimerEvent):void{
			this.state = this.STOP;
		}*/
		
		public function onNoMicrophone(e:Event):void{
			trace("MainContainer::onNoMicrophone()");
			this.state = this.RECORD;
			this._mainLabel.visible = true;
			this._mainLabel.text = Locale.loadString("IDS_TXT_NEEDMIC")	
		}
		
		public function onMicrophoneReady(e:CustomEvent):void{
			trace("MainContainer::onMicrophoneReady()");
			if(Microphone.names.length > 1){
				this._microphoneLabel.htmlText = Locale.loadString("IDS_TXT_MIC")+e.data['mic_name']+" <a href='event:CHANGE_MIC'><font color='#0000ff'>"+Locale.loadString("IDS_BT_CHANGE")+"</font></a> ";
			}
		}
		/*-------------[-]EXTERNAL EVENTS[-]------------------*/
		
		
		
		/*-------------[+]OTHER FUNCTIONS[+]-----------------*/
		
		public function formatTimeInMs(time : Number) : String {
			var ns : uint = (time / 1000) >> 0;
			var minutes : uint = (ns / 60) >> 0;
			var seconds : uint = ns - (minutes * 60);
			return ((minutes < 10 ? "0" : "") + minutes + ":") + ((seconds < 10 ? "0" : "") + seconds);
		}
		
		/*-------------[-]OTHER FUNCTIONS[-]-----------------*/
	   
	}
}