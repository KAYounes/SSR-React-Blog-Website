"use client";
import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";

function Card({ children, elevation, ...other }) {
    return (
        <motion.div
            className={clsx(styles.card, styles[elevation])}
            {...other}>
            <motion.div
                initial={false}
                layout={"position"}
                animate={{ opacity: 1 }}
                style={{ opacity: 0 }}>
                {children}
            </motion.div>
        </motion.div>
    );
}

function resolveElevation(elevation) {
    return "elevation__".replace("elevation__", elevation);
}

export default Card;
