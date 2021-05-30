import Head from "next/head";

interface HeadProps {
    title?: string;
    description?: string;
}

export default function Header(props: HeadProps = {}) {
    const { title = "Home", description = "Personal Website" } = props;

    return (
        <Head>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content="personalweb" />
            <meta name="language" content="Indonesia" />
            <meta name="author" content="Fayyadh Abdurrahman" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://fayyadh.my.id/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://fayyadh.my.id/" />
            <meta property="twitter:title" content="Home" />
            <meta property="twitter:description" content={description} />
            <title>{title}</title>
        </Head>
    )
}
