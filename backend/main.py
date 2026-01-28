from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Score(BaseModel):
    player_id: str
        score: int

        @app.post("/score")
        def score(data: Score):
            return {
                    "message": "Score reçu",
                            "xp": data.score // 10
                                }