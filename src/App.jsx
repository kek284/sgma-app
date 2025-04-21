// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import FeedPage from './pages/FeedPage'; 
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Другие маршруты */}
      </Routes>
    </>
  );
}

export default App;
