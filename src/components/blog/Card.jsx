import React, { useState, useEffect } from "react";
import "./blog.css";
import { blog as defaultBlogData } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    setBlogData(storedPosts ? storedPosts : defaultBlogData);
  }, []);

  return (
    <section className="blog">
      <div className="container grid3">
        {blogData.map((item) => (
          <div className="box boxItems" key={item.id}>
            <div className="img">
              <img src={item.cover} alt={item.title} />
            </div>
            <div className="details">
              <div className="tag">
                <AiOutlineTags className="icon" />
                <a href="/">#{item.category}</a>
              </div>
              <Link to={`/details/${item.id}`} className="link">
                <h3>{item.title}</h3>
              </Link>
              <p>{item.desc.slice(0, 180)}...</p>
              <div className="date">
                <AiOutlineClockCircle className="icon" /> <label>{item.date}</label>
                <AiOutlineComment className="icon" /> <label>27</label>
                <AiOutlineShareAlt className="icon" /> <label>SHARE</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
