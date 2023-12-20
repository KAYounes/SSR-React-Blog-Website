"use client";
import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Card from "../Card";
import { format, formatDistanceToNow, formatDistance, parse } from "date-fns";
import { ArrowRight } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";

function BlogPreviewCard({ blog }) {
    const { slug, content, metadata } = blog;
    const { title, abstract, published } = metadata;

    console.log(published);
    const publishedDate = new Date(published);
    // console.log("a: ", publishedDate);
    // console.log("b: ", parse("6/12/2023", "d/M/yyyy", new Date(), { locale: enUS }));

    return (
        <Card elevation={"elevation__medium"}>
            <motion.div
                layoutId={slug}
                layout='true'>
                <motion.div layout='position'>
                    <h6>{title}</h6>
                    <div className={clsx(styles["blog__abstract"])}>{abstract}</div>
                    <div className={clsx(styles["blog-card--footer"])}>
                        <Link href={`./blogs/${slug}`}>
                            <kbd>
                                Continue Reading <ArrowRight style={{ marginLeft: "1ch" }} />
                            </kbd>
                        </Link>
                        <div className={clsx("text-muted", styles["blog__publishedDate"])}>
                            {format(publishedDate, "iii, MMM do yyyy")} (
                            {formatDistance(publishedDate, new Date().setHours(0, 0, 0, 0))} ago)
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Card>
    );
}

export default BlogPreviewCard;
