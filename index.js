import { Home } from "./src/scenes/home.js"
import { Levels } from "./src/scenes/levels.js";
import { GameOver } from "./src/scenes/gameover.js";
import { GameWin } from "./src/scenes/gamewin.js";
import { GameBase } from "./src/scenes/gamebase.js";
import { LevelWin } from "./src/scenes/levelwin.js";

const config =
{
    type: Phaser.AUTO,
    width:800,
    height:500,
    physics:
    {
        default:'arcade',
        arcade:
        {
            gravity:{y:400},
            debug:false
        }
    },
    scale:
    {
        mode:Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Home,Levels,GameBase,LevelWin,GameOver,GameWin]
}

const game = new Phaser.Game(config);