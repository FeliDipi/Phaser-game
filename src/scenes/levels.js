import { ButtonHome } from "../components/buttons/button-home.js";
import { ButtonLevel } from "../components/buttons/button-level.js";

export class Levels extends Phaser.Scene
{
    constructor()
    {
        super({key:'levels'});
        this.buttonHome = new ButtonHome(this,750,50);
        this.level1 = new ButtonLevel(this,225,250,1);
        this.level2 = new ButtonLevel(this,400,250,2);
        this.level3 = new ButtonLevel(this,575,250,3);
        this.level4 = new ButtonLevel(this,225,340,4);
        this.level5 = new ButtonLevel(this,400,340,5);
        this.level6 = new ButtonLevel(this,575,340,6);
    }

    create()
    {
        this.background = this.add.image(400,250,'background');
        this.selectionMenu = this.add.image(400,250,'level-menu');
        this.buttonHome.create();
        this.level1.create();
        this.level2.create();
        this.level3.create();
        this.level4.create();
        this.level5.create();
        this.level6.create();
    }
}