import React, { useState, useEffect } from 'react';
import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar'; 
import { API_URL } from '../config';
import './../styles/FeedPage.css'; 
import './../styles/Navbar.css';

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('feed'); 

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(`${API_URL}/api/feed`);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="feed-page">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <header className="feed-header">
        {!isSidebarOpen && (
          <button className="menu-button" onClick={toggleSidebar}>
            ☰
          </button>
        )}
        <div className="tabs">
          <span
            className={activeTab === 'feed' ? 'active' : ''}
            onClick={() => setActiveTab('feed')}
          >
            Feed
          </span>
          <span
            className={activeTab === 'following' ? 'active' : ''}
            onClick={() => setActiveTab('following')}
          >
            Following
          </span>
        </div>
      </header>

      <div className="feed-content">
        <div className={`tab-content ${activeTab === 'feed' ? 'show' : 'hide'}`}>
          {activeTab === 'feed' ? (
            <PostList posts={posts} />
          ) : (
            <p>Здесь будут подписки</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
