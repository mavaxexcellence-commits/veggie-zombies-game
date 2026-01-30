const API_URL = window.location.hostname.includes("localhost")
  ? "http://127.0.0.1:8000"
  : "https://TON_BACKEND_URL";

let level = 1;
let difficulty = 1;

function generateLevel(level) {
  return {
    zombies: Math.min(5 + level * 2, 50),
    speed: 100 + level * 15,
    giantChance: Math.min(level * 3, 60),
    hp: 1 + Math.floor(level / 5)
  };
}

function startLevel() {
  const config = generateLevel(level);

  console.log("LEVEL", level, config);

  // exemple affichage
  this.add.text(10, 10, "Level " + level, { fontSize: "18px" });
}


function winLevel() {
  level++;
  startLevel();
}

const config = {
  type: Phaser.AUTO,type: Phaser.AUTO,
type: Phaser.AUTO,
width: 360,
height: 640,
scene: { create }
};

new Phaser.Game(config);

function create() {
  const text = this.add.text(80, 300, "🧟‍♂️ ZOMBIE\nCLIQUE MOI", {
    fontSize: "24px",
    fill: "#00ff00"
 });

 text.setInteractive();

 text.on("pointerdown", () => {
   text.setText("🥕 MIGNON !");
   sendScore(100);
 });
}

function sendScore(score) {
  fetch("fetch("http://127.0.0.1:8000/score",`${API_URL}/score`,  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ player_id: "player1", score })
 })

.then(res => res.json())
.then(data => {
  xp += data.xp;
  console.log("XP:", xp);
 });
}

let skin = "normal";

function applySkin(type) {
  skin = type;
  console.log("Skin:", skin);
}

fetch("http://127.0.0.1:8000/daily")
  .then(r => r.json())
  .then(d => alert("Récompense du jour: " + d.reward));

function showRewardedAd() {
  console.log("Afficher pub récompensée");
  // En prod : SDK AdMob / AppLovin
}
                                                                                                                                                                      
if (playerWantsBonus) {
  showRewardedAd();
  giveReward();
} 