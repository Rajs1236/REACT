import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full min-h-screen py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-100">
          Explore All Posts
        </h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.$id} className="w-full sm:w-1/2 lg:w-1/4 p-2">
                <PostCard {...post} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No posts available.</p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
