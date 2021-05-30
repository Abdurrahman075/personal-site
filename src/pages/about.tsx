import Main from "../layouts/Main";
import style from "../assets/styles/index.module.css";

export default function About() {
    return (
        <Main pageTitle="About" pageDescription="I'm not a robot">
            <div className={style["home-container"]}>
                <h1 className={`${style["font-bold"]} ${style["text-xl"]}`}>About me</h1>
                <h5 className={style["text-md"]}>I'm not a robot</h5>
            </div>
        </Main>
    )
}
