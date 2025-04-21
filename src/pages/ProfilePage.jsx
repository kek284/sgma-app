// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import ProfileInfo from '../components/ProfileInfo';
import UserPosts from '../components/UserPosts';
import { API_URL } from '../config';  // Убедись, что путь правильный
 // Добавим подключение API_URL

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);  // Для состояния загрузки
  const [error, setError] = useState(null);      // Для обработки ошибок

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataResponse = await fetch(`${API_URL}/api/user`);  // Обновляем URL
        if (!userDataResponse.ok) throw new Error('Ошибка загрузки данных пользователя');
        const userData = await userDataResponse.json();

        const userPostsResponse = await fetch(`${API_URL}/api/user/posts`);  // Обновляем URL
        if (!userPostsResponse.ok) throw new Error('Ошибка загрузки постов');
        const userPosts = await userPostsResponse.json();

        setUser(userData);
        setPosts(userPosts);
      } catch (error) {
        setError(error.message);  // Устанавливаем ошибку, если что-то пошло не так
      } finally {
        setLoading(false);  // Останавливаем загрузку
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;  // Пока данные загружаются
  }

  if (error) {
    return <p>Ошибка: {error}</p>;  // Если произошла ошибка
  }

  return (
    <div className="profile-page">
      {user ? <ProfileInfo user={user} /> : <p>Нет данных пользователя</p>} {/* Показать если данные пользователя загружены */}
      {posts.length > 0 ? <UserPosts posts={posts} /> : <p>Нет постов</p>} {/* Показать посты, если они есть */}
    </div>
  );
};

export default ProfilePage;
