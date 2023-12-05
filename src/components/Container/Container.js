import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

function Container({ className, tag, children, ...otherProps }) {
    let Root = "div";
    if (tag) Root = tag;

    return (
        <Root
            className={clsx(styles.container, className)}
            {...otherProps}>
            {children}
        </Root>
    );
}

export default Container;
