import React from "react";
import styles from "./styles.module.css";
import Container from "../Container";
import clsx from "clsx";

function BlockSeparator({ preset }) {
    const spacing = resolveSpacing(preset);

    return (
        <Container
            // className={clsx(styles.separator)}
            style={{
                padding: `${spacing} 0`,
                // backgroundColor: "red",
            }}
        />
    );
}
function resolveSpacing(preset) {
    if (typeof preset === "string") return `var(--${preset})`;
    if (typeof preset === "number") return `var(--s${preset})`;

    return 0;
}
export default BlockSeparator;
