import { useState, useEffect } from "react";
import Image from "next/image";
import Main from "../layouts/Main";
import style from "../assets/styles/index.module.css";

interface QuoteData {
    isLoaded?: boolean;
    author?: string;
    text?: string;
    error?: string;
}

export default function Home() {
    const [ quote, setQuote ] = useState<QuoteData>({});

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/lakuapik/quotes-indonesia/master/raw/quotes.json")
        .then((response) => response.json())
        .then((quotes) => {
            const _quote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote({ isLoaded: true, error: null, author: _quote.by, text: _quote.quote });
        }).catch((error) => {
            setQuote({ isLoaded: true, error: error.toString(), author: null, text: null });
        });
    }, []);

    return (
        <Main>
            <div className={style["home-container"]}>
                <Image className={`${style["rounded-full"]} ${style["mx-auto"]}`} src="/img/avatar.png" alt="avatar" width={150} height={150} />
                {(() => {
                    if (!quote.isLoaded || !(quote.text && quote.author))
                        return <div className={`${style.loading} ${style["mx-auto"]}`}></div>;
                    if (quote.error)
                        return <h5 className={style["text-lg"]}>{quote.error}</h5>;
                    return (
                        <>
                            <h5 className={`${style["text-lg"]} ${style["font-mono"]} ${style["my-0"]}`}>“{quote.text}”</h5>
                            <h5 className={`${style["text-md"]} ${style["my-0"]} ${style["font-mono"]}`}>~ {quote.author} ~</h5>
                        </>
                    );
                })()}
            </div>
        </Main>
    )
};
