import Image from "next/image";
import SectionTitle from "./SectionTitle";
import reiki from "../data/reiki.json";

const FormationsReiki = () => {
    return (
        <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="formationsreiki">
            <div className="container">
                <SectionTitle
                    title="Les stages Reiki"
                    className="lg:hidden"
                />
                <div className="md:grid grid-cols-12 items-center">

                    <div className="col-span-8 sm:text-center md:text-left">
                        <div className="bio mt-5 sm:mt-10 md:mt-0">
                            <SectionTitle
                                title="Les stages Reiki "
                                className="hidden lg:block"
                            />
                            <div className="bio-text  text-justify">
                                <div class="flex items-center">
                                <Image
                                alt="Reiki"
                                width={50}
                                height={50}
                                className="rounded-md"
                                src={`/images/LogoMundo.png`}/>
                                &nbsp;
                                Les stages de Reiki sont dispensés en partenariat avec MundoReiki.
                                </div>
                                <br />
                                <h1 className="text-2xl font-heading underline tracking-normal text-gray-700" >
                                    Reiki I
                                </h1>
                                <p>Le premier degré de Reiki s’enseigne en deux jours et alterne les temps de théorie et de pratique. </p>
                                <p>La durée peut-être envisagée sur une journée intensive, en fonction des circonstances. </p>
                                <p><b>Contenu du stage :</b>
                                    <br />
                                    <ul>
                                        <li>– Qu’est-ce que le Reiki, son histoire et son fonctionnement</li>
                                        <li>– Les bienfaits du Reiki</li>
                                        <li>– Les quatre initiations du premier degré</li>
                                        <li>– Les cinq idéaux de Reiki</li>
                                        <li>– Les positions des mains pour soi-même et pour une autre personne</li>
                                        <li>– Pratiquer le Reiki sur soi et échanger des traitements avec les autres participants</li>
                                        <li>– Les techniques japonaises de Reiki </li>
                                    </ul>
                                </p>
                                <p><b>Participation:</b> 220 €  – <b>jeunes accompagnés (15 à 18 ans)</b> : 120 €</p>
                                <p>Tarifs pour les enfants accompagnés : 120 €</p>
                                <p><b>Retrouvez la programmation sur ma page facebook</b></p>
                                <br />
                                <h1 className="text-2xl font-heading underline tracking-normal text-gray-700" >
                                    Reiki II
                                </h1>
                                <p>Le deuxième degré de Reiki s’enseigne en deux jours et alterne les temps de théorie et de pratique. </p>
                                <p><b>Contenu du stage :</b>
                                    <br />
                                    <ul>
                                        <li>– Révision du premier degré</li>
                                        <li>– Les trois symboles « traditionnels » du deuxième degré de Reiki</li>
                                        <li>– Le symbole du cœur</li>
                                        <li>– Utilisation des symboles dans  l’autotraitement et dans le traitement pour une autre personne...</li>
                                        <li>– Les initiations du deuxième degré</li>
                                        <li>– Les techniques japonaises de Réiki du 2ème degré </li>
                                        <li><b>Participation </b>:330 €</li>
                                        <li>Pré-requis : avoir suivi le Reiki 1. La copie de votre certificat vous sera demandée.</li>
                                    </ul>
                                </p>
                                <br />
                                <h1 className="text-2xl font-heading underline tracking-normal text-gray-700" >
                                    Reiki III
                                </h1>
                                <p>à partir de 2025</p>
                                <br />
                                <p>
                                    <b>Le planning des formation est disponible ma page Facebook, les dates seront régulièrement mises à jour.
                                        Pour plus d'information, contactez-moi.</b>
                                </p>
                                <br />
                                <h1 className="text-2xl font-heading underline tracking-normal text-gray-700" >
                                    Bon à savoir :
                                </h1>
                                <br />
                                <p>
                                    J'ai été formée par <b>Nita MOCANU</b>. Par conséquent ma lignée <b>Reiki est la lignée Usui.</b><br />
                                    Pour la consulter en détail, je vous invite à formuler votre demande par mail :  <br />
                                    osoindesoi.rdv@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-9 col-end-13" >
                        {/*<div className="inline-block md:block leading-none drop-shadow-thumb relative sm:before:absolute sm:before:bottom-[-20px] lg:before:bottom-[-45px] sm:before:right-[-25px] sm:before:border-2 sm:before:border-white-light sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl">
       */}
                        <div className=" sm:text-center md:text-right">
                            <Image
                                alt="Reiki"
                                width={350}
                                height={470}
                                className="rounded-md"
                                src={`/images/formations.png`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FormationsReiki;
