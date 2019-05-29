class Zhongzi extends egret.Sprite{

	//设定2个偏移量
    private offsetX:number;
    private offsetY:number;

	public isTouch:boolean;



	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
		//手指按到屏幕，触发 startMove 方法
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
	}

	private onAddToStage(event:egret.Event) {
		var shp:egret.Shape = new egret.Shape();
        shp.x = 100;
        shp.y = 100;
        shp.graphics.lineStyle( 10, 0x00ff00 );
        shp.graphics.beginFill( 0xff0000, 1);
        shp.graphics.drawCircle( 0, 0, 75 );
        shp.graphics.endFill();
        this.addChild( shp );
		this.width = shp.width;
		this.height = shp.height;
	}

	 private startMove(e:egret.TouchEvent):void{
		this.parent.setChildIndex(this,this.parent.numChildren-1);
		this.isTouch = true;
        //计算手指和要拖动的对象的距离
        this.offsetX = e.stageX - this.x;
        this.offsetY = e.stageY - this.y;
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
        //手指在屏幕上移动，会触发 onMove 方法
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
        // this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,function (e:egret.TouchEvent) {
        // 	let garbage:Garbage = e.currentTarget;
        // 	if(garbage.isTouch){
        // 		//一闪一闪效果
        // 		egret.Tween.get(garbage).wait(100).to({visible:false}).wait(100).to({visible:true}).wait(100).to({visible:false}).wait(100).to({visible:true}).wait(100).to({visible:false}).wait(100).to({visible:true}).wait(100).to({visible:false});
        // 	}
        // },this);
        //手指离开屏幕，触发 stopMove 方法
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.stopMove,this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.stopMove,this);
        //this.parent.addChildAt(this,this.parent.numChildren-1);
    }

    private stopMove(e:egret.TouchEvent) {
		this.parent.setChildIndex(this,this.parent.numChildren-1);
        //手指离开屏幕，移除手指移动的监听
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startMove,this);
    }

    private onMove(e:egret.TouchEvent):void{
		this.parent.setChildIndex(this,this.parent.numChildren-1);
        //this.parent.addChildAt(this,this.parent.numChildren-1);
        //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
		if(e.stageX - this.offsetX<0){
			this.x = 0;
		}
        this.x = e.stageX - this.offsetX;
        this.y = e.stageY - this.offsetY;
    }
}

