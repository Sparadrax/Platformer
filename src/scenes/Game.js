/**
 * Gameplay scene. Create static platforms, connect player collisions, and map cursor input to movement methods.
 */
import { Player } from '../gameObject/Player.js';
export class Game extends Phaser.Scene {
    /**
     * Initialize this object or scene and its starting state.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns Initialized instance; constructors do not explicitly return a value.
     */
    constructor() {
        super('Game');
    }

    /**
     * Create the scene objects after their assets have loaded.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    create() {
        this.add.image(400, 300, 'sky');
        // this.add.image(400, 300, 'star');

        this.platforms = this.physics.add.staticGroup();
        
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250,'ground');
        this.platforms.create(750, 220,'ground');

        this.player = new Player(this, 100, 450);

        this.physics.add.collider(this.player, this.platforms);
        this.player.body.setGravityY(300);
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    /**
     * Apply the scene update for the current frame.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    update() {
        if (this.cursors.left.isDown) {
            this.player.moveLeft();
        } else if (this.cursors.right.isDown) {
            this.player.moveRight();
        } else {
            this.player.idle();
        }
        if(this.cursors.up.isDown) {
            this.player.jump();
        }
    }
}
