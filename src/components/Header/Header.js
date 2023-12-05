import React from "react";
import Logo from "../Logo";
import Container from "../Container";
import clsx from "clsx";
import styles from "./styles.module.css";
import BleedContainer from "../BleedContainer";

function Header({}) {
    return (
        <Container
            className={clsx(styles.header)}
            tag={"header"}>
            <Logo />
        </Container>
    );
}

export default Header;
