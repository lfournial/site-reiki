import Image from "next/image";
import massages from "../data/massages.json";
import SectionTitle from "./SectionTitle";
import Link from 'next/link';

const CerclesFemmes = () => {
    return (<section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="cerclesFemmes">
        <div className="container">
            <SectionTitle
                title="Cercles Femmes"
                className="lg:hidden"
            />

            <div className="md:grid grid-cols-12 items-center">
                <div className="col-span-4 sm:text-center md:text-left">
                    <div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
                        <Image
                            alt="Cercles Femmes"
                            width={350}
                            height={470}
                            className="rounded-md"
                            src={`/images/cristaux.jpg`}
                        />
                    </div>
                </div>

                <div className="col-start-6 col-end-13">
                    <div className="bio mt-5 sm:mt-10 md:mt-0">
                        <SectionTitle
                            title="Les cercles de femmes "
                            className="hidden lg:block"
                        />
                        <div className="bio-text text-justify">
                            ✅ <b>Un espace d’échanges, de créativité et de sororité pour vous reconnecter à vous même</b><br /><br />

                            Rejoignez nous pour un moment unique dédié aux femmes qui souhaitent se reconnecter à leur cœur, explorer leurs émotions et cultiver la gratitude, le pardon, la confiance et l’amour.
                            <br /><br />
                            Que vous cherchiez à retrouver votre équilibre intérieur, à partager ou simplement à prendre soin de vous, les cercles de femmes sont l’occasion idéale de vous ressourcer, renforcer votre confiance et reconnecter avec votre essence.
                            <br /><br />
                            👉<b>Les vendredi'Harmonie</b> : Il s’agit d’ateliers conçus pour vous reconnecter à vous-même, renforcer votre confiance et cultiver votre bien-être. Créativité, méditation, partages et échanges guideront les thèmes essentiels pour s’épanouir pleinement : le courage d’être soi, la puissance du cœur, et la magie de l’authenticité.
                            <br /><br />
                            <u>Tarif</u> : 40€ par date.<br />
                            <u>Tarifs réduits</u> : 20€ par date, pour les étudiants et les personnes en recherche d'emploi sur présentation d'un justificatif.
                            <br /><br />
                            ‼️<b>Attention</b> : le nombre de places est limité à 8 personnes maximum.
                            Il est recommandé de suivre l'ensemble du cycle pour profiter pleinement de cette expérience d’échange, de créativité et de sororité.
                            <br /><br />
                            <b>Saisissez cette opportunité de prendre soin de vous, dans la douceur et la bienveillance.</b> 
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default CerclesFemmes;
