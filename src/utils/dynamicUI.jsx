"use client";

import { NavLinks } from "./staticUI.jsx"
import { useEffect, useState, useRef } from "react";

export function ProjectsNav() {
  const [isOpen, setIsOpen] = useState(false);
  const titleRef = useRef(null);
  const navRef = useRef(null);

  // open & close nav logic
  useEffect(() => {
    function handleClick(event) {
      if (titleRef.current && titleRef.current.contains(event.target)) {
        setIsOpen((prev) => !prev);
      }
      else if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div>

      {/* title */}
      <div ref={titleRef}>
        <span>⚙️ </span>
        <span className={`${isOpen ? "text-light" : ""}`}>Autres projets</span>
      </div>

      {/* links */}
      <nav ref={navRef} className={`absolute right-0 top-0 mt-[2.5rem]
        bg-dark-deep/70 backdrop-blur-sm border-b border-l border-light-soft/10 shadow-md 
        p-2 pb-3 space-y-2 z-10
        transition-all duration-300 ease-out transform
        ${isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
        }
        `}
      >
        <NavLinks url={"/projects/materialSimulation"} emoji="🦋" title="Simulation de matériaux bio-inspirés"/>
        <NavLinks url={"/projects/AR"} emoji="👓" title="Visualisation d’objets 3D en réalité mixte"/>
        <NavLinks url={"/projects/depthImageProcessing"} emoji="📷" title="Traitement d’images optiques 2.5D"/>
        <NavLinks url={"/projects/bookshelfAnalysis"} emoji="📚" title="Analyse de bibliothèque"/>
        <NavLinks url={"/projects/minecraftShader"} emoji="🌄" title="Développement de Shader"/>
        <NavLinks url={"/projects/videoGame"} emoji="🎮" title="Création de jeu vidéo"/>
      </nav>

    </div>
  );
}

export function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);

  // select all titles
  useEffect(() => {

    const elements = Array.from(document.querySelectorAll("h1, h2, h3")).map(
      (el) => ({
        id: el.id || el.textContent.replace(/\s+/g, "-").toLowerCase(),
        text: el.textContent,
        level: el.tagName.toLowerCase(),
      })
    );

    // add missing ids
    elements.forEach(({ id }, i) => {
      const el = document.getElementById(id);
      if (!el) {
        document.querySelectorAll("h1, h2, h3")[i].id = id;
      }
    });

    setHeadings(elements);
  }, []);

  // add a title tracker
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );
  
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, [headings]);

  return (
    <aside className="hidden lg:flex sticky top-46 h-[calc(100vh-20rem)] items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

        {/* hidden */}
        <div className={`max-h-full overflow-hidden px-2 space-y-3 pl-6
          transition-opacity duration-300 ease-out
          ${isOpen 
            ? "opacity-0"
            : "opacity-100"
          }
          `}
        >
          {headings.map((h, idx) => (
            <span
              key={idx}
              className={`block min-h-0.5 rounded-full opacity-50 ${
                activeId === h.id ? "bg-light" : "bg-light-dark"
              }
              ${
                h.level === "h1"
                  ? "w-6"
                  : h.level === "h2"
                  ? "w-4"
                  : "w-2"
              }`}
            />

          ))}
        </div>

        {/* showed */}
        <nav className={`max-h-[70vh] w-[250px] fixed top-1/2 -translate-y-1/2 overflow-y-auto 
          bg-dark border border-light-soft/10 rounded-2xl shadow-md 
          ml-4 p-2 pt-4 pb-4 text-sm space-y-2 z-10
          transition-all duration-300 ease-out transform
          ${isOpen 
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 pointer-events-none"
          }
          `}
        >
          <ul className="space-y-1">
            {headings.map((h) => (
              <a key={h.id} href={`#${h.id}`}>
                <li
                  className={`px-2 py-0.25 text-light-dark hover:bg-dark-soft rounded-md
                  ${
                    activeId === h.id ? "text-primary hover:text-primary-light" : "text-light-soft hover:text-light"
                  }
                  ${
                    h.level === "h1"
                      ? "ml-0"
                      : h.level === "h2"
                      ? "ml-2.5"
                      : "ml-5"
                  }`}
                >
                  {h.text}
                </li>
              </a>
            ))}
          </ul>
        </nav>

    </aside>
  );
}
