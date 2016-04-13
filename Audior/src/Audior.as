package
{
	import com.avchathq.*;
	import com.avchathq.engine.AudioEngine;
	import com.avchathq.engine.CustomEvent;
	import com.avchathq.looks.Background;
	import com.avchathq.looks.MainContainer;
	
	import fl.lang.*;
	
	import flash.display.LoaderInfo;
	import flash.display.Sprite;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.MouseEvent;
	import flash.events.ProgressEvent;
	import flash.net.*;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.text.TextFormat;
	import flash.ui.ContextMenu;
	import flash.ui.ContextMenuItem;
	
	import k;
	
	[SWF(width=600, height=140, backgroundColor="0xffffff", frameRate="31")]
	public class Audior extends Sprite
	{
		
		private var _AudioEngine:AudioEngine;
		private var _Background:Background;	
		private var _MainContainer:MainContainer;
		private var _mainLabel:TextField;
		
		//settings vars
		private var _maxTimeLimit:Number = 120;
		private var _recordName:String = "record";
		private var _addRandomNumberToName:Boolean = true;
		private var _canDownload:Boolean = true;
		private var _uploadURL:String = "upload.php";
		private var _showSoundWave:Boolean = true;
		private var _markerDistance:Number = 20;
		private var _recorderId:String = "";
		private var _userId:String = "";
		private var _languageFile:String = "translations/en.xml";
		private var _sLoadingSettings:String = "Loading...";
		private var _settingsFile:String = "";
		
		private var _showButtons:Boolean = true;
		private var _disableSaveButton:Boolean = false;
		private var _disableRecordAgainButton:Boolean = false;
		
		private var _bgCornerRadius:Number = 15;
		private var _bgColor:uint = 0xefefef;
		private var _borderColor:uint = 0x999999;
		private var _borderWidth:Number = 1;
		private var _soundWaveColor:uint = 0x333333;
		private var _waveFillColor:uint = 0xFA5223;
		
		
		public function Audior(){
			trace("Audior()");
			super();
			
			//scaling and size, no scale align top left
			stage.scaleMode = StageScaleMode.NO_SCALE
			stage.align = StageAlign.TOP_LEFT
			
			if (LoaderInfo(root.loaderInfo).parameters.recorderId!=null && LoaderInfo(root.loaderInfo).parameters.recorderId!=undefined && LoaderInfo(root.loaderInfo).parameters.recorderId!=""){
				this._recorderId=LoaderInfo(root.loaderInfo).parameters.recorderId;
			}
			
			if (LoaderInfo(root.loaderInfo).parameters.lstext!=null && LoaderInfo(root.loaderInfo).parameters.lstext!=undefined && LoaderInfo(root.loaderInfo).parameters.lstext!=""){
				_sLoadingSettings=LoaderInfo(root.loaderInfo).parameters.lstext;
			}
				
				
			if (LoaderInfo(root.loaderInfo).parameters.userId!=null && LoaderInfo(root.loaderInfo).parameters.userId!=undefined && LoaderInfo(root.loaderInfo).parameters.userId!=""){
				this._userId=LoaderInfo(root.loaderInfo).parameters.userId;
			}
			
			if (LoaderInfo(root.loaderInfo).parameters.settingsFile!=null && LoaderInfo(root.loaderInfo).parameters.settingsFile!=undefined && LoaderInfo(root.loaderInfo).parameters.settingsFile!=""){
				this._settingsFile=LoaderInfo(root.loaderInfo).parameters.settingsFile;
			}else{
				this._settingsFile = "audior_settings.xml";	
			}
			
			var _cm:ContextMenu = new ContextMenu();
			//_cm.hideBuiltInItems()
			
			var cmi:ContextMenuItem = new ContextMenuItem("{revision}");
			_cm.customItems.push(cmi);
			
			contextMenu = _cm;
			
			this._mainLabel = new TextField();
			this._mainLabel.defaultTextFormat = new TextFormat("Arial", 18, 0x33333,false,false,false,null,null,"center");
			this._mainLabel.width = stage.stageWidth;
			this._mainLabel.height = 20;
			this._mainLabel.wordWrap = true;
			this._mainLabel.selectable = false;
			this._mainLabel.autoSize = TextFieldAutoSize.CENTER;
			this._mainLabel.htmlText = _sLoadingSettings;
			this.addChild(this._mainLabel);
			this._mainLabel.y = 50;

			
			//var lk:k = new k();
			if(LoaderInfo(root.loaderInfo).parameters.licenseKey){
				if (k.validateKey(LoaderInfo(root.loaderInfo).parameters.licenseKey)){
					this.loadSettings();
				}else if (LoaderInfo(root.loaderInfo).parameters.licenseKey=="PLACE_LICENSE_KEY_HERE"){
					this._mainLabel.htmlText = "Missing license key.";
					return;
				}else{
					this._mainLabel.htmlText = "Invalid license key.";
					return;
				}
			}else{
				this._mainLabel.htmlText = "Missing license key.";
				return;
			}
		}
		
		private function loadSettings():void{
			trace("Audior::loadEncodingSettings()")
			var loader:URLLoader = new URLLoader();
			loader.load(new URLRequest(this._settingsFile + "?rand="+Math.random()+"&recorderId="+this._recorderId));
			loader.addEventListener(Event.COMPLETE, onSettingsXMLLoaded);
			loader.addEventListener(IOErrorEvent.IO_ERROR, onSettingsXMLError);
		}
		
		private function onSettingsXMLLoaded(e:Event):void{
			trace("Audior::onSettingsXMLLoaded()")
			
			var xmlSettings:XML = XML(e.target.data);
			
			if(xmlSettings.maxTimeLimit != "undefined" && Number(xmlSettings.maxTimeLimit) > 0){
				this._maxTimeLimit = Number(xmlSettings.maxTimeLimit);
			}
			
			if(xmlSettings.recordName != "undefined" && xmlSettings.recordName != ""){
				this._recordName = xmlSettings.recordName;
			}
			
			if(xmlSettings.addRandomNumberToName != "undefined" && Number(xmlSettings.addRandomNumberToName) == 0){
				this._addRandomNumberToName = false;
			}

			if(xmlSettings.uploadURL && xmlSettings.uploadURL!="" && xmlSettings.uploadURL.text() != "" && xmlSettings.uploadURL!=null && xmlSettings.uploadURL.text()!=null && xmlSettings.uploadURL!=undefined && xmlSettings.uploadURL.text()!=undefined){
				this._uploadURL = xmlSettings.uploadURL.text();
			}
			
			if (Number(xmlSettings.showSoundWave)==0){
				_showSoundWave = false
			}
			
			if (!isNaN(xmlSettings.markerDistance) && Number(xmlSettings.markerDistance)!=20)
			{
				_markerDistance = Number(xmlSettings.markerDistance)
			}

			if(Number(xmlSettings.canDownload) == 0)
			{
				this._canDownload = false;
			}
			
			if(xmlSettings.languageFile!=undefined && xmlSettings.languageFile!="")
			{
				this._languageFile = xmlSettings.languageFile;
			}
			
			if(Number(xmlSettings.showButtons)==0)
			{
				this._showButtons = false;
			}
			
			if(Number(xmlSettings.disableSaveButton)==1)
			{
				this._disableSaveButton = true;
			}
			
			if(Number(xmlSettings.disableRecordAgainButton)==1)
			{
				this._disableRecordAgainButton = true;
			}
			
			if(xmlSettings.bgCornerRadius!=undefined && xmlSettings.bgCornerRadius!="")
			{
				this._bgCornerRadius = Number(xmlSettings.bgCornerRadius);
			}
			
			if(xmlSettings.bgColor!=undefined && xmlSettings.bgColor!="")
			{
				this._bgColor = parseInt(xmlSettings.bgColor);
			}
			
			if(xmlSettings.borderColor!=undefined && xmlSettings.borderColor!="")
			{
				this._borderColor = parseInt(xmlSettings.borderColor);
			}
			
			if(xmlSettings.borderWidth!=undefined && xmlSettings.borderWidth!="")
			{
				this._borderWidth = Number(xmlSettings.borderWidth);
			}
			
			if(xmlSettings.soundWaveColor!=undefined && xmlSettings.soundWaveColor!="")
			{
				this._soundWaveColor =  parseInt(xmlSettings.soundWaveColor);
			}
			
			if(xmlSettings.playBackFillColor!=undefined && xmlSettings.playBackFillColor!="")
			{
				this._waveFillColor =  parseInt(xmlSettings.playBackFillColor);
			}
			
			//init the background
			initBackground();
			
			//start loading the language file
			loadLanguageFile();
		}
		
		private function loadLanguageFile():void{
			Locale.addXMLPath("en", _languageFile+"?rand="+Math.random());
			Locale.loadLanguageXML("en", onLanguageXMLLoaded);
		}
		
		private function onLanguageXMLLoaded(succes:Boolean):void{
			if(succes){
				this.removeChild(this._mainLabel);
				this.initSkin();
				this.initAE();
				this.initListeners();
			}else{
				this._mainLabel.htmlText = "Could not load language file:"+_languageFile;
			}
		}
		
		private function onSettingsXMLError(e:Event):void{
			this._mainLabel.htmlText = "Could not find <a href='"+this._settingsFile+"'><font color='#ff0000'>"+this._settingsFile+"</font></a>";
		}
		
		private function initSkin():void{
			this._MainContainer = new MainContainer(stage.stageWidth,140, this._maxTimeLimit, this._canDownload, this._recorderId,this._userId,this._showSoundWave, _markerDistance,this._showButtons,this._disableSaveButton,this._disableRecordAgainButton,_soundWaveColor,_waveFillColor);
			this._MainContainer.init();
			this.addChild(this._MainContainer);
		}
		
		private function initAE():void{
			this._AudioEngine = new AudioEngine(this._recordName, this._addRandomNumberToName, this._maxTimeLimit, this._recorderId, this._userId, this._uploadURL);
			this.addChild(this._AudioEngine);
		}
		
		private function reset(e:Event):void{
			this.removeListeners();
			this.removeChild(this._MainContainer);
			this._MainContainer = null;
			this._MainContainer = new MainContainer(stage.stageWidth,140, this._maxTimeLimit, this._canDownload, this._recorderId,this._userId, this._showSoundWave,this._markerDistance,this._showButtons,this._disableSaveButton,this._disableRecordAgainButton,_soundWaveColor,_waveFillColor);
			this._MainContainer.init();
			this.addChild(this._MainContainer);
			this._AudioEngine.reset();
			this.initListeners();
		}
		
		private function removeListeners():void{
			this.removeEventListener("RECORD_START", this._AudioEngine.recordStart);
			this.removeEventListener("RECORD_STOP", this._AudioEngine.recordStop);
			this.removeEventListener("RECORD_PAUSE", this._AudioEngine.recordPause);
			this.removeEventListener("RECORD_RESUME", this._AudioEngine.recordResume);
			this.removeEventListener("PLAY_START", this._AudioEngine.playStart);
			this.removeEventListener("PLAY_PAUSE", this._AudioEngine.playPause);
			this.removeEventListener("SAVE", this._AudioEngine.save);
			this.removeEventListener("DOWNLOAD", this._AudioEngine.download);
			this.removeEventListener("UPLOAD", this._AudioEngine.upload);
			this.removeEventListener("RECORD_TERMINATED", this._MainContainer.recordStop); 
			this.removeEventListener("PLAY_DONE", this._MainContainer.playDone);
			this.removeEventListener("MICROPHONE_EVENT", this._MainContainer.onMicrophoneEvent);
			
			this.removeEventListener(ProgressEvent.PROGRESS, this._MainContainer.onProgressEncode);
			this.removeEventListener("MP3_READY", this._MainContainer.onMp3Ready);
			this.removeEventListener("UPLOAD_READY", this._MainContainer.onUploadReady);
			this.removeEventListener("UPLOAD_FAILED", this._MainContainer.onUploadFailed);
				
			this.removeEventListener("MIC_MUTED", this._MainContainer.onMutedMicrophone);
			this.removeEventListener("MIC_UNMUTED", this._MainContainer.onUnmutedMicrophone);
			this.removeEventListener("MIC_SET", this._MainContainer.onMicrophoneReady);
			this.removeEventListener("NO_MICROPHONE", this._MainContainer.onNoMicrophone)
				
			this.removeEventListener("START_AGAIN", this.reset);
			this.removeEventListener("PRIVACY_PANEL", this.onPrivacyPanel);
		
		}
		
		private function initListeners():void{
			this.addEventListener("RECORD_START", this._AudioEngine.recordStart);
			this.addEventListener("RECORD_STOP", this._AudioEngine.recordStop);
			this.addEventListener("RECORD_PAUSE", this._AudioEngine.recordPause);
			this.addEventListener("RECORD_RESUME", this._AudioEngine.recordResume);
			this.addEventListener("PLAY_START", this._AudioEngine.playStart);
			this.addEventListener("PLAY_PAUSE", this._AudioEngine.playPause);
			this.addEventListener("SAVE", this._AudioEngine.save);
			this.addEventListener("DOWNLOAD", this._AudioEngine.download);
			this.addEventListener("UPLOAD", this._AudioEngine.upload);
			this.addEventListener("RECORD_TERMINATED", this._MainContainer.recordStop); 
			this.addEventListener("PLAY_DONE", this._MainContainer.playDone);
			this.addEventListener("MICROPHONE_EVENT", this._MainContainer.onMicrophoneEvent);
		
			this.addEventListener(ProgressEvent.PROGRESS, this._MainContainer.onProgressEncode);
			this.addEventListener("MP3_READY", this._MainContainer.onMp3Ready);
			this.addEventListener("UPLOAD_READY", this._MainContainer.onUploadReady);
			this.addEventListener("UPLOAD_FAILED", this._MainContainer.onUploadFailed);
			
			this.addEventListener("MIC_MUTED", this._MainContainer.onMutedMicrophone);
			this.addEventListener("MIC_UNMUTED", this._MainContainer.onUnmutedMicrophone);
			
			this.addEventListener("MIC_SET", this._MainContainer.onMicrophoneReady);
			this.addEventListener("NO_MICROPHONE", this._MainContainer.onNoMicrophone);
			
			this.addEventListener("START_AGAIN", this.reset);
			this.addEventListener("PRIVACY_PANEL", this.onPrivacyPanel);
			this._AudioEngine.init();

		}
		
		private function onPrivacyPanel(e:Event):void{
			stage.focus = this;
			stage.addEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
		}
		
		private function onMouseMove(e:Event):void {   
			//REMOVE THE LISTENER ON FIRST TIME
			this._AudioEngine.resetMicrophone();
			stage.removeEventListener(MouseEvent.MOUSE_MOVE, onMouseMove);
		}
		
		private function initBackground():void{
			
			this._Background =  new Background();
			this._Background.init(stage.stageWidth -1,140 -1,_bgColor,_bgCornerRadius,_borderColor,_borderWidth);
			this.addChild(this._Background);
		}

	}
}