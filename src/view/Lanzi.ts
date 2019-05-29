 class Lanzi extends egret.Sprite{
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
	}

	private onAddToStage(event:egret.Event) {
		var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0xffffff, 1);
        shp.graphics.drawRect( 0, 0, this.parent.stage.$stageWidth, 300 );
        shp.graphics.endFill();
        this.addChild(shp);
	}
}
