"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const SingleBlog = () => {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                ("use server");
                const response = await axios.get(
                    "https://basic-blog.teamrabbil.com/api/post-list/2"
                );
                setBlogItems(response.data);
                console.log("API Response:", response.data);
            } catch (error) {
                console.error("Error fetching blog items:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            <section className='blogSection'>
                <h2 className='blogTitle'>Featured Blog Items</h2>
                <div className='blogItems'>
                    {blogItems.map((item) => (
                        <div key={item.id} className='blogItem'>
                            <a href={`/single-blog/${item.id}`}>
                                
                                <p className='blogItemTitle'>{item.title}</p>
                                <p className='blogItemDate'>
                                    Created: {item.created_at}
                                </p>
                                <p className='blogItemDate'>
                                    Updated: {item.updated_at}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SingleBlog;
