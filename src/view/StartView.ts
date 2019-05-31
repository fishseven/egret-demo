class StartView extends egret.Sprite{
	public constructor() {
		super();
        this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
	}

	private startBtn:eui.Button;

	private onAddToStage(event:egret.Event) {
		let startBtn = new eui.Button();
        startBtn.label = "开始游戏!";
        startBtn.horizontalCenter = 0;
        startBtn.verticalCenter = 0;
		startBtn.width = 400;
		startBtn.height = 150;
		startBtn.x = (this.parent.stage.$stageWidth-startBtn.width)/2;
		startBtn.y = (this.parent.stage.$stageHeight-startBtn.height)/2;
        this.addChild(startBtn);
        startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
	}

	/**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        let jd= new ZJDGame();
		this.parent.addChild(jd);
		this.parent.removeChild(this);
    }
}