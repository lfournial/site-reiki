import Image from "next/image";
import massages from "../data/massages.json";
import SectionTitle from "./SectionTitle";
import Link from 'next/link';

const MassagesSonores = () => {
    return (<section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="massagessonores">
        <div className="container">
            <SectionTitle
                title="Massages sonores"
                className="lg:hidden"
            />

            <div className="md:grid grid-cols-12 items-center">
                <div className="col-span-4 sm:text-center md:text-left">
                    <div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
                        <Image
                            alt="Massage sonores"
                            width={350}
                            height={470}
                            className="rounded-md"
                            src={`/images/${massages.thumb}`}
                        />
                    </div>
                </div>

                <div className="col-start-6 col-end-13">
                    <div className="bio mt-5 sm:mt-10 md:mt-0">
                        <SectionTitle
                            title="Massages sonores"
                            className="hidden lg:block"
                        />
                        <div className="bio-text text-justify">
                            Les massages sonores s'opèrent <b>par le son et les vibrations</b>. Lorsqu'il y a blocages, tensions, stress… la fréquence de ces vibrations est perturbée.
                            <br />
                            Les sons émis par les bols chantants peuvent, grâce à leurs fréquences spécifiques, entrer en résonance avec notre corps pour le ré harmoniser.
                            <br /><br />
                            <b>A la carte :</b>
                            <br /><br />
                            Si vous souhaitez vivre un massage sonore, combinant vibrations et énergie, alors choisissez
                            plutôt le <span className="font-bold"> Vapa Kaia Energy</span>.
                            <div className="md:flex justify-center ">
                                <Link href="/massages#VapaKaia">
                                    <a target="_blank" rel="noopener noreferrer" className="underline">
                                        &nbsp;En savoir plus
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default MassagesSonores;
