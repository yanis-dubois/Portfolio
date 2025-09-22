import {ProjectsPage} from "../projects.jsx"
import {Git, PDF} from "../../../utils/staticUI.jsx"
import {Body} from "./body.jsx"

export default function Home() {
  return (
    <ProjectsPage emoji="📚" title="Analyse de bibliothèque">
      <Body/>
      <div className="grid gap-6 md:grid-cols-2">
        <Git url="https://github.com/yanis-dubois/BookShelfAnalyse"/>
        <PDF url="https://drive.google.com/file/d/1A0NbOEAv3ft5B_GCygAvZErcZi5LReBw/view?usp=share_link"/>
      </div>
    </ProjectsPage>
  );
}
