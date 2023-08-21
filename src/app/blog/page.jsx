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
      <section className="categoriesSection">
        <h2 className="categoriesTitle">Categories</h2>
        <ul className="categoriesList">
          {categories.map((category) => (
            <li key={category.id} className="categoryItem">
              <Link href={`/blog?category=${category.slug}`}>
                <Link className="categoryLink">{category.name}</Link>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="blogSection">
        <h2 className="blogTitle">Latest Blog Posts</h2>
        <div className="blogItems">
          {blogItems.map((item) => (
            <div key={item.id} className="blogItem">
              <h3 className="blogItemTitle">{item.title}</h3>
              <p className="blogItemDate">Created: {item.created_at}</p>
              <p className="blogItemDate">Updated: {item.updated_at}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;