"use client";
import React from "react";
import styles from "./styles.module.css";

export const ScrollDistanceContext = React.createContext();

function ScrollDistanceProvider({ children }) {
    const [scrollDistance, setScrollDistance] = React.useState();
    const [updateScroll, setUpdateScroll] = React.useState(false);

    React.useEffect(function () {
        function handleScrollChange(event) {
            // console.log("Scroll Event: ", event);
            // console.log("Scroll Event (x): ", window.scrollX);
            // console.log("FREEZE 1: ", freeze);
            // if (freeze) return;
            // console.log("Scroll Event (y): ", window.scrollY);
            // setScrollDistance(window.scrollY);
        }

        window.addEventListener("scroll", handleScrollChange);

        return () => window.removeEventListener("scroll", handleScrollChange);
    }, []);

    React.useEffect(
        function () {
            console.log("update scroll", scrollDistance);
            window.scroll(0, scrollDistance);
        },
        [updateScroll],
    );

    return (
        <ScrollDistanceContext.Provider value={{ setScroll, restoreScroll }}>
            {children}
        </ScrollDistanceContext.Provider>
    );

    function restoreScroll() {
        console.log("restore : ", updateScroll);
        // setFreeze(false);
        setUpdateScroll(true);
    }

    function setScroll() {
        console.log("set scroll: ", window.scrollY);
        setScrollDistance(window.scrollY);
    }
}

export default ScrollDistanceProvider;
