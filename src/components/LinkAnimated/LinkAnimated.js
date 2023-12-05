"use client";
import React, { Children } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { space_mono } from "@/app/fonts";

const variants = {
    //   tap: { opacity: 1, x: "75%", y: "-95%" },
    //   hover: { opacity: 1, x: "65%", y: "-85%",  }, //filter: 'saturate(100) hue-rotate(74deg) brightness(1.2)'
    //   init: { opacity: 1, x: "30%", y: "-50%", rotate: "45deg", filter: 'unset'  },
};

const variantsArrowHead = {
    hover: { fill: "#FF0080" },
    init: { fill: "black" },
};

const variantsArrowTail = {
    hover: { stroke: "#FF0080" },
    init: { stroke: "black" },
};

function LinkAnimated({ children }) {
    const MotionLink = motion(Link);
    return (
        <MotionLink
            href={"/"}
            whileTap='tap'
            whileHover='hover'
            initial='init'
            className={clsx(styles.link)}>
            <span
                className={clsx(styles.link__text)}
                // animate="init"
            >
                {children}
            </span>
            <span className={clsx(styles.link__after)}>
                <motion.svg
                    variants={variants}
                    className={styles.arrow}
                    xmlns='http://www.w3.org/2000/svg'
                    // width='4'
                    // height='7'
                    viewBox='0 0 4 7'
                    fill='none'>
                    <motion.path
                        variants={{
                            hover: { transform: "translateY(-4px)", opacity: 1 },
                            init: { transform: "translateY(0px)", opacity: 0 },
                        }}
                        className={styles.arrowTail}
                        d='M1.5 2.78091L2.5 2.78091L2.5 6.28091C2.5 6.55705 2.27614 6.78091 2 6.78091C1.72386 6.78091 1.5 6.55705 1.5 6.28091L1.5 2.78091Z'
                    />
                    <motion.path
                        variants={{
                            hover: { transform: "translateY(-3px)" },
                            init: { transform: "translateY(0px)" },
                        }}
                        transition={{
                            type: "spring",
                            damping: 15,
                        }}
                        className={styles.arrowHead}
                        d='M3.51716 2.78091H0.482841C0.30466 2.78091 0.215427 2.56548 0.34142 2.43949L1.85858 0.922333C1.93668 0.844228 2.06332 0.844228 2.14142 0.922333L3.65858 2.43949C3.78457 2.56548 3.69534 2.78091 3.51716 2.78091Z'
                        // fill='black'
                    />
                </motion.svg>
            </span>
        </MotionLink>
    );
}

export default LinkAnimated;
