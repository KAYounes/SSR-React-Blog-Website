import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

function Container({ className, tag: Tag = "div", children, ...otherProps }) {
    return (
        <Tag
            className={clsx(styles.container, className)}
            {...otherProps}>
            {children}
        </Tag>
    );
}

export default Container;
