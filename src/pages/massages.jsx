import SectionTitle from "../components/SectionTitle";
import Shape from "../components/Shape";
const heroBg = "/images/hero-bg.jpg";
const Massages = () => {

    return (
        <div className="rokstar">
            <a id="M5C"></a>
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
                    <h1 className="text-3xl font-heading tracking-normal text-dark pb-4 relative before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-dark after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[255px] after:bg-dark">
                        Massage des 5 continents
                    </h1>
                    <p className="mt-10 text-justify">
                        Le massage des 5 continents apporte de par les techniques utilisées - issues de différentes cultures et techniques du monde, (Tuina, Lomi-lomi, Californien, Suédois…)   - un lâcher-prise physique et mental permettant petit à petit de redonner grande confiance et une nouvelle vitalité, et surtout d'harmoniser les charges émotionnelles bloquant notre énergie.<br />
                        Ce massage, lent et profond, vous propose un merveilleux voyage pour en ressortir apaisé, serein et en harmonie avec vous-même. Votre énergie vitale est tonifiée et votre système immunitaire est stimulé.<br />
                        Les préparations avec des plantes utilisées en ayurvédiques et huiles essentielles dans ce soin sont réparties proportionnellement selon les critères des phases, on y retrouve : Arbres à Thé, citron, Eucalyptus, Lavande, Cyprès, Ravensare, Niaouli, Sarriette, Ylang-ylang, Romarin, Menthe poivrée, Orange, Géranium et Gingembre.
                        <br />
                        <span className="italic">La durée du soin est de 1h20 environ - 80€.
                            <br /> Forfait 3 massages : 200€</span>
                    </p>
                    <br />
                    <a id="Ukiyo"></a>
                    <h1 className="text-3xl font-heading tracking-normal text-dark pb-4 relative before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-dark after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[255px] after:bg-dark">
                        Ukiyo
                    </h1>
                    <p className="mt-10 text-justify">
                        <span className="font-semibold">Ukiyo</span> est un massage sans protocole, dans lequel je me laisse guider par mon intuition et par l’énergie du Reiki.
                        C’est un massage offrant une reconnexion à soi, et qui vous aidera à aller vers la relaxation et vers un mieux-être.
                        S’offrir un massage Ukiyo, c’est se laisser porter par le moment présent, tout en douceur. Accepter d’être surpris, ne pas
                        savoir à quoi s’attendre … Accepter de lâcher-prise.
                        Laissez-vous tenter !<br />
                        <span className="italic">La durée du soin est de 60mn environ (prévoir 1h30). 80€</span>
                    </p>
                    <br />
                    <a id="VapaKaia"></a>
                    <h1 className="text-3xl font-heading tracking-normal text-dark pb-4 relative before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-dark after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[255px] after:bg-dark">
                        Vapa Kaìa Energy
                    </h1>
                    <p className="mt-10 text-justify">
                        Le <span className="font-semibold">Vapa Kaìa Energy</span> est un doux mélange de
                        <span className="font-semibold"> massage habillé </span>avec des pressions sur le
                        corps, combiné aux sons et vibrations des bols chantants et au soin énergétique.<br />
                        La particularité de ce soin est qu&#39;une partie se fait avec appositions de mes mains et l’autre
                        partie, avec les mains de la personne en soin sur deux positions précise. Vous êtes ainsi
                        invités à être acteur de votre soin par <span className="font-semibold"> le toucher apaisant </span>
                        pendant que la magie des sons et des vibrations opère.<br /><br />
                        C’est un bel équilibre entre détente et revitalisation du corps, aux bienfaits multiples.<br /><br />
                        La seule manière de découvrir ce soin énergétique et sonore très complet, rempli de douceur,
                        c’est de le vivre !<br />
                        <span className="italic">La durée du soin est de 45mn environ (prévoir 1h15). 65€</span>
                    </p>
                    <br />
                    <a id="MED"></a>
                    <h1 className="text-3xl font-heading tracking-normal text-dark pb-4 relative before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-dark after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[255px] after:bg-dark">
                        Massage énergétique du dos
                    </h1>
                    <p className="mt-10 text-justify">

                        Le <span className="font-semibold">massage énergétique du dos</span> s’inspire des techniques de massages utilisées dans les 5 continents, et fait appel à l’énergie
                        du Reiki. Il vous apportera du bien-être, de la détente, de la relaxation et vous aidera à aller vers le lâcher-prise.
                        <br />
                        Vous avez peu de temps ?
                        <br />
                        Vous souhaitez voir à quoi ressemble un massage énergétique ? Celui-ci est une belle initiation, il est fait pour vous.
                        <br />
                        <span className="italic">La durée du soin est de 40mn environ (prévoir 1h00). 45€</span>
                    </p>
                    <br />
                </div>
            </section>
        </div>
    );
};

export default Massages;
