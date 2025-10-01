"use client";

import { NavLinks } from "./staticUI.jsx"
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import {StaticImage} from "./media.jsx";

export function Portal({ children, name }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const portalRoot = document.getElementById(`${name}-portal-root`);
  return portalRoot ? createPortal(children, portalRoot) : null;
}

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
      <div ref={titleRef} className={`cursor-pointer flex justify-center ${isOpen ? "text-light" : "text-light-soft"}`}>
        <p>⚙️ <span className={`pr-1`}>Autres projets</span></p>
        <div className={`transition-transform duration-300 ease-out ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}>
          ▸
        </div>
      </div>

      {/* links */}
      <Portal name="nav">
        <div>
          <nav ref={navRef} className={`fixed right-0 top-0 mt-[2.5rem]
          bg-dark-deep/70 backdrop-blur-sm border-b border-l border-light-soft/10 shadow-md 
          p-2 pb-3 space-y-2 z-5
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
      </Portal>
    </div>
  );
}

export function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(0);

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
          ml-4 p-2 pt-4 pb-4 text-sm space-y-2 z-1
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

export function ImageComparison({ image, imageOff, imageOn }) {
  const imageOFF = image ? `${image}OFF.png` : imageOff;
  const imageON = image ? `${image}ON.png` : imageOn;

  const [position, setPosition] = useState(50); // % visible
  const [isDragging, setIsDragging] = useState(false);

  const handleDown = () => setIsDragging(true);
  const handleUp = () => setIsDragging(false);

  // const handleMove = (event) => {
  //   if (!isDragging) return;
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   const x = event.clientX - rect.left;
  //   const percent = (x / rect.width) * 100;
  //   setPosition(Math.min(Math.max(percent, 0), 100));
  // };

  const handleMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();

    let clientX;
    if (event.type.startsWith("touch")) {
      clientX = event.touches[0]?.clientX; // doigt principal
    } else {
      clientX = event.clientX; // souris
    }

    if (clientX == null) return;
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.min(Math.max(percent, 0), 100));
  };

  return (
    <div
      className="relative w-full aspect-video"
      onMouseMove={handleMove}
      onMouseUp={handleUp}
      onTouchMove={handleMove}
      onTouchEnd={handleUp}
    >
      {/* after image */}
      <StaticImage 
        src={imageON}
        alt="on" 
        width={1728} 
        height={1080} 
        className="fullsize absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
      />

      {/* before image  */}
      <StaticImage
        src={imageOFF}
        alt="off"
        width={1728} 
        height={1080} 
        className="fullsize absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />

      {/* slider ligne */}
      <div
        className="absolute top-0 h-full w-0.75 bg-light shadow-md/100"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />

      {/* slider button */}
      <div
        className="absolute top-1/2 w-14 h-14 font-mono text-2xl text-light text-center rounded-full bg-light-dark/70 backdrop-blur-sm border-2 border-light shadow-md/50 select-none cursor-col-resize active:cursor-grabbing flex items-center justify-center"
        style={{
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
        }}
        onMouseDown={handleDown}
        onTouchStart={handleDown}
      >
        <p>↔</p>
      </div>
    </div>
  );
}
