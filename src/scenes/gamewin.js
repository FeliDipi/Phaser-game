import { ButtonHome } from "../components/buttons/button-home.js";

export class GameWin extends Phaser.Scene
{
    constructor()
    {
        super({key:'gamewin'});
        this.buttonHome = new ButtonHome(this,400,400);
    }

    create()
    {
        this.background = this.add.image(400,250,'background');
        this.sound.add('win-level-FX').play();
        this.buttonHome.create();
    }
}