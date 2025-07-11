// Card.jsx
import React, { useState } from "react";
import "../App.css";

const Card = ({
  category,
  title,
  attachments,
  comments,
  avatars,
  categoryColor,
  image,
  onMenuClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-header">
        <span className={`category-tag ${categoryColor}`}>{category}</span>
        {isHovered && (
          <button className="menu-dots" onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        {image && (
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
        )}

        <div className="card-footer">
          <div className="card-stats">
            <div className="stat">
              <svg
                className="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M21.44 11.05L12 2 2.56 11.05A1 1 0 0 0 2 12v10a1 1 0 0 0 1 1h6v-9h6v9h6a1 1 0 0 0 1-1V12a1 1 0 0 0-.56-.95z" />
              </svg>
              <span>{attachments}</span>
            </div>
            <div className="stat">
              <svg
                className="stat-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>{comments}</span>
            </div>
          </div>

          <div className="avatars">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`User ${index + 1}`}
                className="avatar"
                style={{
                  zIndex: avatars.length - index,
                  marginLeft: index > 0 ? "-8px" : "0",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
