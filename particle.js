class Particle {
    constructor(){
    this.x = random(width);
    this.y = height/2;
    this.w = width/20;
    this.h = width/10;
    this.hue = random([35,45,55,65]);
    this.sat = 100;
    this.bri = random([45,65,75,85]);
    this.x_mov = 10;
    this.y_mov = 0.1;
    this.y_rand = 0.01;
    }

    display(){
        stroke(this.hue,50,100,60)
        fill(this.hue,this.sat,this.bri);
        ellipse(this.x,this.y,this.w,this.h);
    }

    move(){
        this.x += random(-this.x_mov,this.x_mov);
        this.y += this.y_mov + random(-this.y_rand,this.y_rand);
        this.h = map(this.y,height/2,height,width/5,40);
        this.w = map(this.y, height/2,height,width/120,width/60);
        this.x_mov = map(this.y,height/2,height,150,30);
        this.y_mov = map(this.y,height/2,height,0.1,2);
        this.y_rand = map(this.y,height/2,height,0.0,1)
    }
}
