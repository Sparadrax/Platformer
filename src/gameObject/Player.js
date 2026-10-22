/**
 * Player sprite and arcade-physics controls. Movement methods set velocity and animation; jumping is allowed only while grounded.
 */
export class Player extends Phaser.Physics.Arcade.Sprite {
    /**
     * function Object() { [native code] }
     *
     * @param scene - Owning Phaser scene that registers the player sprite and its physics body.
     * @param x - X coordinate in the operation's local coordinate system.
     * @param y - Y coordinate in the operation's local coordinate system.
     * @returns Initialized instance; constructors do not explicitly return a value.
     */
    constructor (scene, x, y) {
        super(scene, x, y, 'dude');

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setBounce(0.2);
        this.setCollideWorldBounds(true);
        this.initAnimations();
    }
    /**
     * Define left, idle, and right animations from the player sprite sheet.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    initAnimations () {
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            framerate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{key: 'dude', frame: 4}],
            framerate: 1,
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
            framerate: 10,
            repeat: -1
        });
    }
    /**
     * Move the player left and play the left-facing animation.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    moveLeft () {
        this.setVelocityX(-200);
        this.anims.play('left', true);
    }
    /**
     * Move the player right and play the right-facing animation.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    moveRight () {
        this.setVelocityX(200);
        this.anims.play('right', true);
    }
    /**
     * Stop horizontal movement and play the idle animation.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    idle () {
        this.setVelocityX(0);
        this.anims.play('turn', true);
    }
    /**
     * Apply upward velocity only when the player is standing on a surface.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    jump () {
        if (this.body.blocked.down) {
            this.setVelocityY(-500);
        }
    }
}