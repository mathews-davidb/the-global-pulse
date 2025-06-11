from pyndatic import BaseModel
from typing import List

class CryptoCoin(BaseModel):
    id: str
    name: str
    symbol: str
    image: str
    current_price: float
    price_change_percentage_24h: float
    market_cap: int
    total_volume: int
    high_24h: float
    low_24h: float
    sparkline: List[float]