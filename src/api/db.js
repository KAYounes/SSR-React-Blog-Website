import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const DATABASE_DIR = "content/";

export async function getBlog(blogSlug) {
    const listOfBlogs = getListOfBlogs();

    if (!listOfBlogs.includes(blogSlug)) return null;
    const fileName = blogSlug + ".mdx";
    const blog = await _getBlog(fileName);
    return [blog];
}

export async function getBlogs(sort) {
    console.log("GET BLOGS");
    const blogsInDB = await readDir(DATABASE_DIR);
    let blogs = [];

    for (let fileName of blogsInDB) {
        const blog = await _getBlog(fileName);
        blogs.push(blog);
    }

    if (sort === "asc" || sort === "desc") {
        blogs.sort(function (blogA, blogB) {
            const publishedDateA = new Date(blogA.metadata.published);
            const publishedDateB = new Date(blogB.metadata.published);
            if (publishedDateA > publishedDateB) {
                if (sort === "asc") return 1;
                if (sort === "desc") return -1;
            } else {
                if (sort === "asc") return -1;
                if (sort === "desc") return 1;
            }
        });
    }

    return blogs;
}

async function getListOfBlogs() {
    const filesInDatabase = await readDir(DATABASE_DIR);

    return filesInDatabase.map(function (fileName) {
        return fileName.slice(0, -4);
    });
}

async function _getBlog(fileName) {
    const rawContent = await getRawContent(fileName);
    const { content, data: metadata } = matter(rawContent);
    return { slug: fileName.slice(0, -4), content, metadata };
}

async function getRawContent(fileName) {
    const filePath = path.join(DATABASE_DIR, fileName);
    return await readFile(filePath);
}

async function readDir(dirPath) {
    const fullPath = path.join(process.cwd(), dirPath);
    return fs.readdir(fullPath);
}

async function readFile(filePath) {
    const fullPath = path.join(process.cwd(), filePath);
    return fs.readFile(fullPath, { encoding: "utf-8" });
}
