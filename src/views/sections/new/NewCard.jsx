import React from "react";

const NewCard = ({ data }) => {
  const { imageUrl, published, category, title, author } = data;

  return (
    <article className="news-card">
      <div className="image-container">
        <img src={imageUrl} alt={title} className="news-image"/>
        <div className="bookmark-icon">
          <img
            src="./icons/Bookmark.svg"
            alt="Bookmark"
            className="bookmark-icon-image"
          />
        </div>
      </div>
      <div className="details">
        <div className="meta">
          <span className="category">{category}</span>
          <time className="date">{published}</time>
        </div>
        <h5 className="title">{title}</h5>
        <hr className="separator" />
        <div className="author">
          <img
            src={author.profileImageUrl}
            alt={author.firstName + " " + author.lastName}
          />
          <span>
            {author.firstName + " " + author.lastName}
          </span>
        </div>
      </div>
    </article>
  );
};

export default NewCard;
