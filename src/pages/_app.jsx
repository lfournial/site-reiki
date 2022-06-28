import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Ô Soin de Soi, Virginie Fournial, Accompagnante au bien être par le Reiki et le massage énergétique à Seclin / Lille - Nord - France. " />
                <title>Ô Soin de Soi</title>

            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
