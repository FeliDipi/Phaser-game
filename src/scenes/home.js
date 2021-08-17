import { ButtonStart } from "../components/buttons/button-start.js";

export class Home extends Phaser.Scene
{
    constructor()
    {
        super({key:'home'})
        this.buttonStart = new ButtonStart(this,400,400);
    }

    preload()
    {
        //backgrounds
        this.load.image('background','./src/images/background-1.png');

        //buttons
        this.load.spritesheet('play-button','./src/images/play-button.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('reset-button','./src/images/reset-button.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('pause-button','./src/images/pause-button.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('home-button','./src/images/home-button.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('next-button','./src/images/next-button.png',{frameWidth:160,frameHeight:160});

        //buttons levels
        this.load.spritesheet('level-1','./src/images/level-1.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('level-2','./src/images/level-2.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('level-3','./src/images/level-3.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('level-4','./src/images/level-4.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('level-5','./src/images/level-5.png',{frameWidth:160,frameHeight:160});
        this.load.spritesheet('level-6','./src/images/level-6.png',{frameWidth:160,frameHeight:160});

        //texts
        this.load.image('gameover','./src/images/gameover.png');
        this.load.image('wingame','./src/images/wingame.png');
        this.load.image('winlevel','./src/images/winlevel.png');
        this.load.image('title','./src/images/title.png');

        //menus
        this.load.image('level-menu','./src/images/level-menu.png');
        this.load.image('pause-menu','./src/images/pause-menu.png');

        //game components
        this.load.image('platform','./src/images/platform.png');
        this.load.image('ball','./src/images/ball.png');
        this.load.image('brick','./src/images/brick.png');

        //sounds and fx
        this.load.audio('platform-impact-FX','./src/sounds/platform-impact.mp3');
        this.load.audio('gameover-FX','./src/sounds/gameover.mp3');
        this.load.audio('start-game-FX','./src/sounds/start-game.mp3');
        this.load.audio('win-level-FX','./src/sounds/you_win.mp3');
        this.load.audio('break-brick-FX','./src/sounds/breakout.mp3');
    }

    create()
    {
        this.background = this.add.image(400,250,'background');
        this.title = this.add.image(400,50,'title').setScale(0.5);
        this.buttonStart.create();
    }
}