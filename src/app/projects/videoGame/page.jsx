import {ProjectsPage} from "../projects.jsx"
import {Links, Git} from "../../../utils/staticUI.jsx"
import {Body} from "./body.jsx"

export default function Home() {
  return (
    <ProjectsPage emoji="🎮" title="Création de jeu vidéo">
      <Body/>
      <div className="grid gap-6 md:grid-cols-2">
        <Git url="https://github.com/Moustakick/GameJam-Tension"/>
        <Links emoji="👾" title="Cliquez ici pour essayer →" url="https://moustakick.itch.io/chrono-criminal"/>
      </div>
    </ProjectsPage>
  );
}
