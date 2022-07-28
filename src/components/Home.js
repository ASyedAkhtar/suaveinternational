import React, { useEffect, useState } from 'react';

import postList from '../api/post/home/list.js';

import Post from './Post.js';

const Home = () => {

const [posts, setPosts] = useState([]);

useEffect(() => {
  getPosts();
}, []);

const getPosts = async () => {
  const response = await postList.get('');
  const data = await response.data;
  setPosts(data);
}

  return(
    <div>
      {posts.reverse().map((post) => {
        return(
          <Post key={post._id} post={post} />
        );
      })}
    </div>
  );
}

export default Home;
