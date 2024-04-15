import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Formation et séances de Reiki - Massage bien-être - Seclin - Virginie Fournial, accompagnante au bien être" />
                <meta name="keywords" content="reiki, massage, relaxation, lâcher prise, énergie, Formation au Reiki, stage de Reiki, accompagnement, bien etre, Nord de la France, Seclin, Nord, Lille,Virginie Fournial, Fournial, Virginie, osoin-desoi" />
                <title>Virginie Fournial, Accompagnante au bien être par le Reiki et le massage bien-être à Seclin / Lille - Ô Soin de Soi</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Reiki - Massage bien être et formation au Reiki - Seclin près de Lille Nord de la France - Virginie Fournial, acccompagnante au bien être" />
                <meta property="og:description" content="Formation et séances de Reiki - Massage bien-être - Seclin près de Lille Nord de la France - Virginie Fournial, accompagnante au bien être" />
                <meta property="og:url" content="https://www.osoin-desoi.fr" />
                <meta property="og:type" content="website" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
