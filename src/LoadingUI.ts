class LoadingUI extends egret.Sprite {

    public pBar:eui.ProgressBar;
    private textField:egret.TextField;

    public constructor() {
        super();
        this.createView();
    }

    

    private createView():void {

 

        this.textField = new egret.TextField();
        this.textField.text="正在加载中....";
        this.textField.bold=true;
        
        
        this.textField.height = 24;
        //this.textField.size = 50;
        this.textField.textAlign = "center";
        this.addChild(this.textField);
        
    }

    public setProgress(current, total):void {
        //this.pBar.value=current*this.pBar.maximum/total;
        this.textField.text = "正在加载中...."+current+"/"+total;
    }
}
