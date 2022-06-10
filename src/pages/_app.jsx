import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="description" content="O soin de soi, Virginie Fournial, praticienne en reiki et massage bien-être Seclin / Lille - Nord - France. " />
                <title>Ô Soin de Soi</title>

            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
