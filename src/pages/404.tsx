import Main from "../layouts/Main";
import style from "../assets/styles/index.module.css";

export default function _404() {
    return (
        <Main pageTitle="Error" pageDescription="Page Not Found">
            <div className={style["home-container"]}>
                <h1 className={`${style["font-bold"]} ${style["text-xl"]}`}>404</h1>
                <h5 className={style["text-md"]}>Halaman tidak dapat ditemukan</h5>
            </div>
        </Main>
    )
}
