import { Platform } from "../components/game/platform.js";
import { Ball } from "../components/game/ball.js";

export const POINTS = 10;
export const MAX_POINTS = 20;

export class GameBase extends Phaser.Scene
{
    constructor()
    {
        super({key:'game-base'});
        this.platform = new Platform(this,400,460);
        this.ball = new Ball(this,400,150);
    }

    create()
    {
        this.physics.world.setBoundsCollision(true,true,true,false);

        this.background = this.add.image(400,250,'background');
        this.scoreText = this.add.text(384,20,'SCORE: 0',{fontSize:'18px',fontWeight:'bold',color:'#FFF',fontFamily:'Poppins, sans serif'});
        this.score = 0;

        this.platform.create();
        this.ball.create();

        this.platformSound = this.sound.add('platform-impact-FX');

        this.physics.add.collider(this.platform.get(),this.ball.get(),this.platformBallCollision,null,this);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update()
    {
        if(this.score>=MAX_POINTS)
        {
            this.scene.pause();
            this.scene.start('level-win');
        }

        if(this.ball.isLost())
        {
            this.scene.pause();
            this.scene.start('gameover');
        }

        this.platform.updatePosition(this.cursors);
    }

    platformBallCollision()
    {
        this.score+=POINTS;
        this.updateScoreText();
        this.platformSound.play();
    }

    updateScoreText()
    {
        this.scoreText.setText(`SCORE: ${this.score}`);
    }
}