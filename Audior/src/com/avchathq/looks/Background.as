package com.avchathq.looks
{
	import flash.display.Shape;

	public class Background extends Shape
		
	{
		private var _width:Number = 320;
		private var _height:Number = 640;
		private var _color:uint = 0xefefef;
		private var _cornerRadius:Number;
		private var _borderColor:uint;
		private var _borderWidth:Number;
		
		public function Background(){
			super();
		}
		
		public function init(width:Number = 320, height:Number = 240,color:uint = 0xefefef, cornerRadius:Number = 15, borderColor:uint = 0x999999, borderWidth:Number = 1):void{
			//we decrease by 1 to account for the border
			this._height = height-1;
			this._width =  width-1;
			this._color = color;
			this._cornerRadius = cornerRadius;
			this._borderColor = borderColor;
			this._borderWidth = borderWidth;
			
			this.graphics.clear();
			this.graphics.lineStyle(_borderWidth,_borderColor,1,true);
			this.graphics.beginFill(this._color);
			this.graphics.drawRoundRect(0, 0, this._width, this._height,_cornerRadius);
			this.graphics.endFill();
		}
	}
}