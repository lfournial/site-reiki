import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Ô Soin de Soi - Virginie Fournial - Reiki - Massage énergétique - Accompagnante au bien être à Seclin" />
                <meta name="keywords" content="reiki, massage, relaxation, lâcher prise, énergie, accompagnement, bien etre, Seclin, Lille,Virginie Fournial, Fournial, Virginie, osoin-desoi" />
                <title>Virginie Fournial, Accompagnante au bien être par le Reiki et le massage énergétique à Seclin / Lille - Ô Soin de Soi</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Ô Soin de Soi - Virginie Fournial - Reiki - Massage énergétique - Accompagnante au bien être à Seclin" />
                <meta property="og:description" content="Ô Soin de Soi - Virginie Fournial - Reiki - Massage énergétique - Accompagnante au bien être à Seclin" />
                <meta property="og:url" content="https://www.osoin-desoi.fr" />
                <meta property="og:type" content="website" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
