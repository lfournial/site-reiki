import Shape from "./Shape";

const heroBg = "/images/hero-bg.jpg";

const HeroArea = () => {
    return (
        <section
            id="hero"
            style={{ backgroundImage: `url(${heroBg})` }}
            className="relative bg-cover bg-no-repeat bg-center-top h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center"
        >
            <div className="container">
                <div className="mt-8 font-light">
                    <h1 className="font-light text-3xl sm:text-[45px] md:text-[55px] leading-none">Ô Soin de soi</h1>
                    <h2 className="font-light text-md sm:text-lg tracking-4 mt-2 sm:mt-4">Le Reiki au service du mieux-être !</h2>
                </div>
            </div>

            <Shape className="hidden md:block" />
        </section>
    );
};

export default HeroArea;
