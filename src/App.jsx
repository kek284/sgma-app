import './styles/global.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import FeedPage from './pages/FeedPage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Эффект для добавления/удаления класса no-scroll при открытии сайдбара
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('no-scroll');  // блокируем прокрутку
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [sidebarOpen]);

  return (
    <>
      {/* Выводим сайдбар с возможностью его закрытия */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Основные роуты приложения */}
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create" element={<CreatePostPage />} />
      </Routes>
    </>
  );
}

export default App;
