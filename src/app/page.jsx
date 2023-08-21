"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Home = () => {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                ("use server");
                const response = await axios.get(
                    "https://basic-blog.teamrabbil.com/api/post-categories"
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
            <main>
                <section className='featuredSection'>
                    <div className='featuredContent'>
                        <h1 className='featuredTitle'>Welcome to our Blog</h1>
                        <p className='featuredText'>
                            Explore our latest blog posts and stay updated with
                            the latest trends.
                        </p>
                        <a
                            href='/blog'
                            className='featuredButton animatedButton'>
                            Explore Now
                        </a>
                    </div>
                    <div className='featuredImage'>
                        <Image
                            src='/features.png'
                            alt='Featured Image'
                            className='image'
                            width={250}
                            height={100}
                        />
                    </div>
                </section>
                <section className='blogSection'>
                    <h2 className='blogTitle'>Featured Blog Items</h2>
                    <div className='blogItems'>
                        {blogItems.map((item) => (
                            <div key={item.id} className='blogItem'>
                                <Link href='/single-blog'>
                                    <h3 className='blogItemTitle'>
                                        {item.name}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='newsLetterSection'>
                    <div className='newsLetterContent'>
                        <h2 className='newsLetterTitle'>Stay Informed</h2>
                        <p className='newsLetterText'>
                            Sign up for our newsletter to receive the latest
                            updates and blog posts directly in your inbox.
                        </p>
                        <form className='newsletterForm'>
                            <input
                                type='email'
                                placeholder='Subscribe for newsletter'
                                className='inputField'
                            />
                            <button className='subscribeButton animatedButton'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
