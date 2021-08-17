import { ButtonHome } from "../components/buttons/button-home.js";
import { ButtonNext } from "../components/buttons/button-next.js";

export class LevelWin extends Phaser.Scene
{
    constructor()
    {
        super({key:'level-win'});
        this.buttonHome = new ButtonHome(this,350,400);
        this.buttonNext = new ButtonNext(this,450,400);
    }

    init(data)
    {
        this.index = data.indexLevel;
    }

    create()
    {
        this.background = this.add.image(400,250,'background');
        this.levelWin = this.add.image(400,50,'winlevel').setScale(0.5);
        this.sound.add('win-level-FX').play();
        this.buttonHome.create();
        this.buttonNext.create(this.index);
    }
}