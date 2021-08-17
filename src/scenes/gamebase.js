import { Platform } from "../components/game/platform.js";
import { Ball } from "../components/game/ball.js";

export const POINTS = 10;
export const MAX_POINTS = 100;

export class GameBase extends Phaser.Scene
{
    constructor()
    {
        super({key:'game-base'});
        this.platform = new Platform(this,400,460);
        this.ball = new Ball(this,400,300);
    }

    init(data)
    {
        this.indexLevel = data.indexLevel;
    }

    create()
    {
        this.physics.world.setBoundsCollision(true,true,true,false);

        this.background = this.add.image(400,250,'background');
        this.scoreText = this.add.text(384,20,'SCORE: 0',{fontSize:'18px',fontWeight:'bold',color:'#FFF',fontFamily:'Poppins, sans serif'});
        this.score = 0;

        this.bricks = this.physics.add.staticGroup({
            key: 'brick',
            frameQuantity: 10,
            gridAlign: {
              width: 5,
              height: 0,
              cellWidth: 110,
              cellHeight: 45,
              x: 200,
              y: 100
            }
          });

        this.platform.create();
        this.ball.create();

        this.platformSound = this.sound.add('platform-impact-FX');

        this.physics.add.collider(this.platform.get(),this.ball.get(),this.platformBallCollision,null,this);
        this.physics.add.collider(this.ball.get(),this.bricks,this.brickBallCollision,null,this);

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update()
    {
        if(this.isFinished())
        {
            this.scene.pause();
            this.scene.start('level-win',{indexLevel:this.indexLevel});
        }

        if(this.ball.isLost())
        {
            this.scene.pause();
            this.scene.start('gameover',{indexLevel:this.indexLevel});
        }

        this.platform.updatePosition(this.cursors);
    }

    platformBallCollision()
    {
        this.score+=POINTS;
        this.updateScoreText();
        this.platformSound.play();
    }

    brickBallCollision(ball,brick)
    {
        this.score+=POINTS;
        this.updateScoreText();
        this.platformSound.play();
        brick.disableBody(true, true);
    }

    updateScoreText()
    {
        this.scoreText.setText(`SCORE: ${this.score}`);
    }

    isFinished()
    {
        return (this.bricks.countActive() === 0);
    }
}