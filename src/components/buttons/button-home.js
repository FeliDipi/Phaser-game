import { Button } from "./button.js";

export class ButtonHome extends Button
{
    constructor(scene,x,y)
    {
        super(scene,'home-button',x,y);
    }

    doClick()
    {
        this.relatedScene.scene.start('home');
    }
}