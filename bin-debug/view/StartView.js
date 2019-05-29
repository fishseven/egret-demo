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
var StartView = (function (_super) {
    __extends(StartView, _super);
    function StartView() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    StartView.prototype.onAddToStage = function (event) {
        var startBtn = new eui.Button();
        startBtn.label = "开始游戏!";
        startBtn.horizontalCenter = 0;
        startBtn.verticalCenter = 0;
        startBtn.width = 400;
        startBtn.height = 150;
        startBtn.x = (this.parent.stage.$stageWidth - startBtn.width) / 2;
        startBtn.y = (this.parent.stage.$stageHeight - startBtn.height) / 2;
        this.addChild(startBtn);
        startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    /**
     * 点击按钮
     * Click the button
     */
    StartView.prototype.onButtonClick = function (e) {
        var jd = new JD();
        this.parent.addChild(jd);
        this.parent.removeChild(this);
    };
    return StartView;
}(egret.Sprite));
__reflect(StartView.prototype, "StartView");
//# sourceMappingURL=StartView.js.map