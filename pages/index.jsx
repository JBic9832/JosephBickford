import { promises as fs } from "fs";
import path from "path";
import Head from "next/head";

export const getStaticProps = async (context) => {
    const jsonDir = path.join(process.cwd(), "json");
    const contents = await fs.readFile(jsonDir + "/projects.json", "utf8");
    const projectJson = JSON.parse(contents);
    return { props: { projects: projectJson } };
};

export default function Home({ projects }) {
    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        const y =
            elementId == "about"
                ? 0
                : element.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <div className="lg:flex lg:justify-between gap-6">
            <Head>
                <title>Joseph Bickford</title>
                <link rel="icon" href="/me.png" type="img/png" sizes="any" />
            </Head>
            {/* Hero */}
            <div className="flex flex-col lg:py-24 lg:w-1/2 lg:mb-0 lg:sticky lg:top-0 lg:max-h-screen">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-3xl  text-sky-500">
                            Joseph Bickford
                        </h1>
                        <h1 className="font-semibold mt-1">Software Engineer</h1>
                        <p className="max-w-xs">
                            I love to build software and expand my knowledge around
                            technology.
                        </p>
                    </div>
                    <div className="hidden lg:flex flex-col items-start mt-16 gap-2 self-start">
                        <button
                            onClick={() => scrollToElement("about")}
                            className="text-sky-500"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToElement("projects")}
                            className="text-sky-500"
                        >
                            Projects
                        </button>
                    </div>
                </div>
                <div className="flex justify-self-end-end gap-4 mt-auto">
                    <a href="https://github.com/JBic9832" target="_blank">
                        <img
                            className="w-6 h-6"
                            src="/icons/github-mark-white.svg"
                            alt=""
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joseph-bickford-9763a2226/"
                        target="_blank"
                    >
                        <img className="w-6 h-6" src="/icons/linkedin.svg" alt="" />
                    </a>
                </div>
            </div>
            <div className="lg:py-24 pt-24 flex flex-col gap-4 lg:w-1/2">
                {/* about */}
                <div id="about" className="mb-16">
                    <h1 className="font-bold text-sky-500">Background:</h1>
                    <p>
                        Hi, I’m Joseph Bickford — a Computer Science student with a focus on software engineering.
                        I began coding at 14, building games in Unity, and that early curiosity quickly grew into a passion for creating things with code. Over the years,
                        I’ve explored a wide range of programming—from 3D graphics and game development to full-stack web applications. I’ve found my niche in building 3D graphics applications and intend to follow that path into a career.
                        My goal is to build interactive applications that will see real users and have an impact.
                    </p>
                    <h1 className="font-bold text-sky-500 mt-4">Skills:</h1>
                    <p>
                        I have experience with a range of programming languages, including C++, JavaScript, TypeScript, and Go.
                        On the technology side, I’m familiar with tools and platforms like Google Firebase, Docker, Git, WebSockets for real-time applications, and both SQL and NoSQL databases.
                        I’m always working to grow my skill set—continuous learning is my top priority.
                    </p>
                </div>
                {/* projects */}
                <div id="projects">
                    <h1 className="text-3xl mb-4">Projects</h1>
                    <div>
                        {projects.map((project, index) => (
                            <div key={index} className="mb-7">
                                <img
                                    className="w-2/3 h-auto mb-2"
                                    src={project.image}
                                    alt={project.image}
                                />
                                <div className="flex flex-col">
                                    <h1 className="text-sky-500 text-lg font-semibold">
                                        {project.name}
                                    </h1>
                                    <p className="text-sm">{project.description}</p>
                                    <div className="flex flex-col mt-2 gap-2">
                                        <a
                                            className="flex items-center text-sm text-sky-500"
                                            href={project.github_link}
                                            target="_blank"
                                        >
                                            Code here{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.8}
                                                stroke="currentColor"
                                                className="ml-1 w-3 h-3"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                />
                                            </svg>
                                        </a>
                                        {project.deployed_link !== "" && (
                                            <a
                                                className="text-sm flex items-center text-sky-500"
                                                href={project.deployed_link}
                                                target="_blank"
                                            >
                                                Deployed here{" "}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.8}
                                                    stroke="currentColor"
                                                    className="ml-1 w-3 h-3"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
