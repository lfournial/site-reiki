import SectionTitle from "./SectionTitle";
import { BiMailSend } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";

const Contact = () => {
    return (
        <section className="py-[100px]" id="contact">
            <div className="container">
                <SectionTitle
                    title="Contact"
                />

                <div className="grid grid-cols-12 md:grid-cols-12">
                    <div className="col-span-12 gap-10 flex justify-center">
                        <div className="text-base">
                            <BiMailSend className="inline text-dark-600 mr-2" />
                            osoindesoi.rdv@gmail.com
                        </div>
                        <div>
                            <div className="text-base">
                                <FiSmartphone className="inline text-dark-600 mr-2" />
                                +(33) 0765543936
                            </div>
                        </div>
                        {/*<div>
                            <div className="text-base">
                                <a target="_blank" href="https://www.facebook.com/virginie.fournial.3" ><BsFacebook className="inline text-dark-600 mr-2" /></a>
                            </div>
                        </div>
    */}

                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;
