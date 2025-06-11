import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GNEWS_API_KEY")
BASE_URL = "https://gnews.io/api/v4/top-headlines"

def get_news_data():

    params = {
        "token": API_KEY,
        "lang": "en",
        "max": 5
    }

    response = requests.get(BASE_URL, params=params)

    if response.status_code == 200:
        data = response.json()
        return [
            {
                "title": article["title"],
                "url": article["url"],
                "source": article["source"]["name"]
            }
            for article in data.get("articles", [])
        ]
    else: 
        print("NEWS API ERROR:", response.status_code, response.text)
        return ({"error": "Failed to fetch news"})