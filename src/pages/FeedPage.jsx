import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import { API_URL } from '../config'; // ✅ импортируем базовый URL

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(`${API_URL}/api/feed`); // ✅ используем API_URL

        if (!response.ok) throw new Error('Ошибка загрузки ленты');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="feed-page">
      <h1>Лента</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default FeedPage;
