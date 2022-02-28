/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/github.com/shaack/phaser-template-vanilla-es6
 * License: MIT, see file 'LICENSE'
 */

export class MainScene extends Phaser.Scene {

    preload() {
    }

    create() {
        const bounciness = 1
        const startSpeed = 100
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2
        this.balls = []
        for (let i = 0; i < 10; i++) {
            const size = Phaser.Math.Between(4, 80)
            const color = new Phaser.Display.Color()
            color.random()
            const circle = this.add.circle(screenCenterX, screenCenterY, size, color.color)
            this.physics.add.existing(circle)
            circle.body.setCircle(size)
            // circle.body.setBounce(0.9, 0.9)
            circle.body.bounce.set(bounciness)
            circle.body.setCollideWorldBounds(true, bounciness, bounciness)
            circle.body.setVelocity(Phaser.Math.Between(-startSpeed, startSpeed), Phaser.Math.Between(-startSpeed, startSpeed))
            // circle.body.setMass(1)
            for (const ball of this.balls) {
                this.physics.add.collider(ball, circle)
            }
            this.balls.push(circle)
        }
    }

    update(time, delta) {
    }

}
