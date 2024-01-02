"use client";
import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Card from "../Card";
import { format, formatDistanceToNow, parse } from "date-fns";
import { enUS } from "date-fns/locale";
import { ArrowRight } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";

function BlogPreviewCard({ blog, active }) {
    const { slug, content, metadata } = blog;
    const { title, abstract, published } = metadata;
    const publishedDate = new Date(published);

    const MotionCard = motion(Card);

    return (
        <MotionCard
            layoutScroll
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            elevation={"elevation__medium"}
            animate={{
                top: active ? 0 : "unset",
            }}>
            <h6>
                {title} | ({active ? "- a" : "- x"})
            </h6>
            <div className={clsx(styles["blog__abstract"])}>{abstract}</div>
            <div className={clsx(styles["blog-card--footer"])}>
                <Link href={`./blogs/${slug}`}>
                    <kbd>
                        Continue Reading <ArrowRight />
                    </kbd>
                </Link>
                <div className={clsx("text-muted", styles["blog__publishedDate"])}>
                    {format(publishedDate, "iii, MMM do yyyy")} (
                    {formatDistanceToNow(publishedDate)} ago)
                </div>
            </div>
        </MotionCard>
    );
}

export default BlogPreviewCard;
