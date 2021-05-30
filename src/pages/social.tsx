import Main from "../layouts/Main";
import style from "../assets/styles/index.module.css";

export default function Social() {
    return (
        <Main pageTitle="Social" pageDescription="Social">
            <div className={style["home-container"]}>
                <h1 className={`${style["font-bold"]} ${style["text-xl"]}`}>Social</h1>
                <div className={style["text-xl"]}>
                    <a className={`${style["social-button"]} ${style.twitter}`} title="Twitter: fayyadh_75" role="button" onClick={() => window.open("https://twitter.com/fayyadh_75")}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className={`${style["social-button"]} ${style.instagram}`} title="Instagram: fayyadh_75" role="button" onClick={() => window.open("https://www.instagram.com/fayyadh_75/")}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className={`${style["social-button"]} ${style.github}`} title="Github: Abdurrahman075" role="button" onClick={() => window.open("https://github.com/Abdurrahman075")}>
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </Main>
    )
}
