import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

function Separator({ tag: Tag = "div", children, value, preset, orientation }) {
    if (orientation) orientation = resolveOrientation(orientation);
    const spacing = resolveSpacing(preset, value);
    const padding = { horizontal: `0 ${spacing}`, vertical: `${spacing} 0` };

    return (
        <Tag
            className={clsx(styles.separator, styles[orientation])}
            style={{
                padding: padding[orientation],
                backgroundColor: "red",
            }}></Tag>
    );
}

function resolveOrientation(orientation) {
    if (typeof orientation !== "string") return "vertical";
    if ("horizontal".includes(orientation.toLowerCase())) return "horizontal";
    return "vertical";
}

function resolveSpacing(preset, value) {
    if (typeof value === "string" || typeof value === "number") return value;
    if (typeof preset === "string") return `var(--${preset})`;
    if (typeof preset === "number") return `var(--s${preset})`;
}

export default Separator;
