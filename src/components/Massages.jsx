import Image from "next/image";
import massages from "../data/massages.json";
import SectionTitle from "./SectionTitle";

const Massages = () => {
    return (
        <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="massage">
            <div className="container">
                <SectionTitle
                    title="Massage des 5 continents"
                    className="lg:hidden"
                />

                <div className="md:grid grid-cols-12 items-center">

                    <div className="col-span-6 sm:text-center md:text-left">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="Massage des 5 continents "
                                className="hidden lg:block"
                            />

                            <div className="bio-text  text-justify">
                                <p>Le massage des 5 continents apporte de par les techniques utilisées - issues de différentes cultures et techniques du monde, (Tuina, Lomi-lomi, Californien, Suédois…)   - un lâcher-prise physique et mental permettant petit à petit de redonner grande confiance et une nouvelle vitalité, et surtout d'harmoniser les charges émotionnelles bloquant notre énergie. </p>
                                <p>Ce massage, lent et profond, vous propose un merveilleux voyage pour en ressortir apaisé, serein et en harmonie avec vous-même. Votre énergie vitale est tonifiée et votre système immunitaire est stimulé. </p>
                                <p>Les préparations avec des plantes utilisées en ayurvédiques et huiles essentielles dans ce soin sont réparties proportionnellement selon les critères des phases, on y retrouve : Arbres à Thé, citron, Eucalyptus, Lavande, Cyprès, Ravensare, Niaouli, Sarriette, Ylang-ylang, Romarin, Menthe poivrée, Orange, Géranium et Gingembre.</p>
                                <p className="italic">Durée du soin : 1h20 environ</p>
                                <p><span className="underline">Contre-indication</span> : Ce <span className="font-bold">massage</span> n'est pas recommandé aux femmes enceintes ou allaitantes, aux personnes épileptiques, pour les personnes atteintes d'un cancer hormono-dépendant, ainsi que les personnes suivant un traitement homéopathique, les hypersensibles et enfants de moins de 6 ans.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-start-7 col-end-13" >
                        {/*<div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
                           */}
                        <div className=" sm:text-center md:text-right">
                            <Image
                                alt="Massage des 5 continents"
                                width={350}
                                height={470}
                                className="rounded-md"
                                src={`/images/${massages.thumb}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Massages;
