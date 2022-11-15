import Image from "next/image";
import massages from "../data/massages.json";
import SectionTitle from "./SectionTitle";
import Link from 'next/link';

const Massages = () => {
    return (
        <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="massages">
            <div className="container">
                <SectionTitle
                    title="Massages"
                    className="lg:hidden"
                />

                <div className="md:grid grid-cols-12 items-center">

                    <div className="col-span-6 sm:text-center md:text-left">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="Massages"
                                className="hidden lg:block"
                            />
                            <div className="bio-text  text-justify">
                                Les massages énergétiques que je vous proposent s’appuient sur le modelage du corps par les
                                mains et sur la mobilisation de l’énergie Reiki. Ils sont destinés à soulager les douleurs,
                                permettre le rééquilibrage des énergies et le retour au bien-être.
                                <br /> <br />
                                <span className="italic underline">Différents massages vous sont proposés</span> :
                                <br /><br />
                                Si vous recherchez un massage lent et profond, mais aussi doux et enveloppant, invitant au
                                voyage, alors le
                                <span className="font-bold"> massage des 5 continents</span> - un petit bijou - est fait pour vous ;

                                <div className="md:flex justify-center ">
                                    <Link href="/massages#M5C">
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
                                Si vous souhaitez vivre un massage sonore, combinant vibrations et énergie, alors choisissez
                                plutôt le <span className="font-bold"> Vapa Kaia Energy</span>.
                                <div className="md:flex justify-center ">
                                    <Link href="/massages#VapaKaia">
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
                                Les massages énergétiques sont contre indiqués dans les situations suivantes :
                                <ul>
                                    <li>- Femme enceinte ou allaitantes ;</li>
                                    <li>- Juste après un coup de soleil ;</li>
                                    <li>- En cas de pathologies lourdes et/ou traitements invasif.</li>
                                </ul> <br />
                                Dans les situations suivantes, un massage énergétique est possible en adaptant les huiles
                                utilisées :
                                <ul>
                                    <li>- Allergies à certaines huiles vierges ou essentielles (m'&#39;'en informer avant le massage afin que
                                        je puisse vous proposer une alternative si possible) ;</li>
                                    <li>- Traitement homéopathique lourd ;</li>
                                    <li>- Enfants de moins de 6 ans.</li>
                                </ul>
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
