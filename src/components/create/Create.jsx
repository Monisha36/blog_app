  import React, { useState } from "react";
  import "./create.css";
  import { IoIosAddCircleOutline } from "react-icons/io";

  export const Create = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cover, setCover] = useState("");

    const handleCreatePost = (e) => {
      e.preventDefault();
      
      const newPost = {
        id: Date.now(),
        title,
        desc,
        cover: cover || "default-image-url", 
        date: new Date().toLocaleDateString(),
      };

      const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
      localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));

      setTitle("");
      setDesc("");
      setCover("");
    };

    return (
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
          <img src={cover || "https://via.placeholder.com/300x200?text=Upload+Image"} alt='Preview' className='image-preview' />
          </div>
          <form onSubmit={handleCreatePost}>
            <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' onChange={(e) => setCover(URL.createObjectURL(e.target.files[0]))} />
            </div>
            <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea cols='30' rows='10' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
            <button type='submit' className='button'>Create Post</button>
          </form>
        </div>
      </section>
    );
  };
