/**
 * First Phaser scene. Load the lightweight background needed by the loading screen, then start Preloader.
 */
export class Boot extends Phaser.Scene
{
    /**
     * Initialize this object or scene and its starting state.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns Initialized instance; constructors do not explicitly return a value.
     */
    constructor ()
    {
        super('Boot');
    }

    /**
     * Queue the scene assets for Phaser to load before creation.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/bg.png');
    }

    /**
     * Create the scene objects after their assets have loaded.
     *
     * Inputs: None; uses enclosing state where needed.
     * @returns No value is returned; updates the current state, scene, or interface.
     */
    create ()
    {
        this.scene.start('Preloader');
    }
}
