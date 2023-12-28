import React from "react";
import { getBlog } from "@/api/db";
import { isNull } from "@/utils/validators";
import { notFound, useRouter } from "next/navigation";

export default async function Blog({ params }) {
    const { blogSlug } = params;
    console.log("\n\n\n");
    console.log(blogSlug);
    const blog = await getBlog(blogSlug);

    if (isNull(blog)) {
        notFound();
    }

    return <h1>Blog</h1>;
}
