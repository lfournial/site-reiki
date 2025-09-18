import Image from "next/image";
import massages from "../data/massages.json";
import SectionTitle from "./SectionTitle";
import Link from 'next/link';

const MassagesCorps = () => {
    return (
        <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="massagescorps">
            <div className="container">
                <SectionTitle
                    title="Massages du corps"
                    className="lg:hidden"
                />

                <div className="md:grid grid-cols-12 items-center">

                    <div className="col-span-7 sm:text-center md:text-left">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="Massages du corps"
                                className="hidden lg:block"
                            />
                            <div className="bio-text  text-justify">
                                Les massages proposés sont des massages bien-être aux huiles essentielles et mobilisant l’énergie Reiki. Ils sont destinés à soulager les douleurs, permettre le rééquilibrage des énergies et une détente profonde du corps et de l'esprit. Des mélanges d'huiles essentielles sont utilisés. Chaque massage est unique, et une invitation au voyage
                                <br /><br />
                                ✨ <b>Massage Harmonia</b> ✨<br /><br />
                                Ce massage complet aux huiles essentielles invite à une reconnexion profonde entre le corps, l’esprit et l’âme.<br />
                                Combiné au Reiki, il allie détente physique et rééquilibrage énergétique, pour apaiser les tensions, libérer le mental 
                                et raviver la vitalité intérieure.<br /><br />
                                Un massage doux et une invitation au voyage, où chaque geste devient une mélodie qui ré-installe la paix et la sérénité. 🌿💫
                                <br /><br />
                                <u>Durée</u> : 1h30 environ - 90€.<br />
                                <u>Forfait 3 massages</u> : 230€
                                <br /><br />
                                ✨  <b>Massage Résonance</b>✨
                                <br /><br />
                                Un massage unique qui combine les baguettes Kanza et l’énergie du Reiki pour un rééquilibrage profond du corps et de l’esprit.<br /><br />
                                Grâce au contact subtil des baguettes, les tensions sont libérées, l’énergie circule librement et l’harmonie intérieure se rétablit. 
                                Chaque geste est pensé pour apaiser le corps, calmer le mental et nourrir l’âme.<br /><br />
                                Un moment de détente et de reconnexion profonde, où l’énergie circule avec fluidité pour vous offrir vitalité, 
                                sérénité et bien-être durable. 🌿💫
                                <br /><br />
                                <u>Durée</u> : 1h30 environ - 90€.<br />
                                <u>Forfait 3 massages</u> : 230€
                                <br /><br />
                                ✨  <b>Massage Flow</b>✨ 
                                <br /><br />
                                Vous manquez de temps ?<br /><br />
                                Envie de découvrir un massage énergétique pour la première fois ? Ce massage est parfait comme initiation douce et efficace.
                                Un massage guidé par l’intuition, où chaque geste s’adapte à vos besoins du moment.<br /><br />
                                Il favorise la circulation de l’énergie, relâche les tensions et procure un profond sentiment de détente et de fluidité intérieure.
                                Un véritable moment pour laisser le corps parler et se ressourcer. 🌿💫<br /><br />
                                <u>Durée</u> : 1h environ - 80€.<br />
                                <u>Forfait 3 massages</u> : 200€
                                <br /><br />
                                <b>A savoir :</b>
                                <div>
                                    Les massages énergétiques sont contre indiqués dans les situations suivantes :
                                    <ul className="pl-5">
                                        <li>- Femme enceinte ou allaitantes ;</li>
                                        <li>- Juste après un coup de soleil ;</li>
                                        <li>- En cas de pathologies lourdes et/ou traitements invasif.</li>
                                    </ul> <br />
                                    Dans les situations suivantes, un massage énergétique est possible en adaptant les huiles utilisées :
                                    <ul className="pl-5">
                                        <li>- Allergies à certaines huiles vierges ou essentielles (m'en informer avant le massage afin que je puisse vous proposer une alternative si possible) ;</li>
                                        <li>- Traitement homéopathique lourd ;</li>
                                        <li>- Enfants de moins de 6 ans.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-start-8 col-end-13" >
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

export default MassagesCorps;
