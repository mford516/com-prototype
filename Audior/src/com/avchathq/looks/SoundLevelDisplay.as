package com.avchathq.looks{
	
	import flash.display.*;
	
	public class SoundLevelDisplay extends Sprite
	{
		
		private var _spGrads:Sprite;
		private var _background:Sprite;
		private var _maxLevel:Number;
		
		public function SoundLevelDisplay()
		{
			super();
			_spGrads = new Sprite();
			addChild(_spGrads)
			for (var i:int=0; i<20; i++) {
				var shape:Sprite = new Sprite();
				if (i<2) {
					shape.graphics.beginFill(0x999999,1);
				} else if (i>17) {
					shape.graphics.beginFill(0xff0000,1);
/* 				} else if (i>15) {
					shape.graphics.beginFill(0x999900,1); */
				} else {
					shape.graphics.beginFill(0x009900,1);
				}
				shape.graphics.drawRect(0,0,5,8);
				shape.graphics.endFill();
				_spGrads.addChild(shape);
				shape.x=i*6;
				shape.visible=false
			}
			this.makeBackgorund();
		}
		
		public function makeBackgorund():void{
			this._background = new Sprite();
			addChildAt(this._background,0);
			for (var i:int=0; i<20; i++) {
				var shape:Shape = new Shape();
				shape.graphics.beginFill(0xefefef,0.75);
				shape.graphics.drawRect(0,0,5,8);
				shape.graphics.endFill();
				shape.x=i*6;
				this._background.addChild(shape);
			}
		}
		
		public function set level (n:Number):void{
			//maxLevel = (n+(5-n%5))/5
			_maxLevel = (n-n%5)/5
			for (var i:int = 0;i<20;i++){
				if (i<_maxLevel){
					_spGrads.getChildAt(i).visible=true
				}else{
					_spGrads.getChildAt(i).visible=false
				}
			}
		}

	}
}