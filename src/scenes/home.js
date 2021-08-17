import { ButtonStart } from "../components/buttons/button-start.js";

export class Home extends Phaser.Scene
{
    constructor()
    {
        super({key:'home'})
        this.buttonStart = new ButtonStart(this,400,400);
    }

    create()
    {
        this.background = this.add.image(400,250,'background');
        this.title = this.add.image(400,50,'title').setScale(0.5);
        this.buttonStart.create();
    }
}