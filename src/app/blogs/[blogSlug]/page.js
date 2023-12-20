"use client";
import React from "react";
// import { getBlog } from "@/api/db";
import Container from "@/components/Container";
// import { MDXRemote } from "next-mdx-remote";
// import BlogContent from "./BlogContent";
import { motion } from "framer-motion";

export default function Blog({ params }) {
    // const { blogSlug } = params;
    // const blog = await getBlog(blogSlug);
    // console.log(blog);
    // const MDXContent = await run(String(await compile(blog.content)));

    return (
        <Container>
            <motion.div
                layoutId={params.blogSlug}
                style={{ backgroundColor: "white" }}
                layout='true'>
                {/* <h1>Welcome to {blogSlug}</h1>
                <BlogContent content={blog.content} /> */}
                <motion.div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio libero
                    reprehenderit hic deserunt, commodi saepe quidem animi enim in laboriosam
                    asperiores inventore nemo id eum odit omnis dolores cumque. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorem, optio libero reprehenderit hic
                    deserunt, commodi saepe quidem animi enim in laboriosam asperiores inventore
                    nemo id eum odit omnis dolores cumque. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolorem, optio libero reprehenderit hic deserunt, commodi
                    saepe quidem animi enim in laboriosam asperiores inventore nemo id eum odit
                    omnis dolores cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, optio libero reprehenderit hic deserunt, commodi saepe quidem animi
                    enim in laboriosam asperiores inventore nemo id eum odit omnis dolores cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio libero
                    reprehenderit hic deserunt, commodi saepe quidem animi enim in laboriosam
                    asperiores inventore nemo id eum odit omnis dolores cumque. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorem, optio libero reprehenderit hic
                    deserunt, commodi saepe quidem animi enim in laboriosam asperiores inventore
                    nemo id eum odit omnis dolores cumque. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolorem, optio libero reprehenderit hic deserunt, commodi
                    saepe quidem animi enim in laboriosam asperiores inventore nemo id eum odit
                    omnis dolores cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, optio libero reprehenderit hic deserunt, commodi saepe quidem animi
                    enim in laboriosam asperiores inventore nemo id eum odit omnis dolores cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio libero
                    reprehenderit hic deserunt, commodi saepe quidem animi enim in laboriosam
                    asperiores inventore nemo id eum odit omnis dolores cumque. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorem, optio libero reprehenderit hic
                    deserunt, commodi saepe quidem animi enim in laboriosam asperiores inventore
                    nemo id eum odit omnis dolores cumque. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolorem, optio libero reprehenderit hic deserunt, commodi
                    saepe quidem animi enim in laboriosam asperiores inventore nemo id eum odit
                    omnis dolores cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, optio libero reprehenderit hic deserunt, commodi saepe quidem animi
                    enim in laboriosam asperiores inventore nemo id eum odit omnis dolores cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio libero
                    reprehenderit hic deserunt, commodi saepe quidem animi enim in laboriosam
                    asperiores inventore nemo id eum odit omnis dolores cumque. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorem, optio libero reprehenderit hic
                    deserunt, commodi saepe quidem animi enim in laboriosam asperiores inventore
                    nemo id eum odit omnis dolores cumque. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolorem, optio libero reprehenderit hic deserunt, commodi
                    saepe quidem animi enim in laboriosam asperiores inventore nemo id eum odit
                    omnis dolores cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, optio libero reprehenderit hic deserunt, commodi saepe quidem animi
                    enim in laboriosam asperiores inventore nemo id eum odit omnis dolores cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio libero
                    reprehenderit hic deserunt, commodi saepe quidem animi enim in laboriosam
                    asperiores inventore nemo id eum odit omnis dolores cumque. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolorem, optio libero reprehenderit hic
                    deserunt, commodi saepe quidem animi enim in laboriosam asperiores inventore
                    nemo id eum odit omnis dolores cumque. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Dolorem, optio libero reprehenderit hic deserunt, commodi
                    saepe quidem animi enim in laboriosam asperiores inventore nemo id eum odit
                    omnis dolores cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem, optio libero reprehenderit hic deserunt, commodi saepe quidem animi
                    enim in laboriosam asperiores inventore nemo id eum odit omnis dolores cumque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, optio libero
                    reprehenderit hic deserunt, commodi saepe quidem animi enim in laboriosam
                    asperiores inventore nemo id eum odit omnis dolores cumque.
                </motion.div>
            </motion.div>
        </Container>
    );
}
