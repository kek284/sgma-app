// src/components/LogoutButton.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/LogOutButton.css';

const LogoutButton = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    // Очистка данных авторизации
    localStorage.removeItem('token');
    navigate('/login'); // Перенаправление на страницу входа
  };

  return (
    <>
      <button 
        className="logout-button" 
        onClick={() => setShowConfirmation(true)}
      >
        Выйти
      </button>

      {showConfirmation && (
        <div className="confirmation-dialog">
          <div className="dialog-content">
            <p>Вы уверены, что хотите выйти?</p>
            <div className="dialog-buttons">
              <button 
                onClick={handleLogout}
                className="confirm-button"
              >
                Выйти
              </button>
              <button 
                onClick={() => setShowConfirmation(false)}
                className="cancel-button"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutButton;