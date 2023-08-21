"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Blog = () => {
  const [categories, setCategories] = useState([]);
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios
      .get("https://basic-blog.teamrabbil.com/api/post-categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategories([]);
      });

    // Fetch blog items
    axios
      .get("https://basic-blog.teamrabbil.com/api/post-list/2")
      .then((response) => {
        setBlogItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog items:", error);
        setBlogItems([]);
      });
  }, []);

  return (
    <div className="container">
      <section className="categorieSection ">
        <h2 className="categoriesTitle">Categories</h2>
        <ul className="categoriesList">
          {categories.map((category) => (
            <li key={category.id} className="categoryItem">
              <Link href={`/single-blog`}>
                <p className="categoryLink">{category.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="blogsSection">
        <h2 className="blogTitle">Latest Blog Posts</h2>
        <div className="blogItems">
          {blogItems.map((item) => (
            <Link href={`/single-blog/${item.id}`} key={item.id}>
            <div key={item.id} className="blogItem">
              <h3 className="blogItemTitle">{item.title}</h3>
              <p className="blogItemDate">Created: {item.created_at}</p>
              <p className="blogItemDate">Updated: {item.updated_at}</p>
            </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;