var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;
var game = new Phaser.Game(config);

function preload() {
    // Oyun için arka plan ve karakter grafiklerini yüklüyoruz
    this.load.image('background', 'https://example.com/background.png');
    this.load.image('player', 'https://example.com/player.png');
}

function create() {
    // Arka plan ve oyuncuyu ekranda oluşturuyoruz
    this.add.image(400, 300, 'background');
    player = this.physics.add.sprite(400, 300, 'player');

    // Ok tuşlarıyla oyuncuyu hareket ettirmek için kontrolleri ayarlıyoruz
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Klavye ile oyuncu hareketini kontrol etme
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    }
}
