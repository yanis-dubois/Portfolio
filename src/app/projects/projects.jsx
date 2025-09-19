import {Section, Footer} from "../../utils/staticUI.jsx"
import {TableOfContents} from "../../utils/dynamicUI.jsx"
import "./projects.css";

export function ProjectsPage({ children }) {
  return (
    <div className="min-h-screen text-light">

      {/* Main */}
      {/* --------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------- */}
      <main>
        <TableOfContents/>
        <Section background="bg-dark text-light-soft" body="project">
          {children}
        </Section>
      </main>

      {/* Footer */}
      {/* --------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------- */}
      <Footer/>
    </div>
  );
}
