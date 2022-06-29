import Logo from "./Logo";
import Link from 'next/link';
import { animateScroll } from "react-scroll";
import { MdConstruction } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdSchool } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-gray-50 pt-10 md:pt-15 lg:pt-5 pb-5 relative">
            <div className="container">
                <div className="text-center lg:text-left lg:flex justify-between items-center">
                    <Logo variant="dark" />

                    {/* Copyright */}
                    <p>
                        &copy; Virginie {new Date().getFullYear()}
                    </p>
                    <p>
                        {/*<AiFillHeart className="inline text-dark-600" />*/} <MdConstruction className="inline text-dark-600" />
                        <a href="https://themeforest.net/item/rokstar-react-portfolio-template-using-nextjs/37432026">
                            Thème Rokstar </a>
                    </p>
                    <p>
                        <IoMdSchool className="inline text-dark-600" />
                        <Link href="/legal-page">
                            <a target="_blank" rel="noopener noreferrer" className='link-item'>
                                &nbsp;Mentions légales
                            </a>
                        </Link>
                    </p>
                    {/* <p>
                        &copy; Inpired by Rokstar {new Date().getFullYear()} theme, Made with <AiFillHeart
                            className="inline text-dark-600" /> By Divergent Studio.
                    </p>*/}
                </div>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={() => animateScroll.scrollToTop()}
                className="absolute left-1/2 -top-[35px] -translate-x-1/2 bg-white w-14 md:w-[70px] h-14 md:h-[70px] rounded-full text-center shadow-scroll-top"
            >
                <IoIosArrowUp className="inline text-2xl" />
            </button>
        </footer>
    );
};

export default Footer;
