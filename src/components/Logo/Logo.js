"use client";
import React from "react";
import styles from "./styles.module.css";

import Link from "next/link";

import { LOGO } from "@/utils/constants";
import clsx from "clsx";
import { space_mono } from "@/app/fonts";
import ScrollDistanceProvider, { ScrollDistanceContext } from "../ScrollDistanceProvider";

function Logo({ preserverScroll }) {
    React.useEffect(function () {
        setScroll();
    }, []);
    const { restoreScroll, setScroll } = React.useContext(ScrollDistanceContext);
    return (
        <Link
            href='/'
            className={clsx(styles.logo)}
            onClick={function () {
                restoreScroll();
            }}>
            <h4>{LOGO}</h4>
        </Link>
    );
}

export default Logo;
