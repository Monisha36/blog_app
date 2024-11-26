import React, { useState, useEffect } from "react";
import "../../pages/home/Home";
import { blog as defaultBlogData } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    setBlogData(storedPosts ? storedPosts : defaultBlogData);
  }, []);

  return (
    <section className="blog">
      <div className="container">
        {blogData.map((item) => (
          <div className="box" key={item.id}>
            <div className="img">
              <img src={item.cover} alt={item.title} />
            </div>
            <div className="details">
              <div className="tag">
                <Link to={`/details/${item.id}`}>#{item.category}</Link>
              </div>
              <Link to={`/details/${item.id}`}>
                <h3>{item.title}</h3>
              </Link>
              <p>{item.desc.slice(0, 180)}...</p>
              <div className="date">
                <AiOutlineClockCircle className="icon" /> <label>{item.date}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
