import {ProjectsPage} from "../projects.jsx"
import {Git} from "../../../utils/staticUI.jsx"
import {Body} from "./body.jsx"

export default function Home() {
  return (
    <ProjectsPage emoji="🌄" title="Développement de Shader">
      <Body/>
      <Git url="https://github.com/yanis-dubois/BloomingLightShader"/>
    </ProjectsPage>
  );
}
