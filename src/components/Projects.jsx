import { PROJECTS } from "../constants";

const Projects = ({ theme }) => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex  lg:justify-center">
                        {/* Project Box */}
                        <div className="w-full max-w-xl rounded-lg border border-neutral-700 p-6 shadow-md lg:w-3/4 lg:flex">
                            {/* Project Image */}
                            <div className="w-full lg:w-1/4  justify-center lg:justify-start mb-6 lg:mb-0">
                                <img src={project.image} width={150} height={150} alt={project.title} className="rounded" />
                            </div>
                            {/* Project Details */}
                            <div className="w-full lg:w-3/4 lg:ml-6">
                                <h6 className="mb-2 font-semibold">{project.title}</h6>
                                <p className="mb-1 text-neutral-400">{project.description}</p>
                                <div className={`mr-2 mb-2 inline-block rounded px-2 py-1 text-sm font-medium ${
                                    theme === 'dark' 
                                        ? 'bg-neutral-900 text-purple-900' 
                                        : 'bg-neutral-300 text-purple-500'
                                    }`}>
                                <a href={project.link}>
                                    <p>Project's Github</p>
                                </a>
                                </div>
                                <div>
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`mr-2 mb-2 inline-block rounded px-2 py-1 text-sm font-medium ${
                                                theme === 'dark' 
                                                    ? 'bg-neutral-900 text-purple-900' 
                                                    : 'bg-neutral-300 text-purple-500'
                                            }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
