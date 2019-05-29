var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Zhongzi = (function (_super) {
    __extends(Zhongzi, _super);
    function Zhongzi() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        //手指按到屏幕，触发 startMove 方法
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.startMove, _this);
        return _this;
    }
    Zhongzi.prototype.onAddToStage = function (event) {
        var shp = new egret.Shape();
        shp.x = 100;
        shp.y = 100;
        shp.graphics.lineStyle(10, 0x00ff00);
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.drawCircle(0, 0, 75);
        shp.graphics.endFill();
        this.addChild(shp);
        this.width = shp.width;
        this.height = shp.height;
    };
    Zhongzi.prototype.startMove = function (e) {
        this.parent.setChildIndex(this, this.parent.numChildren - 1);
        this.isTouch = true;
        //计算手指和要拖动的对象的距离
        this.offsetX = e.stageX - this.x;
        this.offsetY = e.stageY - this.y;
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
        //手指在屏幕上移动，会触发 onMove 方法
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        // this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,function (e:egret.TouchEvent) {
        // 	let garbage:Garbage = e.currentTarget;
        // 	if(garbage.isTouch){
        // 		//一闪一闪效果
        // 		egret.Tween.get(garbage).wait(100).to({visible:false}).wait(100).to({visible:true}).wait(100).to({visible:false}).wait(100).to({visible:true}).wait(100).to({visible:false}).wait(100).to({visible:true}).wait(100).to({visible:false});
        // 	}
        // },this);
        //手指离开屏幕，触发 stopMove 方法
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.stopMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.stopMove, this);
        //this.parent.addChildAt(this,this.parent.numChildren-1);
    };
    Zhongzi.prototype.stopMove = function (e) {
        this.parent.setChildIndex(this, this.parent.numChildren - 1);
        //手指离开屏幕，移除手指移动的监听
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startMove, this);
    };
    Zhongzi.prototype.onMove = function (e) {
        this.parent.setChildIndex(this, this.parent.numChildren - 1);
        //this.parent.addChildAt(this,this.parent.numChildren-1);
        //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
        if (e.stageX - this.offsetX < 0) {
            this.x = 0;
        }
        this.x = e.stageX - this.offsetX;
        this.y = e.stageY - this.offsetY;
    };
    return Zhongzi;
}(egret.Sprite));
__reflect(Zhongzi.prototype, "Zhongzi");
//# sourceMappingURL=Zhongzi.js.map