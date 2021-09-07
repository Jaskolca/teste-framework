import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import Post from "../../components/Post";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";

interface IPostParams {
  userId: string;
}

interface IUser {
  id: number;
  name: string;
}

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const { userId } = useParams<IPostParams>();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    if (userId) {
      api.get<IUser>(`users/${userId}`).then(({ data }) => setUser(data));
    }
  });

  useEffect(() => {
    api
      .get<IPost[]>("posts", {
        params: {
          userId,
        },
      })
      .then(({ data }) => setPosts(data));
  }, [userId]);

  return (
    <div id="container">
      <Header title="Posts" />
      <div id="content">
        {!!userId && <UserCard {...user} isPage />}
        <section className="pageContent">
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Posts;
