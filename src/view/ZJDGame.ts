class ZJDGame extends egret.Sprite{

	private bg:egret.Bitmap = GameUtil.createBitmapByName("bg_png");
	public constructor() {
		super();
		//this.initGame();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
		
	}
  private initGame(): void {
        egret.Tween.get(this.bg).to({ alpha: 1 }, 500, egret.Ease.circIn);
    }
    
    private onAddToStage(event:egret.Event) {
		for (var i=0;i<3;i++){
			for(var j=0;j<2;j++){
				let jd = new JD();
				jd.x+=200*i;
				jd.y+=200*j;
				jd.touchable = true;
				this.addChild(jd);
			}
			
			//alert(jd.x+"===="+this.stage.stageWidth)
			
			//alert(jd.width)
			
		}
		// let jd2 = new JD();
		// 	jd2.x+=200;
		// 	this.addChild(jd2);
    }





	

    private getGift(): void {
        // 测试
        this.onPostComplete();
    }

    private onPostComplete(event?: egret.Event): void {

        // 测试
        let res = JSON.parse('{ "status": 1, "msg": "奖品5", "prize_id": 1, "prize_name": "iphone7" }');

        if(res.status == 1) {
        let fail = new GameFailView();
        //alert(this.parent.$children)
        //this.$alpha=0.5;
        this.parent.addChild(fail);
        
        //    alert("恭喜你，中奖了！")
        }else{
           alert("很遗憾！")
        }
    }
    
}