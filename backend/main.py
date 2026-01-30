from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en prod → domaine précis
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Score(BaseModel):
    player_id: str
    score: int

@app.post("/score")
def score(data: Score):
    return {
        "xp": data.score // 10,
        "coins": data.score // 5
    }

@app.get("/daily")
def daily():
    return {"reward": 100} 

players = {}

@app.post("/xp")
def add_xp(player_id: str, xp: int):
    players.setdefault(player_id, {"xp": 0, "premium": False})
    players[player_id]["xp"] += xp
    return players[player_id]

@app.post("/premium")
def premium(player_id: str):
    players.setdefault(player_id, {"xp": 0, "premium": True})
    players[player_id]["premium"] = True
    return {"status": "premium activated"}