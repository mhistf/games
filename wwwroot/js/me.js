var me = function(){
    this.init();
}

me.prototype.init = function(){
    this.r = 100*radio;
    this.R = 150*radio;
    this.width = 300*radio;
    this.height = 300*radio;
    this.x = win_w/2;
    this.y = win_h/2 + this.r + this.height;
    this.speed = 20; // 规定移动速度
    this.toX = 0; // 记录到达下一地点x位置
    this.toY = 0; // 记录到达下一地点y位置
    this.isMove = false;
    //this.draw();
}

me.prototype.draw = function(){
    if(this.isMove){
        this.move();
    }
    ctx.drawImage(document.getElementById('me'),this.x - this.width/2,this.y - this.height/2,this.width,this.height);
}

me.prototype.move = function(){

    // if( this.x + this.width < win_w/2 - this.r && this.x > win_w/2+this.r ){
    //     if(this.x < this.toX){
    //         this.x = this.x > this.toX - this.speed ? this.toX : this.x + this.speed;
    //     }else{
    //         this.x = this.x < this.toX + this.speed ? this.toX : this.x - this.speed;
    //     }
    // }
    // if(this.y + this.height > win_h/2 - this.r && this.y > win_h/2 + this.r ){

    //     if(this.y < this.toY){
    //         this.y = this.y > this.toY - this.speed ? this.toY : this.y + this.speed;
    //     }else{
    //         this.y = this.y < this.toY + this.speed ? this.toY : this.y - this.speed;
    //     }
    // }else{
    //     //console.log('碰到了')
    // }
    
    // 中心圆形碰撞检测
    
    // var l1 = this.x;
    // var r1 = this.x + this.width;
    // var t1 = this.y;
    // var b1 = this.y + this.height;
    // var l2 = win_w/2 - this.R;
    // var r2 =  win_w/2 + this.R;
    // var t2 = win_h/2 - this.R;
    // var b2 = win_h/2 + this.R;

    //if(b1<t2 || l1>r2 || t1>b2 || r1<l2){
        if(this.x < this.toX){
            this.x = this.x > this.toX - this.speed ? this.toX : this.x + this.speed;
        }else{
            this.x = this.x < this.toX + this.speed ? this.toX : this.x - this.speed;
        }
        if(this.y < this.toY){
            this.y = this.y > this.toY - this.speed ? this.toY : this.y + this.speed;
        }else{
            this.y = this.y < this.toY + this.speed ? this.toY : this.y - this.speed;
        }

        // 边界判断
        if(this.x < this.width/2){
            this.x = this.width/2;
        }
        if(this.x > win_w - this.width/2){
            this.x = win_w - this.width/2;
        }
        if(this.y < this.height/2){
            this.y = this.height/2;
        }
        if(this.y > win_h - this.height/2){
            this.y = win_h - this.height/2;
        }
        // 中心区域判断
        

        // if(this.x > win_w/2 - this.R + this.speed && this.x < win_w/2 + this.R -this.speed ){
        //     if(this.y < win_h/2 && this.y > win_h/2 - this.R ){
        //         this.y = win_h/2 - this.R;
        //     }
        //     if(this.y > win_h/2 && this.y < win_h/2+this.R){
        //         this.y = win_h/2 + this.R;
        //     }
        // }
        // if(this.y > win_h/2 - this.R + this.speed && this.y < win_h/2 + this.R - this.speed){
        //     if(this.x > win_w/2 - this.R && this.x <win_w/2 ){
        //         this.x =  win_w/2 - this.R
        //     }
        //     if(this.x > win_w/2 && this.x < win_w/2+this.R){
        //         this.x = win_w/2 + this.R;
        //     }
        // }

        if(this.x > win_w/2 - this.R  && this.x < win_w/2 + this.R ){
            var r = Math.sqrt(Math.pow(win_w/2 - this.x,2) + Math.pow(win_h/2 - this.y,2) );
            if(r < this.r + this.R){
                var y = Math.sqrt(Math.pow(this.r+this.R,2) - Math.pow(win_w/2 - this.x,2) );
                this.y = this.y < win_h/2 ? win_h/2 - y : win_h/2 + y;
            }
        }
        if(this.y > win_h/2 - this.R  && this.y < win_h/2 + this.R ){
            var r = Math.sqrt(Math.pow(win_w/2 - this.x,2) + Math.pow(win_h/2 - this.y,2) );
            if(r < this.r + this.R){
                var x = Math.sqrt(Math.pow(this.r+this.R,2) - Math.pow(win_h/2 - this.y,2) );
                this.x = this.x < win_w/2 ? win_w/2 - x : win_w/2 + x;
            }
        }

   
}

