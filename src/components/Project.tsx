import Navbar from './Navbar';
import Links from './Links';
import { CodeIcon } from '@heroicons/react/solid';
import { ScrollRestoration } from 'react-router-dom';

type ProjectPros = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    link: string;
};

const Project = ({
    title,
    subtitle,
    description,
    image,
    link,
}: ProjectPros) => {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <section
                id="projects"
                className="text-gray-400 bg-gray-900 body-font"
            >
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full">
                        <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            {title}
                        </h1>
                        <p className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                            {subtitle}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img
                            alt="project image "
                            className="px-5 py-10"
                            src={image}
                        />
                        <a
                            href={link}
                            className="flex-none max-w-max text-white bg-lime border-0 py-2 px-6 focus:outline-none hover:bg-opacity-75 rounded text-lg"
                        >
                            {`Visit ${title}`}
                        </a>

                        <p className="leading-relaxed px-5 py-10">
                            {description}
                        </p>
                    </div>
                </div>
            </section>
            <Links />
            <ScrollRestoration />
        </main>
    );
};

export default Project;
