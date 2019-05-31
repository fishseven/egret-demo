class JD extends egret.Sprite{
  //private shp:egret.Shape = new egret.Shape();
  private shp:egret.Bitmap = GameUtil.createBitmapByName("egg_png");
  private shp2:egret.Bitmap = GameUtil.createBitmapByName("egg2_png");
  private hit:egret.Bitmap = GameUtil.createBitmapByName("hit_png");
  //var bg:egret.Bitmap = ResourceUtils.createBitmapByName("bgImage");
//    private  shp1:egret.Shape = new egret.Shape();

public touchable:boolean = false;

public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.press.onTouchStart,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.press.onTouchEnd,this);
	}
    private onAddToStage(event:egret.Event) {
        //var shp:egret.Shape = new egret.Shape();
            this.shp.x = 10;
            this.shp.y = 600;
            this.shp2.x = 10;
            this.shp2.y = 600;
            this.hit.x = 170+109;
            this.hit.y = 520+161;
            this.hit.anchorOffsetX=109;
            this.hit.anchorOffsetY=161;
            // this.shp.graphics.lineStyle( 10, 0x00ff00 );
            // this.shp.graphics.beginFill( 0xff0000, 1);
            // this.shp.graphics.drawCircle( 0, 0, 75 );
            // this.shp.graphics.endFill();
            this.shp2.alpha=0;
            this.hit.alpha=0;
            this.addChild( this.shp );
             this.addChild( this.shp2 );
              this.addChild( this.hit );
            this.shp.touchEnabled=this.touchable;
            this.width = this.shp.width;
           // alert(this.width)
		    this.height = this.shp.height;
        }
    private press:any={
        onTouchStart:()=>{ 
            this.shp.alpha=0;
            this.hit.alpha=1;
            egret.Tween.get(this.hit).to({rotation: -20},50,egret.Ease.quartInOut);
        },
        onTouchEnd: () => {
            egret.Tween.get(this.shp2).to({ alpha: 1 }, 100);
			this.shp2.alpha =1;
			this.getGift(); // 获取中奖结果
		}
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