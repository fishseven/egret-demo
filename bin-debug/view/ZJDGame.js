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
var ZJDGame = (function (_super) {
    __extends(ZJDGame, _super);
    function ZJDGame() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    ZJDGame.prototype.onAddToStage = function (event) {
    };
    return ZJDGame;
}(egret.Sprite));
__reflect(ZJDGame.prototype, "ZJDGame");
//# sourceMappingURL=ZJDGame.js.map