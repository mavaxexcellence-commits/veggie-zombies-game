const config = {
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
                                        fetch("/score", {
                                            method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({ player_id: "player1", score })
                                                      });
                                                      }
}