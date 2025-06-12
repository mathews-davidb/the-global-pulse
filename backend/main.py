from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import services.crypto as crypto
import services.weather as weather
import services.news as news
from models.crypto import CryptoCoin
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = [
    "http://localhost:3000",
    "https://potential-space-potato-vwx4qq47j4jhpgr5-3000.app.github.dev"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to The Global Pulse API"}

@app.get("/api/crypto", response_model=List[CryptoCoin])
def get_crypto():
    return crypto.get_crypto_data()

@app.get("/api/weather")
def get_weather():
    return weather.get_weather_data()

@app.get("/api/news")
def get_news():
    return news.get_news_data()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000)