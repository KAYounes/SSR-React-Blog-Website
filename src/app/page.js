import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/Container";
import clsx from "clsx";

export default function Home() {
    return (
        <Container>
            <h1 className={clsx(styles.page__header)}>All Blogs</h1>
        </Container>
    );
}
