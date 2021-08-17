import { Button } from "./button.js";

export class ButtonStart extends Button
{
    constructor(scene,x,y)
    {
        super(scene,'play-button',x,y);
    }

    doClick()
    {
        this.relatedScene.sound.add('start-game-FX').play();
        this.relatedScene.scene.start('levels');
    }
}