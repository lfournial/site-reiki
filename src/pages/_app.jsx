import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Ô Soin de Soi</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
