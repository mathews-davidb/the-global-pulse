from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import services.crypto as crypto
import services.weather as weather

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to The Global Pulse API"}

@app.get("/api/crypto")
def get_crypto():
    return crypto.get_crypto_data()

@app.get("/api/weather")
def get_weather():
    return weather.get_weather_data()