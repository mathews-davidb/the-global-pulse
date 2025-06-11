import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("GNEWS_API_KEY")
BASE_URL = "https://gnews.io/api/v4/top-headlines"
USE_MOCK_NEWS = os.getenv("USE_MOCK_NEWS")

def get_news_data():

    if USE_MOCK_NEWS:
        return MOCK_NEWS

    params = {
        "token": API_KEY,
        "lang": "en",
        "max": 10
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
    

MOCK_NEWS = [
    {
        "title": "NASA Announces Crew for Upcoming Artemis II Lunar Mission",
        "url": "https://example.com/nasa-artemis-crew",
        "source": "NASA News"
    },
    {
        "title": "Global Markets Rally After Interest Rate Freeze",
        "url": "https://example.com/markets-interest-rates",
        "source": "Bloomberg"
    },
    {
        "title": "OpenAI Releases New Model for Code Generation",
        "url": "https://example.com/openai-codegen",
        "source": "TechCrunch"
    },
    {
        "title": "Severe Heatwave Sweeps Across Southern Europe",
        "url": "https://example.com/europe-heatwave",
        "source": "BBC"
    },
    {
        "title": "Amazon Unveils AI-Driven Shopping Assistant",
        "url": "https://example.com/amazon-ai-assistant",
        "source": "The Verge"
    },
    {
        "title": "U.S. Job Market Shows Resilience Amid Economic Uncertainty",
        "url": "https://example.com/us-jobs-report",
        "source": "CNN Business"
    },
    {
        "title": "James Webb Telescope Captures Stunning Image of Distant Galaxy",
        "url": "https://example.com/jwst-galaxy-image",
        "source": "Space.com"
    },
    {
        "title": "WHO Warns of New Respiratory Virus Strain in Southeast Asia",
        "url": "https://example.com/who-virus-alert",
        "source": "Reuters"
    },
    {
        "title": "Toyota to Launch Fully Electric SUV in 2025",
        "url": "https://example.com/toyota-ev-launch",
        "source": "Automotive News"
    },
    {
        "title": "UN Climate Report Urges Rapid Action to Avoid Irreversible Damage",
        "url": "https://example.com/un-climate-warning",
        "source": "The Guardian"
    }
]
