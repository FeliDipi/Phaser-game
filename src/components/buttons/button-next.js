import { Button } from "./button.js";

export class ButtonNext extends Button
{
    constructor(scene,x,y)
    {
        super(scene,'next-button',x,y);
    }

    create()
    {
        this.relatedScene.sound.add('start-game-FX').play();
    }
}