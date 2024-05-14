import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
    return (
        <section id="links">
            <div className="container mx-auto text-5xl text-center p-8 ">
                <a
                    className="no-underline m-4"
                    href="https://github.com/conradrmiller"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="hover:text-opacity-75 text-lime"
                    />
                </a>
                <a
                    className="no-underline m-4"
                    href="https://www.linkedin.com/in/conrad-miller-aa8559180"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="hover:text-opacity-75 text-lime"
                    />
                </a>
            </div>
        </section>
    );
};

export default Links;
