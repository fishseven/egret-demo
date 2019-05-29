class JD extends egret.Sprite{
 private shp:egret.Shape = new egret.Shape();
   private  shp1:egret.Shape = new egret.Shape();
public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.press.onTouchStart,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.press.onTouchEnd,this);
		//手指按到屏幕，触发 startMove 方法
		//this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
	}
    private onAddToStage(event:egret.Event) {
           
            this.shp.x = 100;
            this.shp.y = 100;
            this.shp.graphics.lineStyle( 10, 0x00ff00 );
            this.shp.graphics.beginFill( 0xff0000, 1);
            this.shp.graphics.drawCircle( 0, 0, 75 );
            this.shp.graphics.endFill();
            this.shp1.x = 300;
            this.shp1.y = 300;
            this.shp1.graphics.lineStyle( 10, 0x00ff00 );
            this.shp1.graphics.beginFill( 0xff0000, 1);
            this.shp1.graphics.drawCircle( 0, 0, 75 );
            this.shp1.graphics.endFill();
            this.addChild( this.shp1 );
            this.shp1.touchEnabled=true;
            // this.addChild( shp );
            // this.width = shp.width;
            // this.height = shp.height;
        }
    private press:any={
        
        onTouchStart:()=>{
           
            this.shp1.alpha=0.5;
            this.shp1.scaleX = this.shp1.scaleY = 0.65;
        },
        onTouchEnd: () => {
			 this.shp1.alpha=1;
            this.shp1.scaleX = this.shp1.scaleY = 1;
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
           alert("恭喜你，中奖了！")
        }
    }
    
}