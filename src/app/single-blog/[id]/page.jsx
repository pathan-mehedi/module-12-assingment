"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const SingleBlog = () => {
    const pathname = usePathname();

    const [blogItem, setBlogItem] = useState({ postDetails: {} });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://basic-blog.teamrabbil.com/api/post-details/53"
                );
                setBlogItem(response.data);
                console.log("API Response:", response.data);
            } catch (error) {
                console.error("Error fetching blog item:", error);
            }
        };

        fetchData();
    }, []);

    const { title, created_at, updated_at, content, img } =
        blogItem.postDetails;

    return (
        <div className='container'>
            <section className='blogSection'>
                <h2 className='blogTitle'>Featured Blog Item</h2>
                <div className='blogItem'>
                    <Link href='/single-blog'>Go Back</Link>
                    {title && <p className='blogItemTitle'>{title}</p>}
                    {created_at && (
                        <p className='blogItemDate'>Created: {created_at}</p>
                    )}
                    {updated_at && (
                        <p className='blogItemDate'>Updated: {updated_at}</p>
                    )}
                    {img && (
                        <div className='blogItemImage'>
                            <Image
                                src={img}
                                alt='Blog Image'
                                width={500}
                                height={300}
                            />
                        </div>
                    )}
                    {content && <p className='blogItemContent'>{content}</p>}
                </div>
            </section>
        </div>
    );
};

export default SingleBlog;
