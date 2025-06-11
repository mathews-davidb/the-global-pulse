import { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async() => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      return data;
    } catch(error) {
        console.log('Failed to fetch news:', error);
        return [];
    }
  }

  useEffect(() => {
    const getNewsAPIData = async() =>{
      const data = await getNews();
      setNews(data);
    }

    getNewsAPIData();
  },[])

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📰 Top Headlines</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {news.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1.5rem',
              alignItems: 'flex-start',
              borderBottom: '1px solid #eee',
              paddingBottom: '1rem'
            }}
          >
            {/* Thumbnail image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }}
              />
            )}

            {/* Text content */}
            <div style={{ flex: 1 }}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#000',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}
              >
                {item.title}
              </a>
              <p style={{ margin: '0.25rem 0', color: '#555', fontSize: '0.9rem' }}>
                {item.description?.slice(0, 120)}...
              </p>
              <span style={{ fontSize: '0.8rem', color: '#888' }}>{item.source}</span>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}


export default News;