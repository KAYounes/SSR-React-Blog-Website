import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/Container";
import clsx from "clsx";
import { getBlogs } from "@/api/db";
import BlogPreviewCard from "@/components/BlogPreviewCard";
import CardGrid from "@/components/CardGrid";
// import javascript-modulo-operator

export default async function Home() {
    const blogs = await getBlogs("desc");

    const blogPreviewCardsDOM = blogs.map(function (blog) {
        return (
            <BlogPreviewCard
                blog={blog}
                key={blog.slug}
            />
        );
    });

    return (
        <Container>
            <h1 className={clsx(styles.page__header)}>All Blogs</h1>
            <CardGrid
                columns={1}
                gap={3}>
                {blogPreviewCardsDOM}
            </CardGrid>
            {/* {(await blogs).map(function (blog) {
                return (
                    <div key={blog.slug}>
                        <div>{blog.slug}</div>
                        <div>{blog.content}</div>
                        {Object.keys(blog.metadata).map(function (key) {
                            return (
                                <div key={key}>
                                    <div>
                                        <span>{key}: </span>
                                        <span>{blog.metadata[key]}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })} */}
        </Container>
    );
}
