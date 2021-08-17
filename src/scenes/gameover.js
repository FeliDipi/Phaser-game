import { ButtonHome } from "../components/buttons/button-home.js";
import { ButtonRestart } from "../components/buttons/button-restart.js";

export class GameOver extends Phaser.Scene
{
    constructor()
    {
        super({key:'gameover'});
        this.buttonHome = new ButtonHome(this,350,400);
        this.buttonRestart = new ButtonRestart(this,450,400);
    }

    init(data)
    {
        this.indexLevel = data.indexLevel;
    }

    create()
    {
        this.background = this.add.image(400,250,'background');
        this.gameover = this.add.image(400,50,'gameover').setScale(0.5);
        this.buttonHome.create();
        this.buttonRestart.create(this.indexLevel);
        this.sound.add('gameover-FX').play();
    }
}