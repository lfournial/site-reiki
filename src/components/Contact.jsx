import SectionTitle from "./SectionTitle";
import { BiMailSend } from "react-icons/bi";
import { FiSmartphone } from "react-icons/fi";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Contact = () => {
    return (
        <section className="py-[100px]" id="contact">
            <div className="container">
                <SectionTitle
                    title="Contact"
                />

                <div className="grid grid-cols-12 md:grid-cols-12">
                    <div className="col-span-12 gap-10 justify-center">
                        <div className="text-base pb-3">
                            <BiMailSend className="inline text-dark-600 mr-2" />
                            osoindesoi.rdv@gmail.com
                        </div>
                        <div>
                            <div className="text-base pt-3">
                                <FiSmartphone className="inline text-dark-600 mr-2" />
                                +(33) 0765543936
                            </div>
                        </div>
                        <div>
                            <div className="text-base pt-6">
                                <a target="_blank" href="https://www.facebook.com/osoindesoiseclin" >
                                    <BsFacebook className="inline text-dark-600 mr-2" />
                                    Retrouvez moi sur Facebook
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="text-base pt-6">
                                <a target="_blank" href="https://www.instagram.com/o_soin_de_soi/" >
                                    <BsInstagram className="inline text-dark-600 mr-2" />
                                    Retrouvez moi sur Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;
