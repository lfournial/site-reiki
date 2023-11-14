import Image from "next/image";
import reiki from "../data/reiki.json";
import SocialMedia from "./SocialMedia";
import SectionTitle from "./SectionTitle";

const Reiki = () => {
    return (
        <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="reiki">
            <div className="container">
                <SectionTitle
                    title="Le Reiki, pour qui ? Pour quoi ?"
                    className="lg:hidden"
                />
                <div className="md:grid grid-cols-12 items-center">

                    <div className="col-span-7 sm:text-center md:text-left">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="Le Reiki, pour qui ? Pour quoi ?"
                                className="hidden lg:block"
                            />
                            <div className="bio-text  text-justify">
                                <p>Le Reiki est une technique énergétique douce de bien-être et d'équilibrage passant par le positionnement des mains sur le corps. </p>
                                <p>Le praticien transmet de manière consciente et bienveillante l'énergie Reiki à l'organisme qui va l'utiliser et mettre en place ses mécanismes d'auto-régulation. </p>
                                <p>Le Reiki agit ainsi directement sur les causes de chaque maux et en agissant au niveau physique, mental et émotionnel. Il aide à soulager les douleurs et à éliminer les toxines du corps.</p>
                                <p>Exemples de troubles pouvant être accompagnés :

                                    <ul>
                                        <li>- Les problèmes de sommeil ;</li>
                                        <li>- Le stress ;</li>
                                        <li>- La gestion des émotions ;</li>
                                        <li>- Les douleurs ...</li>
                                    </ul>
                                </p>
                                <p>Pendant la durée de la séance, vous êtes allongé tout en étant habillé, et un plaid vous est proposé pour vous permettre de vous offrir un moment cocooning.</p>
                                <p>Être allongé.e vous angoisse ? la séance peut également se faire en position assise.</p>

                                <p>Je propose également des séance d'Intervention Psycho-Energétique – IPE (durée 2h)</p>
                                <p>L'IPE est une technique qui s'emploie aussi bien pour des problèmes d'ordre physiques que non physiques.</p>
                                <p>Elle permet de libérer l'énergie négative qui s'accumule et se manifeste au niveau de notre corps. A travers cette technique, c'est la cause des maux qui est ciblée, afin d'aller vers une amélioration profonde et dans la durée. </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-start-8 col-end-13" >
                        {/*<div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
       */}
                        <div className=" sm:text-center md:text-right">
                            <Image
                                alt="Reiki"
                                width={350}
                                height={470}
                                className="rounded-md"
                                src={`/images/${reiki.thumb}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Reiki;
