import React from "react";
import styles from "./styles.module.css";

import Link from "next/link";

import { LOGO } from "@/utils/constants";
import clsx from "clsx";
import { space_mono } from "@/app/fonts";

function Logo() {
    return (
        <Link
            href='/'
            className={clsx(styles.logo)}>
            <h4>{LOGO}</h4>
        </Link>
    );
}

export default Logo;
