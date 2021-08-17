import { Button } from "./button.js";

export class ButtonLevel extends Button
{
    constructor(scene,x,y,levelIndex)
    {
        super(scene,`level-${levelIndex}`,x,y);
        this.index = levelIndex;
    }

    doClick()
    {
        this.relatedScene.sound.add('start-game-FX').play();
        this.relatedScene.scene.start('game-base');
        console.log(`Load Level: ${this.index}`);
    }
}