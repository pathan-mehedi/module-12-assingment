"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

const Home = () => {
    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                "use server";
                const response = await axios.get(
                    'https://basic-blog.teamrabbil.com/api/post-list/2'
                );
                setBlogItems(response.data);
                console.log('API Response:', response.data);
            } catch (error) {
                console.error('Error fetching blog items:', error);
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
                        <button className='featuredButton animatedButton'>
                            Explore
                        </button>
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
                                <h3 className='blogItemTitle'>{item.name}</h3>
                                <p className='blogItemDate'>
                                    Created: {item.created_at}
                                </p>
                                <p className='blogItemDate'>
                                    Updated: {item.updated_at}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='anotherSection'>
                    <div className='anotherContent'>
                        <h2 className='anotherTitle'>Stay Informed</h2>
                        <p className='anotherText'>
                            Sign up for our newsletter to receive the latest
                            updates and blog posts directly in your inbox.
                        </p>
                        <form className='newsletterForm'>
                            <input
                                type='email'
                                placeholder='Your Email'
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