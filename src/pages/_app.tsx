import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

import "../assets/styles/style.css";

NProgress.configure({ showSpinner: false });

function Root({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        router.events.on("routeChangeStart", () => NProgress.start());
        router.events.on("routeChangeComplete", () => NProgress.done());
        router.events.on("routeChangeError", () => NProgress.done());
    }, []);

    return <Component {...pageProps} />
};

export default Root;
