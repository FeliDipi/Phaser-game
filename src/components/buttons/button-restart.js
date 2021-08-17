import { Button } from "./button.js";

export class ButtonRestart extends Button
{
    constructor(scene,x,y)
    {
        super(scene,'reset-button',x,y);
    }

    create(indexLevel)
    {
        super.create();
        this.index = indexLevel;
    }

    doClick()
    {
        this.relatedScene.sound.add('start-game-FX').play();
        this.relatedScene.scene.start('game-base',{indexLevel:this.index});
        console.log(`reset level: ${this.index}`);
    }
}