import {ProjectsPage} from "../projects.jsx"
import {Git, PDF} from "../../../utils/staticUI.jsx"
import {Body} from "./body.jsx"

export default function Home() {
  return (
    <ProjectsPage emoji="🦋" title="Simulation de matériaux bio-inspirés">
      <Body/>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Git url="https://gitlab.com/cgforbiology/ScalesInstantiator"/>
        <PDF url="https://drive.google.com/file/d/1zqcUIODyrfzguURvbwEm8KH20yEnJ6D2/view?usp=share_link"/>
      </div>
    </ProjectsPage>
  );
}
