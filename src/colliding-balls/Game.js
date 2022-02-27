/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/github.com/shaack/phaser-template-vanilla-es6
 * License: MIT, see file 'LICENSE'
 */

import {MainScene} from "./scenes/MainScene.js"

export class Game extends Phaser.Game {
    constructor(parent) {
        super(
            {
                backgroundColor: '#000000',
                scale: {
                    mode: Phaser.Scale.FIT,
                    width: 800,
                    height: 600,
                    parent: parent
                },
                physics: {
                    default: 'arcade',
                    arcade: {
                        // debug: true,
                        gravity: {y: 300}
                    }
                }
            }
        )
        this.scene.add('Main', MainScene, false)
        this.scene.start('Main')
    }
}
