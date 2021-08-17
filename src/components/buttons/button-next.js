import { Button } from "./button.js";

export class ButtonNext extends Button
{
    constructor(scene,x,y)
    {
        super(scene,'next-button',x,y);
    }

    create(indexLevel)
    {
        super.create();
        this.index = indexLevel+1;
    }

    doClick()
    {
        this.relatedScene.sound.add('start-game-FX').play();
        this.relatedScene.scene.start('game-base',{indexLevel:this.index});
        console.log(`next level: ${this.index}`);
    }
}