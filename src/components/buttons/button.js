export class Button
{
    constructor(scene,image,x,y)
    {
        this.relatedScene = scene;
        this.image = image;
        this.x = x;
        this.y = y;
    }

    create()
    {
        this.initButton = this.relatedScene.add.sprite(this.x,this.y,this.image).setScale(0.5).setInteractive();

        this.initButton.on('pointerout',()=>
        {
            this.initButton.setFrame(0);
        });

        this.initButton.on('pointerover',()=>
        {
            this.initButton.setFrame(1);
        });

        this.initButton.on('pointerdown',()=>
        {
            this.doClick();
        });
    }
}