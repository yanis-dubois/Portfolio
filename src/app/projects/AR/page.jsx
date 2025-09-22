import {ProjectsPage} from "../projects.jsx"
import {Git, PDF} from "../../../utils/staticUI.jsx"
import {Body} from "./body.jsx"

export default function Home() {
  return (
    <ProjectsPage emoji="👓" title="Visualisation d’objets 3D en réalité mixte">
      <Body/>
      <div className="grid gap-6 md:grid-cols-3">
        <Git url="https://github.com/yanis-dubois/XR-Object-Visualizer" title="Accédez au code source OBJ →"/>
        <Git url="https://github.com/Moustakick/OpenIGTLink-Client-Unity-XR" title="Accédez au code source Slicer3D →"/>
        <PDF url="https://drive.google.com/file/d/1iwqDnNQyiNqmzrPcLVGfDjR-3pdWPrY9/view?usp=share_link"/>
      </div>
    </ProjectsPage>
  );
}
