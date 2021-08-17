export const VEL_INIT = 400;

export class Platform
{
    constructor(scene,x,y)
    {
        this.relatedScene = scene;
        this.x = x;
        this.y = y;
    }

    create()
    {
        this.initPlatform = this.relatedScene.physics.add.image(this.x,this.y,'platform').setScale(0.5).setImmovable();
        this.initPlatform.body.allowGravity = false;
        this.initPlatform.setCollideWorldBounds(true);
    }

    updatePosition(cursors)
    {
        if(cursors.left.isDown)
        {
            this.initPlatform.setVelocityX(-VEL_INIT);
        }
        else if(cursors.right.isDown)
        {
            this.initPlatform.setVelocityX(VEL_INIT);
        }
        else
        {
            this.initPlatform.setVelocityX(0);
        }
    }

    get()
    {
        return this.initPlatform;
    }
}