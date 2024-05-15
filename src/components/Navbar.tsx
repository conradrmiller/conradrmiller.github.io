const Navbar = () => {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className=" md:ml-3 text-xl">
                        Conrad Miller
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a
                        href="#projects"
                        className="mx-5 md:mr-5 md:ml-0 hover:text-white"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="mx-5 md:mr-5 md:ml-0 hover:text-white"
                    >
                        Skills
                    </a>
                    <a
                        href="https://www.conradrmiller.com/hosted-assets/Conrad-Miller-Resume.pdf"
                        className="mx-5 md:mr-5 md:ml-0 hover:text-white"
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
