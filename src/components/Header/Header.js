import React from "react";
import Logo from "../Logo";
import Container from "../Container";
import clsx from "clsx";
import styles from "./styles.module.css";
import BleedContainer from "../BleedContainer";

function Header({}) {
    return (
        <header
            className={clsx(styles.header)}
            tag={"header"}>
            <Container>
                <Logo />
            </Container>
        </header>
    );
}

export default Header;
