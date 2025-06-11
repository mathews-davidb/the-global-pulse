import requests

def get_crypto_data():
    url = "https://api.coingecko.com/api/v3/coins/markets"
    params = {
        "vs_currency": "usd",
        "order": "market_cap_desc",
        "per_page": 10,
        "page": 1,
        "sparkline": "true"
    }
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        return [
            {
                "id": coin["id"],
                "name": coin["name"],
                "symbol": coin["symbol"].upper(),
                "image": coin["image"],
                "current_price": coin["current_price"],
                "price_change_percentage_24h": coin["price_change_percentage_24h"],
                "market_cap": coin["market_cap"],
                "total_volume": coin["total_volume"],
                "high_24h": coin["high_24h"],
                "low_24h": coin["low_24h"],
                "sparkline": coin.get("sparkline_in_7d", {}).get("price", [])[-20:]
            }
            for coin in data
        ]