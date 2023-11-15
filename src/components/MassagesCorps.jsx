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
                                Les massages proposés sont des massages bien-être et mobilisant l’énergie Reiki. Ils sont destinés à soulager les douleurs, permettre le rééquilibrage des énergies et une détente profonde du corps et de l'esprit. Des mélanges d'huiles essentielles sont utilisés.
                                Chaque massage est unique, et une invitation au voyage.
                                <br /><br />
                                <b>A la carte :</b>
                                <br /><br />
                                Si vous recherchez un massage lent et profond, mais aussi doux et enveloppant,  alors le
                                <span className="font-bold"> massage des 5 continents</span> - un petit bijou - est fait pour vous ;

                                <div className="md:flex justify-center ">
                                    <Link href="/massages#M5C">
                                        <a target="_blank" rel="noopener noreferrer" className="underline">
                                            &nbsp;En savoir plus
                                        </a>
                                    </Link>
                                </div>
                                <br />
                                Si vous recherchez un massage biodynamique alliant le massage manuel, la baguette Kansa et l'énergétique avec une approche en 7 temps,  le
                                <span className="font-bold"> Shinzu Body</span> est fait pour vous ;

                                <div className="md:flex justify-center ">
                                    <Link href="/massages#Shinzu">
                                        <a target="_blank" rel="noopener noreferrer" className="underline">
                                            &nbsp;En savoir plus
                                        </a>
                                    </Link>
                                </div>
                                <br />
                                Si vous souhaitez un massage sans protocole, ou seul l’instant présent compte, optez plutôt
                                pour le  <span className="font-bold"> massage intuitif Ukiyo</span> ;
                                <div className="md:flex justify-center ">
                                    <Link href="/massages#Ukiyo">
                                        <a target="_blank" rel="noopener noreferrer" className="underline">
                                            &nbsp;En savoir plus
                                        </a>
                                    </Link>
                                </div>
                                <br />
                                Si vous ne souhaitez pas un massage de l’ensemble du corps, vous avez la possibilité de
                                choisir un  <span className="font-bold"> massage énergétique du dos</span>
                                <div className="md:flex justify-center ">
                                    <Link href="/massages#MED">
                                        <a target="_blank" rel="noopener noreferrer" className="underline">
                                            &nbsp;En savoir plus
                                        </a>
                                    </Link>
                                </div>
                                <br />
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
