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

    headers = {
    "User-Agent": "daily-pulse-backend/1.0"
    }

    try:

        response = requests.get(url, params=params, headers=headers)
        print("CoinGecko status:", response.status_code)
        response.raise_for_status()
        
        
        data = response.json()
        result = []

        for coin in data:
            result.append(
                {
                    "id": coin.get("id"),
                    "name": coin.get("name"),
                    "symbol": coin.get("symbol").upper(),
                    "image": coin.get("image"),
                    "current_price": coin.get("current_price"),
                    "price_change_percentage_24h": coin.get("price_change_percentage_24h"),
                    "market_cap": coin.get("market_cap"),
                    "total_volume": coin.get("total_volume"),
                    "high_24h": coin.get("high_24h"),
                    "low_24h": coin.get("low_24h"),
                    "sparkline": coin.get("sparkline_in_7d", {}).get("price", [])[-24:]
                }
            )
        return result
    
    except requests.exceptions.RequestException as e:
        print("Request to CoinGecko failed:", e)
        return [{"error": "Failed to fetch crypto data from CoinGecko"}]

    except ValueError as e:
        print("Failed to parse JSON:", e)
        return [{"error": "Invalid response format from CoinGecko"}]

    except Exception as e:
        print("Unknown error in crypto route:", e)
        return [{"error": "Internal server error in crypto route"}]

        