import { useEffect, useState } from "react";
import Header from "../components/Header";
import AboutMe from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import HeroArea from "../components/HeroArea";
import Services from "../components/Services";
import Preloader from "../components/Preloader";
import Portfolios from "../components/Portfolios";
import Reiki from "../components/Reiki";
import MassagesCorps from "../components/MassagesCorps";
import CerclesFemmes from "../components/CerclesFemmes";
import ReikiChildren from "../components/ReikiChildren";
import FormationsReiki from "../components/FormationsReiki";

const Home = () => {
    const [preloaded, setPreloaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPreloaded(true);
        }, 800)
    }, []);

    return (
        <div className="rokstar">
            <Preloader preloaded={preloaded} />
            <Header />
            <HeroArea />
            <AboutMe />
            <Reiki />
            <ReikiChildren />
            <MassagesCorps />
            <CerclesFemmes />
            <FormationsReiki />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
