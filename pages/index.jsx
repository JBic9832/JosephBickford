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
          <a href="" target="_blank">
            <img className="w-6 h-6" src="/icons/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="lg:py-24 pt-24 flex flex-col gap-4 lg:w-1/2">
        {/* about */}
        <div id="about" className="mb-16">
          <h1 className="font-bold text-sky-500">Background:</h1>
          <p>
            My programming journey started in 2016 when I was a freshman in
            highschool. I was watching a{" "}
            <a
              className="text-sky-500 underline"
              href="https://www.youtube.com/@Node"
            >
              Node
            </a>{" "}
            video and was so fascinated by the fact that Sam was building a VR
            game in Unity to show to his friends. For the next year I sat in my
            room everyday and watched every tutorial I possibly could about
            Unity. In my last 3 years of highschool I mostly experimented with
            UIKit for IOS, Python, and Java.
          </p>
          <h1 className="font-bold text-sky-500 mt-4">Today:</h1>
          <p>
            Today I am driven by goals to build an amazing career and give the
            best life I possibly can to my fiancé and future kids. I am also
            driven to serve people. I have done some freelancing jobs which
            mostly consisted of consulting work to help people come up with
            technical solutions for their business needs/problems. Since my
            years in highschool I have found a passion for web developement;
            although I am fairly agnostic when it comes to language/framework
            and am just excited to learn and create.
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
