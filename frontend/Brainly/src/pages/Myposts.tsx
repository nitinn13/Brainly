import React, { useState, useEffect } from 'react';

interface Post {
  _id: string;
  title: string;
  description: string;
  votes: number;
  Link?: string;
  status: string;
  createdAt: string;
}

const Myposts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function getMyPosts() {
    try {
      const storedUser = localStorage.getItem('user');
      const token = storedUser ? JSON.parse(storedUser).token : null;

      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await fetch("http://localhost:3000/user/mycontents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      setPosts(data.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMyPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Posts</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">You have not created any posts yet.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
              {post.Link && (
                <a
                  href={post.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block mt-2"
                >
                  Visit Link
                </a>
              )}
              <p className="text-sm text-gray-500 mt-1">Votes: {post.votes}</p>
              <p className="text-sm text-gray-400">Status: {post.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Myposts;
