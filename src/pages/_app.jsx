import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Virginie Fournial, Accompagnante au bien être par le Reiki et le massage énergétique à Seclin / Lille / France- Ô Soin de Soi" />
                <meta name="keywords" content="reiki, massage, énergie, accompagnement, bien etre, Seclin, Lille,Virginie Fournial, Fournial, Virginie" />
                <title>Virginie Fournial, Accompagnante au bien être par le Reiki et le massage énergétique à Seclin / Lille - Ô Soin de Soi</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Virginie Fournial, Accompagnante au bien être par le Reiki et le massage énergétique à Seclin / Lille / France - Ô Soin de Soi" />
                <meta property="og:description" content="Virginie Fournial, Accompagnante au bien être par le Reiki et le massage énergétique à Seclin / Lille / France - Ô Soin de Soi" />
                <meta property="og:url" content="https://www.osoin-desoi.fr" />
                <meta property="og:type" content="website" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
