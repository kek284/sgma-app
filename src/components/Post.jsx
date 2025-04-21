// src/components/Post.jsx
import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2> {/* Заголовок поста */}
      <p>{post.body}</p> {/* Тело поста */}
      {post.image && <img src={post.image} alt="Post" />} {/* Изображение, если есть */}
      <p>{new Date(post.timestamp).toLocaleString()}</p> {/* Время публикации */}
    </div>
  );
};

export default Post;
