'use client'
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion"
import { space_mono } from "$/fonts/fonts";

const variants = {
  tap: { opacity: 1, x: "75%", y: "-95%" },
  // hover: { opacity: 0.85, x: "65%", y: "-85%" },
  // init: { opacity: 0, x: "30%", y: "-50%", rotate: "45deg",  },
}

const variantsArrowHead = {
  hover: { fill: '#FF0080' },
  init: { fill: 'black' },
}

const variantsArrowTail = {
  hover: { stroke: '#FF0080' },
  init: { stroke: 'black' },
}

function LinkAnimated() {

    return (
        <Link
            href={"/"}
            className={clsx(styles.link, space_mono.className)}>
            <motion.span
            whileTap="tap"
            whileHover="hover"
            initial="init"
            style={{backgroundColor: 'var(--c-red)'}}
            // animate="init"
            >
            Go TO SITE
            <motion.svg
                className={styles.arrow}
                xmlns='http://www.w3.org/2000/svg'
                variants={variants}
                viewBox='0 0 10 15'
                fill='none'
                >
                <motion.path
                    d='M5 13L5 7'
                    strokeWidth='2'
                    strokeLinecap='round'
                    className={styles.arrowTail}
                    // animate={{pathLength: 1}}
                    variants={{
                      hover: { pathLength: 1},
                      init: { pathLength: 0},
                    }}
                />
                <motion.path
                    d='M4.58397 1.62404C4.78189 1.32717 5.21811 1.32717 5.41602 1.62404L8.48177 6.22265C8.70329 6.55493 8.46509 7 8.06574 7H5H1.93426C1.53491 7 1.29672 6.55493 1.51823 6.22265L4.58397 1.62404Z'
                    className={styles.arrowHead}
                    variants={{
                      hover: {y: 0},
                      init: {y: '7px'},
                    }}
                />
            </motion.svg>
            </motion.span>

        </Link>
    );
}
/*
<svg
    xmlns='http://www.w3.org/2000/svg'
    width='10'
    height='15'
    viewBox='0 0 10 15'
    fill='none'>
    <path
        d='M5 13L5 7'
        stroke='black'
        stroke-width='2'
        stroke-linecap='round'
    />
    <path
        d='M4.58397 1.62404C4.78189 1.32717 5.21811 1.32717 5.41602 1.62404L8.48177 6.22265C8.70329 6.55493 8.46509 7 8.06574 7H5H1.93426C1.53491 7 1.29672 6.55493 1.51823 6.22265L4.58397 1.62404Z'
        fill='black'
    />
</svg>;
*/
export default LinkAnimated;
