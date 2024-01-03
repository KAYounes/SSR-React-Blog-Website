"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";

export default function BlogContent({ children, slug, title }) {
    const cardAnimation = {
        start: { height: 300 },
        end: {
            height: "unset",
            transition: {
                // type: 'tween',
                ease: [0.44, -0.4, 0.43, 1.42],
                // duration: 2,
                // repeat: 1,
                // repeatType: 'reverse',
                // when: 'beforeChildren',
                // delayChildren: 1,
            },
        },
    };

    const childrenAnimation = {
        start: { height: 0 },
        end: {
            height: "unset",
        },
    };

    return (
        <Card
            layout
            layoutId={slug}
            key={slug}
            style={{ overflow: "hidden", transformOrigin: "50% 0" }}
            transition={{ type: "spring", stiffness: 200, damping: 20, mass: 1.3 }}>
            <motion.div
                layout={"position"}
                style={{ opacity: 0 }}
                // transition={{ duration: 5 }}
                animate={{ opacity: 1 }}>
                <h1>{title}</h1>
                {children}
            </motion.div>
        </Card>
    );
}
