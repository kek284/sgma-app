// src/components/UserPosts.jsx
import React from 'react';
import Post from './Post';  // Допустим, у нас уже есть компонент для отдельного поста

const UserPosts = ({ posts }) => {
  return (
    <div className="user-posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default UserPosts;
