// Phaser oyun konfigürasyonu
var config = {
    type: Phaser.AUTO, // Oyun tipi: WebGL veya Canvas
    width: 800, // Oyun genişliği
    height: 600, // Oyun yüksekliği
    physics: {
        default: 'arcade', // Fizik motoru tipi
        arcade: {
            gravity: { y: 300 }, // Y yönündeki yer çekimi
            debug: false // Geliştirme sırasında fizik sınırlarını görmek için debug açabilirsiniz
        }
    },
    scene: {
        preload: preload, // Oyun öncesi yüklenen grafikler
        create: create,   // Oyun başlatılırken çağrılan fonksiyon
        update: update    // Oyun döngüsünü sürekli güncelleyen fonksiyon
    }
};

// Phaser oyun objesini oluşturuyoruz
var game = new Phaser.Game(config);

// Oyun içi değişkenler
var player; // Oyuncu karakteri
var cursors; // Klavye kontrolleri
var score = 0; // Başlangıç puanı
var scoreText; // Ekranda gözükecek olan puan metni

// Oyun grafikleri ve varlıkları yükleniyor
function preload() {
    this.load.image('background', 'https://3xent123.github.io/Html5game/Background.png');
    this.load.image('player', 'https://3xent123.github.io/Html5game/Samurai.png');
}

// Oyun yaratılıyor
function create() {
    // Arka planı ekliyoruz
    this.add.image(400, 300, 'background');

    // Oyuncuyu fiziksel özelliklerle birlikte ekliyoruz
    player = this.physics.add.sprite(100, 450, 'player');
    player.setBounce(0.2); // Oyuncunun hafif bir sekme hareketi olsun
    player.setCollideWorldBounds(true); // Oyuncu ekranın dışına çıkamasın

    // Klavye kontrollerini oluşturuyoruz
    cursors = this.input.keyboard.createCursorKeys();

    // Puan metnini ekrana yerleştiriyoruz
    scoreText = this.add.text(16, 16, 'Skor: 0', { fontSize: '32px', fill: '#fff' });
}

// Oyun döngüsü
function update() {
    // Sol ve sağ ok tuşları ile hareket
    if (cursors.left.isDown) {
        player.setVelocityX(-160); // Sola hareket
    } else if (cursors.right.isDown) {
        player.setVelocityX(160); // Sağa hareket
    } else {
        player.setVelocityX(0); // Düz durma

    }

    // Yukarı ok tuşu ile zıplama, yalnızca oyuncu yere temas ediyorsa
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330); // Zıplama
    }

    // Oyun içindeki belirli olaylar olduğunda skoru artırabilirsiniz
    // Örneğin bir düşman yok edildiğinde skoru artıracağız
    // Aşağıda örnek gösterilmiştir:
    // score += 10; // Puan ekleme
    // scoreText.setText('Skor: ' + score); // Ekranda puanı güncelleme
}
