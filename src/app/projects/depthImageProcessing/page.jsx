import {ProjectsPage} from "../projects.jsx"
import {Git, PDF} from "../../../utils/staticUI.jsx"
import {Body} from "./body.jsx"

export default function Home() {
  return (
    <ProjectsPage emoji="📷" title="Traitement d’images optiques 2.5D">
      <Body/>
      <div className="grid gap-6 md:grid-cols-2">
        <Git url="https://github.com/Moustakick/Depth-Map-POC"/>
        <PDF url="https://drive.google.com/file/d/1BdeK0goqTmyTdKlJyG5KzTgSa1N6fRAI/view?usp=sharing"/>
      </div>
    </ProjectsPage>
  );
}
