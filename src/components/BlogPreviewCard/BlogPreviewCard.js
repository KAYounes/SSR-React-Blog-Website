import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Card from "../Card";
import { format, formatDistanceToNow, parse } from "date-fns";
import { enUS } from "date-fns/locale";
import { ArrowRight } from "react-feather";

function BlogPreviewCard({ blog }) {
    const { slug, content, metadata } = blog;
    const { title, abstract, published } = metadata;

    console.log(published);
    const publishedDate = new Date(published);
    // console.log("a: ", publishedDate);
    // console.log("b: ", parse("6/12/2023", "d/M/yyyy", new Date(), { locale: enUS }));

    return (
        <Card elevation={"elevation__medium"}>
            <h6>{title}</h6>
            <div className={clsx(styles["blog__abstract"])}>{abstract}</div>
            <div className={clsx(styles["blog-card--footer"])}>
                <kbd>
                    Continue Reading <ArrowRight />
                </kbd>
                <div className={clsx("text-muted", styles["blog__publishedDate"])}>
                    {format(publishedDate, "iii, MMM do yyyy")} (
                    {formatDistanceToNow(publishedDate)} ago)
                </div>
            </div>
        </Card>
    );
}

export default BlogPreviewCard;
