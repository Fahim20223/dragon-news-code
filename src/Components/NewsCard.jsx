import React, { useState } from "react";
import {
  FaEye,
  FaStar,
  FaArrowRight,
  FaArrowUp,
  FaBookmark,
  FaShareAlt,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  const { title, rating, total_view, author, thumbnail_url, details } = news;

  // Format date as YYYY-MM-DD
  const formattedDate = new Date(author?.published_date)
    .toISOString()
    .split("T")[0];

  return (
    <div className="card bg-base-100  shadow-md hover:shadow-lg transition duration-300 rounded-xl overflow-hidden">
      {/* Header: Author + Bookmark + Share */}
      <div className="flex items-center justify-between px-4 pt-4 bg-base-200 p-3">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Bookmark & Share */}
        <div className="flex gap-3 text-gray-500">
          <button
            title="Bookmark"
            className="hover:text-primary transition-colors"
          >
            <FaBookmark />
          </button>
          <button
            title="Share"
            className="hover:text-primary transition-colors"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>

      <div>
        <h2 className="card-title text-base font-bold text-gray-800 leading-tight p-2">
          {title}
        </h2>
        {/* Thumbnail */}
        <figure className="px-4 pt-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-xl w-full h-52 object-cover"
          />
        </figure>
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Description with toggle */}
        <p className="text-sm text-gray-600 mt-1">
          {expanded ? details : details.slice(0, 150) + "..."}
        </p>
        <button className="cursor-pointer hover:underline font-medium flex items-center gap-1 mt-1 text-secondary">
          See More <FaArrowRight className="inline text-xs" />
        </button>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-200">
          {/* Rating */}
          <div className="flex items-center gap-1 text-warning">
            {[...Array(rating?.number || 0)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-1 text-sm text-gray-700 font-medium">
              {rating?.number.toFixed(1)}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span className="text-sm font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
