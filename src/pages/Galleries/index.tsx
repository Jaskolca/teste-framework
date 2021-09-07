import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";
import api from "../../services/api";

import Gallery from "../../components/Gallery";

interface IGalleryParams {
  userId: string;
}

interface IUser {
  id: number;
  name: string;
}

interface IGallery {
  userId: number;
  id: number;
  title: string;
}

const Galleries: React.FC = () => {
  const { userId } = useParams<IGalleryParams>();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [galleries, setGalleries] = useState<IGallery[]>([]);

  useEffect(() => {
    if (userId) {
      api.get<IUser>(`users/${userId}`).then(({ data }) => setUser(data));
    }
  });

  useEffect(() => {
    api
      .get<IGallery[]>("albums", {
        params: {
          userId,
        },
      })
      .then(({ data }) => setGalleries(data));
  }, [userId]);

  return (
    <div id="container">
      <Header title="Gallery" />
      <div id="content">
        {!!userId && <UserCard {...user} isPage />}
        <section className="pageContent">
          {galleries.map((gallery) => (
            <Gallery {...gallery} {...{ userId }} key={gallery.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Galleries;
