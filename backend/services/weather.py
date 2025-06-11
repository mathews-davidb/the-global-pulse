import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OPENWEATHER_API_KEY")
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

cities = ["New York", "New Orleans", "Los Angeles", "Chicago", "Miami"]

def get_weather_data():
    weather_data = [];

    for city in cities:
        params = {
            "q": city,
            "appid": API_KEY,
            "units": "imperial"
        }
        response = requests.get(BASE_URL, params=params)
        if response.status_code == 200:
            data = response.json();
            weather_data.append({
                "city": city,
                "temp": data["main"]["temp"],
                "condition": data["weather"][0]["main"],
                "icon": data["weather"][0]["icon"]
            })
        else:
            weather_data.append({
                "city": city,
                "error": "Could not fetch weather"
            })

    return weather_data