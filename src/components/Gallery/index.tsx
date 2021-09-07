import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import GalleryBanner from "../../assets/gallery.png";

interface IGallery {
  id: number;
  title: string;
  userId?: string;
}

const Gallery: React.FC<IGallery> = ({ title, id, userId }) => {
  return (
    <div className="galleryItem">
      <img src={GalleryBanner} alt={title} />
      <Link to={userId ? `/user/${userId}/album/${id}` : `/album/${id}`}>
        {title}
      </Link>
    </div>
  );
};

export default Gallery;
