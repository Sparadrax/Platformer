/**
 * Game-over presentation scene. Display a background overlay and the ending message.
 */
export class GameOver extends Phaser.Scene {
    /**
     * Initialize this object or scene and its starting state.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns Initialized instance; constructors do not explicitly return a value.
     */
    constructor() {
        super('GameOver');
    }

    /**
     * Create the scene objects after their assets have loaded.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    create() {
        this.cameras.main.setBackgroundColor(0xff0000);

        this.add.image(512, 384, 'background').setAlpha(0.5);

        this.add.text(512, 384, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

    }
}
