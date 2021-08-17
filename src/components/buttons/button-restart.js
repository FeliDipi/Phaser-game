import { Button } from "./button.js";

export class ButtonRestart extends Button
{
    constructor(scene,x,y,levelIndex)
    {
        super(scene,'reset-button',x,y);
        this.index = levelIndex;
    }

    doClick()
    {
        this.relatedScene.sound.add('start-game-FX').play();
        this.relatedScene.scene.start('game-base');
        console.log(`reset level: ${this.index}`);
    }
}