import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-10">
            <h1 className="my-10 text-center text-4xl">Socials</h1>
            <div>
                <div className="rounded-2m border-neutral-300 p-2 flex flex-wrap items-center justify-center gap-4">
                    <a href="https://github.com/PierreKoding" className="text-3xl">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/pierre-sitorus-734776292/" className="text-3xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://mail.google.com/mail/u/pierre.sitoru@binus.ac.id/#compose/" className="text-3xl">
                        <BiLogoGmail />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;