class GameView extends egret.Sprite{
	public constructor() {
		super();
		this.once(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this );
	}

	private zhongziList:Zhongzi[] = [];

	private lanzi:Lanzi;

	private addGarbageTimer: egret.Timer = new egret.Timer(800);

	private fenshu:egret.TextField;
    private fenshuNum:egret.TextField;

	private onAddToStage(event:egret.Event) {

		let fenshu = new egret.TextField();
        fenshu.text="分数：";
        fenshu.bold=true;
        fenshu.textColor = 0xffffff;
        fenshu.y = this.stage.$stageHeight*.05+10;
        fenshu.x = 40;
        fenshu.width = 150;
        fenshu.height = 45;
        fenshu.size = 45;
        this.addChild(fenshu);
        this.fenshu = fenshu;

        let fenshuNum = new egret.TextField();
        fenshuNum.text="0";
        fenshuNum.bold=true;
        fenshuNum.textColor = 0xffffff;
        fenshuNum.y = fenshu.y-10;
        fenshuNum.x = fenshu.x+fenshu.width;
        fenshuNum.width = 120;
        fenshuNum.height = 55;
        fenshuNum.size = 55;
        fenshuNum.textAlign = "center";
        this.addChild(fenshuNum);
        this.fenshuNum = fenshuNum;

		let lanzi = new Lanzi();
		lanzi.width = this.parent.stage.stageWidth;
		lanzi.height = 300;
		lanzi.y = this.parent.stage.stageHeight-lanzi.height;
		
		this.addChild(lanzi);
		this.lanzi = lanzi;

		this.addGarbageTimer.addEventListener(egret.TimerEvent.TIMER,this.addGarbageTimerCall,this);
        this.addGarbageTimer.start();

		//绘制生成随机
        this.addEventListener(egret.Event.ENTER_FRAME,this.zhognziMove,this);
	}

	 private addGarbageTimerCall()
    {
        // if(parseInt(this.timeNum.text)<40){
        // 	this.addGarbageTimer.stop();
        // 	this.addGarbageTimer = new egret.Timer(800);
        // 	this.addGarbageTimer.addEventListener(egret.TimerEvent.TIMER,this.addGarbageTimerCall,this);
        // 	this.addGarbageTimer.start();
        // 	this.speedNum = 6;
        // }
        // if(parseInt(this.timeNum.text)<30){
        // 	this.addGarbageTimer.stop();
        // 	this.addGarbageTimer = new egret.Timer(600);
        // 	this.addGarbageTimer.addEventListener(egret.TimerEvent.TIMER,this.addGarbageTimerCall,this);
        // 	this.addGarbageTimer.start();
        // 	this.speedNum = 8;
        // }
        // if(parseInt(this.timeNum.text)<10){
        // 	this.addGarbageTimer.stop();
        // 	this.addGarbageTimer = new egret.Timer(400);
        // 	this.addGarbageTimer.addEventListener(egret.TimerEvent.TIMER,this.addGarbageTimerCall,this);
        // 	this.addGarbageTimer.start();
        // 	this.speedNum = 12;
        // }
        let speed =1;
		for(let i=0;i<speed;i++){
			let z = new Zhongzi();
			z.x = this.stage.$stageWidth+Math.floor(Math.random()*4)*75;
			let index = Math.floor(Math.random()*((this.stage.$stageHeight*.8)/75));
			z.y = index*50;
			z.touchEnabled = true;
			this.zhongziList.push(z);
			this.addChild(z);

			//手指离开屏幕，触发 stopMove 方法
        	z.addEventListener(egret.TouchEvent.TOUCH_END,this.hitEvent,this);

			z.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.hitEvent,this);
		}

    }

	private hitEvent(e:egret.TouchEvent){
		let z:Zhongzi = e.currentTarget;
		if(GameUtil.hitTest(z,this.lanzi)){
			if(z.y>this.stage.stageHeight-z.height){
				z.y = this.stage.stageHeight-z.height;
			}
			if(z.x<0){
				z.x=0;
			}
			if(z.x>this.stage.$stageWidth-z.width){
				z.x = this.stage.$stageWidth-z.width;
			}
			if(z.y<this.lanzi.y){
				if(this.lanzi.y-z.y>(z.height/2)){
					z.y=z.y-z.height/2;
				}
				
			}
			//放入篮子
			this.fenshuNum.text = parseInt(this.fenshuNum.text)+1+"";
			z.touchEnabled = false;
		}else{
			z.isTouch = false;
		}
	}

	private speedNum:number = 4;
	private _lastTime:number = 0;
	private zhognziMove(evt: egret.Event): void{

        var nowTime: number = egret.getTimer();
        var fps: number = 1000 / (nowTime - (this._lastTime));
        this._lastTime = nowTime;
        var speedOffset: number = 60 / fps;

        var count: number = this.zhongziList.length;

        for(let i = 0; i < count; i++)
        {
            var z:Zhongzi = this.zhongziList[i];

            // if(garbage.y > Game.stageHeight)
            // {
            //     try{
            // 		this.removeChild(garbage);
            // 	}catch(exception){

            // 	}
            //     this.randGarbages.splice(i,1);
            //     i--;
            //     garbageCount--;
            // }
            // if(garbage.y > Game.stageHeight*.25)
            // {
            //     try{
            //         //this.removeChild(garbage);
            //     }catch(exception){

            //     }
            //     this.randGarbages.splice(i,1);
            //     i--;
            //     garbageCount--;
            // }
            // if(!garbage.isTouch){
            //     garbage.y +=this.speedNum*speedOffset;
            // }
			if(!z.isTouch){
				if(z.x<this.stage.stageWidth*.6){
					z.x = z.x-5*speedOffset;
				}if(z.x<this.stage.stageWidth*.4){
					z.x = z.x-6*speedOffset;
				}else{
					z.x = z.x-4*speedOffset;
				}
			}

        }

    }
}