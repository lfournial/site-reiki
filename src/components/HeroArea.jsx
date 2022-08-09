import Shape from "./Shape";
import { useState } from "react";
import { GiPalmTree } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";

const heroBg = "/images/hero-bg.jpg";

const HeroArea = () => {

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <section
                id="hero"
                style={{ backgroundImage: `url(${heroBg})` }}
                className="relative bg-cover bg-no-repeat bg-center-top h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center"
            >
                <div className="container">
                    <div className="mt-8 font-light">
                        <h1 className="font-light text-3xl sm:text-[45px] md:text-[55px] leading-none">Ô Soin de Soi</h1>
                        <h2 className="font-light text-md sm:text-lg tracking-4 mt-2 sm:mt-4">Le Reiki au service du mieux-être !</h2>
                    </div>
                </div>

                <Shape className="hidden md:block" />
            </section>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-xs">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl font-semibold">
                                <GiPalmTree className="inline text-dark-400 mr-2" />C'est les vacances <GiPalmTree className="inline text-dark-400 mr-2" />
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-4 flex-auto">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                Je vous retrouve à compter du 7 septembre.
                                <br />
                                D'ici là vous pouvez prendre rendez-vous par mail
                                <br /><BiMailSend className="inline text-dark-600 mr-2" /> osoindesoi.rdv@gmail.com
                                <br /> <br />Passez un bel été.
                            </p>
                        </div>
                        {/*footer*/}

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
    );
};

export default HeroArea;
