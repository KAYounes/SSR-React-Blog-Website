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
            <h1 className={clsx(styles.header)}>All Blogs</h1>
            <CardGrid
                columns={1}
                gap={3}>
                {blogPreviewCardsDOM}
            </CardGrid>
        </Container>
    );
}
