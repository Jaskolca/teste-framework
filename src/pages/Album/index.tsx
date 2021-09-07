import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import api from "../../services/api";

import "./styles.css";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";

interface IAlbumParams {
  albumId: string;
  userId: string;
}

interface IUser {
  id: number;
  name: string;
}

interface IAlbum {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Album: React.FC = () => {
  const { albumId, userId } = useParams<IAlbumParams>();
  const [album, setAlbum] = useState<IAlbum[]>([]);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [hasMore, setHasMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [nextPage, setNextPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState<IAlbum>({} as IAlbum);

  const fetchImages = useCallback(
    (_page = 1) => {
      api
        .get<IAlbum[]>("photos", {
          params: {
            albumId,
            _limit: 10,
            _page,
          },
        })
        .then(({ data }) => {
          if (data.length) {
            setAlbum((photos) => [...photos, ...data]);
          } else {
            setHasMore(false);
          }
        });
    },
    [albumId]
  );

  const showPhoto = (image: IAlbum) => {
    setShowModal(true);
    setSelectedPhoto(image);
  };

  const renderContent = () => (
    <div id="modalContent">
      <img src={selectedPhoto.url} alt={selectedPhoto.title} />
      <p>{selectedPhoto.title}</p>
      <input type="button" onClick={() => setShowModal(false)} value="X" />
    </div>
  );

  useEffect(() => {
    if (userId) {
      api.get<IUser>(`users/${userId}`).then(({ data }) => setUser(data));
    }
  });

  useEffect(() => {
    fetchImages(nextPage);
  }, [fetchImages, nextPage]);

  return (
    <div id="container">
      <Header title="Album" />
      <div id="content">
        {!!userId && <UserCard {...user} isPage />}
        <section className="pageContent">
          <InfiniteScroll
            className="pageContent"
            dataLength={album.length}
            next={() => setNextPage((page) => page + 1)}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            {album.map((photo) => (
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                key={photo.id}
                onClick={() => showPhoto(photo)}
                className="photo"
              />
            ))}
          </InfiniteScroll>
        </section>
      </div>
      {showModal && <div id="modal">{renderContent()}</div>}
    </div>
  );
};

export default Album;
