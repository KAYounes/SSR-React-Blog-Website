import React from "react";
import styles from "./styles.module.css";

import Link from "next/link";

import { LOGO } from "@/utils/constants";
import clsx from "clsx";
import { space_mono } from "$/fonts/fonts";

function Logo() {
  return <Link href='/' className={clsx(styles.logo)}>{LOGO}</Link>;
}

export default Logo;
