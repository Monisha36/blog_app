import React, { useState, useEffect } from "react";
import "./details.css";
import "../../components/header/header.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import { blog as defaultBlogData } from "../../assets/data/data";

export const DetailsPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cover, setCover] = useState("");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || defaultBlogData;
    const foundPost = storedPosts.find((item) => item.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
      setTitle(foundPost.title);
      setDesc(foundPost.desc);
      setCover(foundPost.cover);
    }
  }, [id]);

  const handleDelete = () => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = storedPosts.filter((item) => item.id !== parseInt(id));
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/");
  };

  const handleEdit = () => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = storedPosts.map((item) =>
      item.id === parseInt(id) ? { ...item, title, desc, cover } : item
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPost({ ...post, title, desc, cover });
    setIsEditing(false); 
  };

  return (
    <>
      {post ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={cover || post.cover} alt={title || post.title} />
            </div>
            <div className="right">
              <div className="buttons">
                <button className="button" onClick={() => setIsEditing(!isEditing)}>
                  <BsPencilSquare />
                </button>
                <button className="button" onClick={handleDelete}>
                  <AiOutlineDelete />
                </button>
              </div>

              {isEditing ? (
                <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Description"
                  ></textarea>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setCover(URL.createObjectURL(e.target.files[0]))}
                  />
                  <button type="submit" className="button">Save Changes</button>
                </form>
              ) : (
                <>
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                  <p>Author: {post.author || "Unknown"}</p>
                  <div className="additionalContent">
                    <p>
                      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born..."
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ) : (
        <p>Post not found</p>
      )}
    </>
  );
};
