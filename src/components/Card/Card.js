import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

function Card({ children, elevation }) {
    return <div className={clsx(styles.card, styles[elevation])}>{children}</div>;
}

function resolveElevation(elevation) {
    return "elevation__".replace("elevation__", elevation);
}

export default Card;
