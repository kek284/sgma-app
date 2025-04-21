// src/components/PostList.jsx
import React from 'react';
import Post from './Post'; // Убедись, что путь правильный, например './Post'

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return <p>Постов пока нет</p>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} /> // Рендерим каждый пост
      ))}
    </div>
  );
};

export default PostList;
