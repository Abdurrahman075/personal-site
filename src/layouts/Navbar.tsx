import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../assets/styles/index.module.css";

export default function Navbar() {
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const navbar = document.querySelector(`nav.${style.navbar}`);
            if (scrollY >= 70) navbar.classList.add(style["navbar-scroll"]);
            else navbar.classList.remove(style["navbar-scroll"]);
        });
    }, []);

    const toggleShow = (ev) => {
        const navMenu = document.querySelector(`div.${style["nav-menu"]}`);
        ev.currentTarget.classList.toggle(style.show);
        navMenu.classList.toggle(style.show);
    };

    return (
        <nav className={style.navbar}>
            <div className={style["nav-container"]}>
                <Link href="/">
                    <a className={style["nav-brand"]}>
                        <Image className={style["rounded-full"]} src="/img/avatar.png" alt="Brand" width={40} height={40} />
                    </a>
                </Link>
                <button onClick={toggleShow} className={style["nav-toggler"]}>
                    <div className={style["nav-bar"]}></div>
                    <div className={style["nav-bar"]}></div>
                    <div className={style["nav-bar"]}></div>
                </button>
                <div className={style["nav-menu"]}>
                    <div className={style["nav-links"]}>
                        <Link href="/"><a className={style["nav-item"]}>Home</a></Link>
                        <Link href="/about"><a className={style["nav-item"]}>About</a></Link>
                        <Link href="/social"><a className={style["nav-item"]}>Social</a></Link>
                        <a className={style["nav-item"]} href="https://github.com/Abdurrahman075?tab=repositories" target="_blank" rel="noreferrer">Project</a>
                    </div>
                </div>
            </div>
        </nav>
    )
};
