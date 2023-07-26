"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);
  return (
    <nav className="flex flex-col lg:py-24 lg:w-1/2 lg:mb-0 lg:sticky lg:top-0 lg:max-h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl  text-sky-500">
            Joseph Bickford
          </h1>
          <h1 className="font-semibold mt-1">Software Engineer</h1>
          <p className="max-w-xs">
            I love to build software and expand my knowledge around technology.
          </p>
          <a href="https://github.com/JBic9832">
            <p className="text-sky-500">Github</p>
          </a>
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
    </nav>
  );
}
