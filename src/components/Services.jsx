import Service from "./Service";
import services from "../data/services.json";
import Shape from "./Shape";
import SectionTitle from "./SectionTitle";
import { FiAlertCircle } from "react-icons/fi";

const Services = () => {
    return (
        <section className="service-area relative lg:pt-[100px] pb-[100px] lg:pb-[200px]" id="services">
            <div className="container">
                <SectionTitle
                    title="Prestations et tarifs"
                    className="lg:hidden"
                />
                <div className="mt-5 sm:mt-10 md:mt-0">
                    <SectionTitle
                        title="Prestations et tarifs"
                        className="hidden lg:block"
                    />

                    <div className="text-base text-white bg-red-400 px-2 mb-5">
                        <FiAlertCircle className="inline text-dark-600 mr-2" />
                        Les séances proposées ne remplacent pas un avis médical. Aucun avis médical ne sera donné lors des séances.
                        Ces techniques sont complémentaires à la médecine allopathique, mais ne remplacent en aucun cas les traitements.
                        <br />
                        Les soins proposés sont en outre  dénués de toutes connotations érotiques et sexuelles.
                        <FiAlertCircle className="inline text-dark-600 ml-2" />
                    </div>
                    <div className="md:grid md:grid-cols-3" >
                        {services.map(service => (
                            <Service
                                key={service.id}
                                desc={service.desc}
                                title={service.title}
                                thumb={`/images/${service.icon}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Shape fillColor="#F9FAFB" />
        </section>
    );
};

export default Services;
