import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { LayoutGroup } from "framer-motion";

function CardGrid({ auto, columns, gap, children }) {
    return (
        <div
            className={clsx(
                styles["card-grid"],
                styles[resolveColumns(columns)],
                styles[resolveGap(gap)],
            )}>
            {children}
        </div>
    );
}

function resolveColumns(columns) {
    return "card-grid__c" + columns;
}

function resolveGap(columns) {
    return "card-grid__g" + columns;
}

export default CardGrid;
