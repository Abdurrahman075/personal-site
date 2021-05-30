import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import style from "../assets/styles/index.module.css";

interface MainProps {
    pageTitle?: string;
    pageDescription?: string;
    children: React.ReactNode;
}

export default function MainLayout(props: MainProps) {
    const { pageTitle, pageDescription } = props;
    return (
        <>
            <Head title={pageTitle} description={pageDescription} />
            <Navbar />
            <div className={style["main-content"]}>
                {props.children}
            </div>
        </>
    )
};
