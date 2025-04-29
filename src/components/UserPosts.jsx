// UserPosts.jsx
import React from 'react';
import PostList from './PostList';

const UserPosts = ({ userId, posts }) => {
  const userPosts = posts.filter(post => post.authorId === userId);

  return (
    <div className="user-posts">
      <h1>User's Posts</h1>
      <PostList posts={userPosts} />
    </div>
  );
};

export default UserPosts;
