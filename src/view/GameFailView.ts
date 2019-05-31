class GameFailView extends egret.Sprite{


public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
	}

private onAddToStage(event:egret.Event){
    var failPic:egret.Bitmap = GameUtil.createBitmapByName("faiImg1-2_png"); 
    failPic.x = this.parent.stage.$stageWidth/4-100;
    failPic.y = this.parent.stage.$stageHeight/4-200;
    // failPic.anchorOffsetX =
    // failPic.anchorOffsetY =
    //alert(failPic.x+"======"+failPic.y)
    this.addChild(failPic);
    var btn:eui.Button=new eui.Button();
    //alert(failPic.x+"==="+failPic.y)
    // btn.anchorOffsetX = failPic.x;
    // btn.anchorOffsetY = failPic.y;
    btn.label = "再来一次";
    btn.x = this.parent.stage.$stageWidth/2-100;
    btn.y = this.parent.stage.$stageHeight/2;
    btn.width = 150;
    this.addChild(btn);
    btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.newGame, this);
}

private TouchEvent(){
   //    alert(22)
        //this.parent.removeChildren();
        //alert(33)
        //alert(this.parent.$children);
       // this.newGame();
       this.removeChildAt(0);
       this.removeChildAt(1);
       this.removeChildAt(2);
       this.removeChildAt(3);
       this.removeChildAt(4);
       this.removeChildAt(5);
    }

    private newGame(){
        //alert(11)
        this.parent.addChild(new StartView());
        this.TouchEvent();
    }












}