import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/zrg8ijl.css"/>
                <link rel={"stylesheet"} href={"/css/web-fonts.css"}/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}