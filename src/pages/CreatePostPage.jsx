import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/CreatePostPage.css';

const CreatePostPage = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка поста:', content);
    // Здесь можно отправить запрос на сервер
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="create-post-page">
      <h2 className="create-post-title">Создать пост</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Что у вас нового?"
          className="create-post-textarea"
        />
        <button type="submit" className="create-post-submit">
          Опубликовать
        </button>
      </form>
      <button onClick={handleClose} className="create-post-close">
        Close
      </button>
    </div>
  );
};

export default CreatePostPage;
