export const VEL_INIT = 200;

export class Ball
{
    constructor(scene,x,y)
    {
        this.relatedScene = scene;
        this.x = x;
        this.y = y;
    }

    create()
    {
        this.initBall = this.relatedScene.physics.add.image(this.x,this.y,'ball').setScale(0.2);
        this.initBall.body.allowGravity = false;
        this.initBall.setBounce(1);
        this.initBall.setCollideWorldBounds(true);

        let velocty = VEL_INIT;

        if(Phaser.Math.Between(0,10)>5) velocty*=-1;

        this.initBall.setVelocity(velocty,VEL_INIT);
    }

    get()
    {
        return this.initBall;
    }

    isLost()
    {
        return this.initBall.y>500;
    }
}