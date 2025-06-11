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
      <h2>Top Headlines</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <strong>{item.title}</strong>
            </a>
            <br />
            <small>{item.source}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default News;