import SectionTitle from "../components/SectionTitle";
import Shape from "../components/Shape";
const heroBg = "/images/hero-bg.jpg";
const LegalPage = () => {

    return (
        <div className="rokstar">
            <section
                id="hero"
                style={{ backgroundImage: `url(${heroBg})` }}
                className="relative bg-cover bg-no-repeat bg-center-top  flex items-center"
            >
                <div className="container">
                    <div className="mt-8 font-light">
                        <h1 className="font-light text-3xl sm:text-[45px] md:text-[55px] leading-none">
                            Ô Soin de Soi
                        </h1>
                        <h2 className="font-light text-md sm:text-lg tracking-4 mt-2 sm:mt-4">
                            Le Reiki au service du mieux-être !
                        </h2>
                    </div>
                </div>

            </section>
            <section className="pt-[80px] lg:pt-[100px] pb-[60px] lg:pb-[125px]" id="about">
                <div className="container">
                    <SectionTitle
                        title="Mentions légales et Confidentialité"
                        className="hidden lg:block"
                    />
                    <div className="font-bold text-lg">Editeur :</div>
                    <p className="text-justify">
                        Ô Soin de Soi<br />
                        5 rue Nelson Mandela – 59113 Seclin
                    </p>
                    <div className="font-bold text-lg">Responsable de la publication :</div>
                    <p className="text-justify">
                        Virginie FOURNIAL – auto entrepreneur<br />
                        Siret : 91452672800011<br />
                        Tel : 07 65 54 39 36
                    </p>
                    <div className="font-bold text-lg">Hébergement web :</div>
                    <p className="text-justify">https://vercel.com</p>
                    <div className="font-bold text-lg">Développement web :</div>
                    <p className="text-justify">Ô Soin de Soi</p>
                    <div className="font-bold text-lg">Reproduction :</div>
                    <p className="text-justify">
                        Les textes proposés sont la propriété de leurs auteurs.
                        Les images et illustrations sont utilisées par Ô Soin de Soi, achetés sur des banques d’images
                        libres de droit ou reproduites avec l’autorisation de l’auteur.
                        Il est interdit de reproduire, représenter, transférer, distribuer ou d’enregistrer tout ou partie de ces éléments,
                        sous quelque forme que ce soit, sans l’accord préalable et écrit d’Ô Soin de Soi.
                    </p>
                    <div className="font-bold text-lg">Politique de confidentialité et respect de la vie privée</div>
                    <p className="text-justify">Dernière mise à jour : Juin 2022</p>
                    <div className="font-semibold">Introduction</div>
                    <p className="text-justify">
                        La présente politique relative à la confidentialité et aux cookies (« Politique de Confidentialité ») décrit les
                        données utilisées sur Ô Soin de Soi (le « site Internet »).<br />
                        Le responsable du traitement de vos données est Ô Soin de Soi : 5 rue Nelson Mandela à Seclin.
                        Merci de me contacter pour toutes questions relatives au sujet.<br />
                        Nous nous engageons à protéger la confidentialité de nos utilisateurs et de nos clients.
                        La présente Politique de Confidentialité est destinée à vous informer de la manière dont nous recueillons,
                        définissons et utilisons les données qui pourraient permettre de vous identifier, telles que votre nom,
                        votre adresse électronique, votre adresse postale, vos autres coordonnées ou identifiants en ligne
                        et autres informations que vous nous communiquez lorsque vous utilisez le Site.
                        Prenez le temps de lire attentivement la présente Politique de Confidentialité.
                    </p>
                    <div className="font-semibold">Quelles Données Personnelles collectons-nous ?</div>
                    <p className="text-justify">
                        Lorsque vous visitez et/ou utilisez notre site Internet ou lorsque vous nous contactez,
                        nous pouvons collecter les données suivantes :<br />
                        Données Personnelles que vous décidez de nous communiquer lorsque vous passez une commande et / ou prenez rendez-vous.
                        Les données de l’acheteur ne sont pas conservées.<br />
                        Si vous décidez de communiquer avec nous (par exemple, par l’intermédiaire du mail de contact sur notre site,
                        téléphone, SMS ou sur les médias sociaux), nous enregistrons le fait que vous nous avez contactés
                        et pouvons conserver le contenu de votre communication, ainsi que vos coordonnées et nos réponses.<br />
                        Informations relatives à vos visites sur le site et à votre utilisation, telles que les informations
                        relatives à l’appareil et au navigateur que vous utilisez, votre adresse IP et votre emplacement
                        géographique, votre identifiant IDFA (identifier for advertisers), la date et l’heure de votre visite,
                        la durée de votre visite, la source qui vous a adressé(e) à nous et les sites Internet consultés avant votre visite.
                    </p>
                    <div className="font-semibold">Protéger vos Données Personnelles</div>
                    <p className="text-justify">
                        La transmission d’informations sur Internet n’est pas totalement sûre.
                        Toutes les données que vous renseignez ne sont pas et ne seront jamais vendues ou utilisées
                        à d’autres fins que celles de Ô Soin de Soi.<br />
                    </p>
                    <div className="font-semibold">Comment utilisons-nous vos Données Personnelles ?</div>
                    <p className="text-justify">
                        En règle générale, nous utilisons les Données Personnelles pour vous fournir les services et les produits
                        que vous demandez, pour traiter les paiements, assurer le service client, à des fins d’analyse de la clientèle.
                        Il n’y a pas de courriels marketing.
                    </p>

                    <div className="font-semibold">Partager des Données Personnelles avec des tiers</div>
                    <p className="text-justify">
                        Nous prenons la sécurité et la méthode de traitement de vos Données Personnelles très au sérieux et
                        ne vendrons jamais vos Données Personnelles, en aucune circonstance.
                        Vous pouvez également avoir le droit de porter réclamation si vous estimez que vos Données Personnelles
                        ont été mal gérées. Nous vous encourageons à nous contacter en premier lieu mais, dans la mesure où
                        vous bénéficiez de ce droit, vous êtes en droit de vous plaindre directement auprès de l’autorité de
                        protection des données compétente.
                    </p>

                    <div className="font-semibold">Modifications de notre Politique de Confidentialité</div>
                    <p className="text-justify">
                        Si nous modifions nos politiques et procédures en matière de confidentialité, nous publierons ces modifications
                        sur notre Site afin que vous soyez informé(e) des informations que nous collectons, de la manière dont nous
                        les utilisons et des cas dans lesquels nous sommes susceptibles de les communiquer.
                    </p>
                    <div className="font-semibold">Conservation des données</div>
                    <p className="text-justify">
                        Nous conservons vos Données Personnelles aussi longtemps que nécessaire pour mener les activités qui sont
                        décrites dans la présente Politique de Confidentialité ou qui vous sont communiquées, ou encore aussi longtemps
                        que la loi nous y autorise. Les données informatisées sont sécurisées, et nous ne gardons que votre nom, prénom,
                        date du massage, montant de la prestation et type de prestation, mode de paiement, à des fins de statistiques ou de
                        comptabilité. Les données personnelles sur lesquelles nous échangeons, qui sont prises au moment du massage ne
                        sont pas informatisées. Si vous souhaitez que la fiche manuscrite ne soit pas conservée, nous pouvons la détruire.
                        Pour cela, il suffit de nous contacter.
                    </p>
                    <div className="font-semibold">Cookies</div>
                    <p className="text-justify">
                        Nous n’utilisons pas de cookies sur notre site internet.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LegalPage;
