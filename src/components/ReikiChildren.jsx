import Image from "next/image";
import reikichildren from "../data/reikichildren.json";
import SectionTitle from "./SectionTitle";

const ReikiChildren = () => {
    return (
        <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="reikichildren">
            <div className="container">
                <SectionTitle
                    title="Le Reiki pour les enfants"
                    className="lg:hidden"
                />

                <div className="md:grid grid-cols-12 items-center">
                    <div className="col-span-4 sm:text-center md:text-left">
                        <div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
                            <Image
                                alt="Reiki enfant"
                                width={350}
                                height={470}
                                className="rounded-md"
                                src={`/images/${reikichildren.thumb}`}
                            />
                        </div>
                    </div>

                    <div className="col-start-6 col-end-13">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="Le Reiki pour les enfants"
                                className="hidden lg:block"
                            />
                            <div className="bio-text text-justify">
                                <p>De par leur sensibilité, les enfants sont encore plus réceptifs au reiki que les adultes, tout simplement car ils
                                    ne sont pas encore dans la réflexion ou l’analyse comme peuvent l’être les grands.</p>
                                <p>Le Reiki peut être proposé à chaque âge et dès la naissance.</p>
                                <p>Il permet d'agir :
                                    <ul className="pl-5">
                                        <li>- sur les petits bobos du quotidien : coupure, brûlure, chute …</li>
                                        <li>- sur les maux des bébés : régurgitations, agitation …</li>
                                    </ul>
                                </p>
                                <p>Il peut être un complément en réponse aux enfants :
                                    <ul className="pl-5">
                                        <li> - très actifs et agités afin de leur permettre de calmer l’agitation mentale qui les secoue et les fatigue tout au long de la journée ;</li>
                                        <li>- rencontrant des problématiques de sommeil, des crises d’angoisse, des peurs …</li>
                                        <li>- devant subir une intervention chirurgicale ...</li>
                                    </ul>
                                </p>
                                <p> <br />Les possibilités sont multiples !</p>
                                <p>Le déroulé de la séance de Reiki est adapté à l’enfant (durée et modalité) afin qu’il la vive de la manière la plus sereine possible. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReikiChildren;
