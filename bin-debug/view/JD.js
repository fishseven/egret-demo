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
var JD = (function (_super) {
    __extends(JD, _super);
    function JD() {
        var _this = _super.call(this) || this;
        _this.shp = new egret.Shape();
        _this.shp1 = new egret.Shape();
        _this.press = {
            onTouchStart: function () {
                _this.shp1.alpha = 0.5;
                _this.shp1.scaleX = _this.shp1.scaleY = 0.65;
            },
            onTouchEnd: function () {
                _this.shp1.alpha = 1;
                _this.shp1.scaleX = _this.shp1.scaleY = 1;
                _this.getGift(); // 获取中奖结果
            }
        };
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.press.onTouchStart, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.press.onTouchEnd, _this);
        return _this;
        //手指按到屏幕，触发 startMove 方法
        //this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
    }
    JD.prototype.onAddToStage = function (event) {
        this.shp.x = 100;
        this.shp.y = 100;
        this.shp.graphics.lineStyle(10, 0x00ff00);
        this.shp.graphics.beginFill(0xff0000, 1);
        this.shp.graphics.drawCircle(0, 0, 75);
        this.shp.graphics.endFill();
        this.shp1.x = 300;
        this.shp1.y = 300;
        this.shp1.graphics.lineStyle(10, 0x00ff00);
        this.shp1.graphics.beginFill(0xff0000, 1);
        this.shp1.graphics.drawCircle(0, 0, 75);
        this.shp1.graphics.endFill();
        this.addChild(this.shp1);
        this.shp1.touchEnabled = true;
        // this.addChild( shp );
        // this.width = shp.width;
        // this.height = shp.height;
    };
    JD.prototype.getGift = function () {
        // 测试
        this.onPostComplete();
    };
    JD.prototype.onPostComplete = function (event) {
        // 测试
        var res = JSON.parse('{ "status": 1, "msg": "奖品5", "prize_id": 1, "prize_name": "iphone7" }');
        if (res.status == 1) {
            alert("恭喜你，中奖了！");
        }
    };
    return JD;
}(egret.Sprite));
__reflect(JD.prototype, "JD");
//# sourceMappingURL=JD.js.map