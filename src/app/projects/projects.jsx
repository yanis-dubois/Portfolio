import {Section, Footer, SectionBackground, SectionBody} from "../../utils/staticUI.jsx"
import {TableOfContents} from "../../utils/dynamicUI.jsx"
import Link from "next/link";
import "./projects.css";

export function ProjectsPage({ children, emoji, title }) {
  return (
    <div className="min-h-screen text-light">

      {/* Nav */}
      {/* --------------------------------------------------------------------------- */}
      <nav className="bg-dark-deep/70 backdrop-blur-sm border-b border-light-soft/10 fixed w-full p-2 pl-4 text-light-soft z-50">
        <Link href={"/"}>
          🏠 <span className="hover:underline hover:text-light">Accueil</span>
        </Link>
        <span className="text-light-dark"> / </span>
        <Link href={""}>
          <span className="text-light-dark">{emoji} </span>
          <span className="hover:underline hover:text-light">{title}</span>
        </Link>
      </nav>

      {/* Header */}
      {/* --------------------------------------------------------------------------- */}
      <header className="bg-dark-soft text-light pt-8">
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
