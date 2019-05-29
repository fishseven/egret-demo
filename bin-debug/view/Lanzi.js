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
var Lanzi = (function (_super) {
    __extends(Lanzi, _super);
    function Lanzi() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Lanzi.prototype.onAddToStage = function (event) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xffffff, 1);
        shp.graphics.drawRect(0, 0, this.parent.stage.$stageWidth, 300);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    return Lanzi;
}(egret.Sprite));
__reflect(Lanzi.prototype, "Lanzi");
//# sourceMappingURL=Lanzi.js.map