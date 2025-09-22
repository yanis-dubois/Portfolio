import {Section, Footer, SectionBackground, SectionBody} from "../../utils/staticUI.jsx"
import {ProjectsNav, TableOfContents} from "../../utils/dynamicUI.jsx"
import Link from "next/link";
import "./projects.css";

export function ProjectsPage({ children, emoji, title }) {
  return (
    <div className="min-h-screen text-light">

      {/* Nav */}
      {/* --------------------------------------------------------------------------- */}
      <nav className="bg-dark-deep/70 backdrop-blur-sm border-b border-light-soft/10 sticky top-0 w-full p-2 text-light-soft z-50 flex justify-between">
        <div className="pl-2">
          <Link href={"/"}>
            🏠 <span className="hover:underline hover:text-light">Accueil</span>
          </Link>
          <span className="text-light-dark"> / </span>
          <Link href={""}>
            <span>{emoji} </span>
            <span className="hover:underline hover:text-light">{title}</span>
          </Link>
        </div>
        <div className="pr-2">
          <ProjectsNav/>
        </div>
      </nav>

      {/* Header */}
      {/* --------------------------------------------------------------------------- */}
      <header className="bg-dark-soft text-light">
        <Section>
          <h1 className="text-5xl font-bold text-center">{emoji} {title}</h1>
        </Section>
      </header>

      {/* Main */}
      {/* --------------------------------------------------------------------------- */}
      <main>
        <SectionBackground background="bg-dark text-light-soft relative flex">
          <TableOfContents/>
          <SectionBody body="project">
            {children}
          </SectionBody>
        </SectionBackground>
      </main>

      {/* Footer */}
      {/* --------------------------------------------------------------------------- */}
      <Footer/>
    </div>
  );
}
