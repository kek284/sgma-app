import React, { useState } from 'react';
import './../styles/EditProfileButton.css';

const EditProfileButton = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSave = async () => {
    if (!editedUser.username.trim()) {
      setError('Имя пользователя обязательно');
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSave(editedUser);
      setIsEditing(false);
    } catch (err) {
      setError('Не удалось сохранить изменения');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="edit-profile-wrapper">
      {!isEditing && (
        <button 
          className="edit-button" 
          onClick={() => setIsEditing(true)}
        >
          Редактировать профиль
        </button>
      )}
      
      {isEditing && (
        <div className="edit-form-overlay">
          <div className="edit-form-container">
            <div className="edit-form">
              <input
                type="text"
                name="username"
                value={editedUser.username}
                onChange={handleChange}
                placeholder="Имя пользователя"
                disabled={isLoading}
              />
              <textarea
                name="bio"
                value={editedUser.bio}
                onChange={handleChange}
                placeholder="О себе"
                disabled={isLoading}
              />
              
              {error && <p className="error-message">{error}</p>}

              <div className="edit-buttons">
                <button 
                  onClick={handleSave} 
                  disabled={isLoading}
                  className="save-button"
                >
                  {isLoading ? 'Сохранение...' : 'Сохранить'}
                </button>
                <button 
                  onClick={() => setIsEditing(false)} 
                  disabled={isLoading}
                  className="cancel-button"
                >
                  Отмена
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfileButton;