import React, { useEffect } from 'react';
import './../styles/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-item">Profile</div>
      <div className="sidebar-item">Settings</div>
      <div className="sidebar-item close" onClick={onClose}>Close</div>
    </div>
  );
};

export default Sidebar;
