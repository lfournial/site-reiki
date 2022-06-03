import TextField from "./TextField";
import { MdArrowRightAlt } from "react-icons/md";

const ContactForm = ({ className }) => {
    return (
        <form action="/" className={className ?? ""}>
            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                <TextField
                    placeholder="Name Here*"
                />
                <TextField
                    placeholder="Email Here*"
                />
            </div>
            <TextField
                rows={4}
                className="mt-5"
                multiline={true}
                placeholder="Message Here*"
            />

            <div className="text-center md:text-right mt-5">
                <button className="bg-dark text-white text-[12px] px-6 py-3 group">
                    Envoyer
                    <MdArrowRightAlt className="inline text-xl ml-1 duration-400 group-hover:translate-x-2" />
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
