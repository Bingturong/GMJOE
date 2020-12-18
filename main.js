var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('tBackground', 'assets/tBackground.png');
    this.load.multiatlas('Demi.Walk.Anubis.R', 'assets/animatedsprites/Demi.Walk.Anubis.R/Demi.Walk.Anubis.R.json', 'Demi.Walk.Anubis.R');
}

function create() {
    this.add.image(0, 0, 'tBackground').setOrigin(0, 0)
}

function update() {
}