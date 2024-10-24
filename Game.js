var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    // Arka plan ve oyuncu karakter grafikleri
    this.load.image('background', 'background.png');
    this.load.image('player', 'samurai.png');
}

function create() {
    // Arka planı sahneye ekleyelim
    this.add.image(400, 300, 'background');

    // Oyuncu karakterini fiziksel özelliklerle ekleyelim
    player = this.physics.add.sprite(100, 450, 'player');
    player.setBounce(0.2); // Zıpladıktan sonra hafifçe sekiyor
    player.setCollideWorldBounds(true); // Ekran dışına çıkmasını engeller

    // Klavye kontrolleri
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Klavyeden gelen girişlere göre oyuncunun hareketini kontrol ediyoruz
    if (cursors.left.isDown) {
        player.setVelocityX(-160); // Sol hareket
    } else if (cursors.right.isDown) {
        player.setVelocityX(160); // Sağ hareket
    } else {
        player.setVelocityX(0); // Durma
    }

    // Zıplama
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330); // Zıplama
    }
}

var score = 0;
var scoreText;

function create() {
    // Skor metnini ekleyelim
    scoreText = this.add.text(16, 16, 'Skor: 0', { fontSize: '32px', fill: '#fff' });
}

function update() {
    // Oyun içindeki belirli olaylar olduğunda skoru artırabilirsiniz
    // Örneğin bir düşman yok edildiğinde:
    score += 10; // Puan artırma
    scoreText.setText('Skor: ' + score); // Skoru güncelleme
}
