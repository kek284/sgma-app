import React, { useState, useEffect } from 'react';
import ProfileInfo from '../components/ProfileInfo';
import PostList from '../components/PostList';
import EditProfileButton from '../components/EditProfileButton';
import LogoutButton from '../components/LogOutButton';
import './../styles/Profile.css';

const ProfilePage = () => {
  // Объявляем все состояния явно
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Загрузка данных (моки)
  useEffect(() => {
    const timer = setTimeout(() => {
      setUser({
        id: 1,
        username: 'Иван Иванов',
        bio: 'Привет, я Иван!',
        followers: 128,
        following: 64,
        avatar: 'https://via.placeholder.com/150',
      });
      setPosts([
        { id: 1, title: 'Мой первый пост', content: 'Это тестовый пост!' },
      ]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Функция сохранения профиля
  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser); // Используем объявленный setUser
    console.log('Профиль сохранён:', updatedUser);
    // Здесь будет запрос к API:
    // fetch('/api/user', { method: 'PATCH', body: JSON.stringify(updatedUser) });
  };

  if (loading) return <p>Загрузка...</p>;
  if (!user) return <p>Ошибка загрузки профиля</p>;

  return (
    <div className="profile-page">
      <ProfileInfo user={user} />
      <div className="profile-actions">
        <EditProfileButton user={user} onSave={handleSaveProfile} />
        <LogoutButton />
      </div>
      <h3>Посты</h3>
      <PostList posts={posts} />
    </div>
  );
  
};

export default ProfilePage;