import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/Container";
import clsx from "clsx";
import { getBlogs } from "@/api/db";
import BlogPreviewCard from "@/components/BlogPreviewCard";
import CardGrid from "@/components/CardGrid";
import ScrollDistanceProvider from "@/components/ScrollDistanceProvider";
// import javascript-modulo-operator

export default async function Home() {
    const blogs = await getBlogs("desc");

    const blogPreviewCardsDOM = blogs.map(function (blog, index) {
        return (
            <BlogPreviewCard
                blog={blog}
                key={blog.slug}
                active={index === 3}
            />
        );
    });

    return (
        <Container>
            <h1 className={clsx(styles.header)}>All Blogs</h1>
            <CardGrid
                columns={1}
                gap={3}>
                {blogPreviewCardsDOM}
            </CardGrid>
        </Container>
    );
}
