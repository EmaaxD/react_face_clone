import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';

import { db } from '../firebase';
import { Post } from './Post';

export const Posts = ({ posts }) => {

  const [realtimePost, loading, error] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  );

  console.log('loading', loading);
  console.log('error', error);

  return (
    <div>
      {
        realtimePost ? 
          realtimePost?.docs.map(post => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              timestamp={post.data().timestamp}
              image={post.data().picProfile}
              postImage={post.data().postImage}
            />
          ))
        : (
          posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.picProfile}
              postImage={post.postImage}
            />
          ))
        )
      }
    </div>
  )
}
