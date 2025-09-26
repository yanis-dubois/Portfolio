import {Section, Card, Studies, Projects, Links, Footer, Background} from "../utils/staticUI.jsx"
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen text-light text-shadow-md">

      {/* Header */}
      {/* --------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------- */}
      <header>
        <Background 
          src="/images/background/monolyth.png" 
          parentStyle="text-light h-screen flex items-center justify-center" 
          childStyle="flex flex-col items-center text-light text-center text-shadow-md/50"
        >
          <h1 className="text-8xl font-bold">Yanis Dubois</h1>
          <p className="mt-4 text-3xl">Développeur spécialisé dans le traitement, l’analyse, et la synthèse d’images et de sons</p>
        </Background>
      </header>

      {/* Main */}
      {/* --------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------- */}
      <main>

        {/* Introduction */}
        {/* --------------------------------------------------------------------------- */}
        <Section background="bg-dark text-light-soft" body="flex flex-col items-center justify-center">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            {/* Présentation */}
            <div className="md:col-span-3">
              <h2 className="text-light text-4xl font-bold mb-4 mt-4 text-shadow-md/50">👤 Présentation</h2>
              <p className="mb-4 text-justify">
                Diplômé d’un <span className="text-primary-light font-bold">master en informatique</span>, je suis fasciné par les différentes applications que l’on peut donner aux mathématiques. C’est l’aspect <span className="text-light">concret</span> de l’informatique que j’aime, cette capacité à transformer des concepts abstraits en outils <span className="text-light">efficaces</span> et <span className="text-light">fonctionnels</span>.
              </p>
              <p className="mb-4 text-justify">
                J’apprécie la manipulation de structures de données et d’objets mathématiques <span className="text-primary-light font-bold">originaux</span> tels que dans la <span className="text-light">théorie des graphes</span>, la manipulation de <span className="text-light">maillages</span>, ou encore la conception d’algorithmes <span className="text-light">distribués</span> ou <span className="text-light">parallèles</span>. 
              </p>
              <p className="mb-4 text-justify">
                Ma <span className="text-light">spécialisation de master</span> m’a permis de me former en profondeur à des domaines qui me passionnent aujourd’hui : 
                la <span className="italic text-primary-light">computer graphics</span> – au travers du rendu réaliste ou expressif, via <span className="text-light italic">rasterisation</span> pour les rendus temps réel ou <span className="text-light italic">pathtracing</span> pour les rendus plus précis ; 
                et la <span className="italic text-primary-light">computer vision</span> – via le traitement et l’analyse de signaux, notamment avec des méthodes de <span className="text-light italic">machine learning</span>.
              </p>
            </div>

            {/* Formation */}
            <Card title="🎓 Formation" body="max-w-86 mx-auto md:col-span-2" titleStyle="text-center md:text-left">
              <Studies 
                title="Master informatique"
                school="Université de Bordeaux"
                city="Talence"
                date="2022 - 2024"
              />
              <Studies 
                title="Licence informatique"
                school="Université de Bordeaux"
                city="Talence"
                date="2021 - 2022"
              />
              <Studies 
                title="DUT informatique"
                school="Université de Bordeaux"
                city="Gradignan"
                date="2019 - 2021"
              />
              <Studies 
                title="BAC S" 
                school="Lycée Jean Monnet"
                city="Blanquefort"
                date="2016 - 2019"
              />
            </Card>
          </div>
        </Section>

        {/* Compétences */}
        {/* --------------------------------------------------------------------------- */}
        <Background 
          src="/images/background/competences.png" 
          parentStyle="min-h-[80vh] flex flex-col items-center justify-center" 
          childStyle=""
        >
          <Section>
            <h1 className="text-center text-light text-4xl font-bold mb-12 text-shadow-md/50">⚙️ Compétences</h1>
            <div className="grid gap-6 lg:grid-cols-3">

              <Card title="🛠️ Techniques" variant="translucent" body="max-w-96 mx-auto">
                <p className="mb-2">
                  <span className="text-primary-light font-bold">Langages, bibliothèques et API</span><br/>
                  <span className="text-light">Algorithme :</span> C, C++, C#, Java, Python, OpenGL.<br/>
                  <span className="text-light">Web :</span> HTML, CSS, JavaScript, React.<br/>
                  <span className="text-light">Base de donnée :</span> SQL.<br/>
                  <span className="text-light">Modélisation :</span> UML.
                </p>
                <p className="">
                  <span className="text-primary-light font-bold">Environnements</span><br/>
                  <span className="text-light">Framework :</span> VS Code, IntelliJ, Anaconda, Android Studio, Visual Studio.<br/>
                  <span className="text-light">Outils de gestion de versions :</span> Git.<br/>
                  <span className="text-light">Moteurs de rendus :</span> Godot, Unity, Blender.<br/>
                </p>
              </Card>

              <Card title="🎯 Domaines d’application" variant="translucent" body="max-w-96 mx-auto">
                <p className="mb-2">
                  <span className="text-primary-light font-bold">Synthèse d’image :</span> path-tracing, rastérisation, fonctions d’apparences (BSDF), modélisation géométrique, pipeline graphique.
                </p>
                <p className="mb-2">
                  <span className="text-primary-light font-bold">Traitement d’image :</span> outils statistiques, filtres fréquentiels, transformations morphologiques, convolution, espaces colorimétriques.
                </p>
                <p className="">
                  <span className="text-primary-light font-bold">Intelligence Artificielle :</span> analyse, traitement et génération de données; explicabilité et analyse qualitative de modèles.
                </p>
              </Card>

              <Card title="📖 Académiques" variant="translucent" body="max-w-96 mx-auto">
                <p className="mb-2">
                  Lors de ma formation, j'ai été amené à <span className="text-light">lire</span>, <span className="text-light">analyser</span>, <span className="text-light">synthétiser</span> et <span className="text-light">rédiger</span> des <span className="text-primary-light font-bold">documents scientifiques</span>.
                </p>
                <p className="">
                  J’ai également participé à l’élaboration de <span className="text-primary-light font-bold">preuves de concepts</span> dans le cadre de projets orientés <span className="text-light">recherche</span>, mêlant élaboration d'un <span className="text-light">état de l'art</span>, réflexion <span className="text-light">théorique</span> et implémentation <span className="text-light">d'outils concrets</span>.
                </p>
              </Card>

            </div>
          </Section>
        </Background>

        {/* Loisirs */}
        {/* --------------------------------------------------------------------------- */}
        <Background 
          src="/images/background/scavengersReign.png" 
          parentStyle="min-h-[80vh] flex flex-col items-center justify-center" 
          childStyle=""
        >
          <Section>
            <h1 className="text-center text-light text-4xl font-bold mb-12 text-shadow-md/50">🎲 Loisirs</h1>
            <div className="grid gap-6 lg:grid-cols-3">

              <Card title="🎵 Musique" variant="translucent" body="max-w-96 mx-auto">
                <p className="mb-2">
                  Passionné de <span className="text-light">musique</span> depuis de nombreuses années, je pratique la <span className="text-primary-light font-bold">batterie</span> depuis plus de dix ans.
                </p>
                <p>
                  Je m’intéresse également à la <span className="text-primary-light font-bold">création musicale</span> assistée par ordinateur, notamment à travers l’exploration de <span className="text-light">synthétiseurs virtuels</span> sur <span className="italic">Ableton Live</span>.
                </p>
              </Card>

              <Card title="🎬 Cinéma et littérature" variant="translucent" body="max-w-96 mx-auto">
                <p className="mb-2">
                  Je puise beaucoup <span className="text-light">d’inspiration</span> dans divers univers de <span className="text-primary-light font-bold">science-fiction</span>, que ce soit à travers le cinéma, l’animation, les bandes dessinées, les mangas ou les romans.
                </p>
                <p>
                  Ces formes d’expression nourrissent mon <span className="text-light">imaginaire</span> et influencent souvent mes projets <span className="text-light">créatifs</span>.
                </p>
              </Card>

              <Card title="👾 Jeux vidéo" variant="translucent" body="max-w-96 mx-auto">
                <p className="mb-2">
                  Amateur de <span className="text-primary-light font-bold">jeux vidéo</span>, j’apprécie particulièrement les expériences <span className="text-light">originales</span> et <span className="text-light">immersives</span>.
                </p>
                <p>
                  Cette passion m’a naturellement conduit à m’intéresser au <span className="text-primary-light font-bold">développement de jeux</span>, notamment à l’occasion de <span className="italic text-light">Game Jams</span>, où j’ai pu expérimenter la <span className="text-light">création</span> de jeux vidéo en <span className="text-light">équipe</span>.
                </p>
              </Card>

            </div>
          </Section>
        </Background>

        {/* Projets Pro */}
        {/* --------------------------------------------------------------------------- */}
        <Section background="bg-dark-deep">
          <h1 className="text-light text-3xl font-bold mb-12 mt-12 text-shadow-md/50">🖥️ Projets universitaires et professionnels</h1>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card variant="project" image="/images/projects/materialSimulation/result.png" body="mx-auto w-128 lg:w-auto lg:mx-0">
              <Projects
                title="🦋 Simulation de matériaux bio-inspirés"
                place="Inria, Bordeaux"
                date="Mai - Septembre, 2024"
                keywords={["Computer Graphics", "Blender", "3D Modeling"]}
                pageLink="/projects/materialSimulation"
              />
            </Card>

            <Card variant="project" image="/images/projects/AR/XR_visulizer.png" body="mx-auto w-128 lg:w-auto lg:mx-0">
              <Projects
                title="👓 Visualisation d’objets 3D en réalité mixte"
                place="LaBRI, Bordeaux"
                date="Février - Avril, 2024"
                keywords={["Mixte Reality", "Unity", "Slicer3D", "C#"]}
                pageLink="/projects/AR"
              />
            </Card>

            <Card variant="project" image="/images/projects/depthImageProcessing/indoorTotoro_mask.png" body="mx-auto w-128 lg:w-auto lg:mx-0">
              <Projects
                title="📷 Traitement d’images optiques 2.5D"
                place="LaBRI, Bordeaux"
                date="Février - Avril, 2023"
                keywords={["Image Processing", "Deep Learning", "Python"]}
                pageLink="/projects/depthImageProcessing"
              />
            </Card>

            <Card variant="project" image="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-23__09.32.11.png" body="mx-auto w-128 lg:w-auto lg:mx-0">
              <Projects
                title="📚 Analyse de bibliothèque"
                place="CNRS, Bordeaux"
                date="Avril - Mai, 2021"
                keywords={["Computer Vision", "Android Studio", "Python"]}
                pageLink="/projects/bookshelfAnalysis"
              />
            </Card>
          </div>
        </Section>

        {/* Projets Perso */}
        {/* --------------------------------------------------------------------------- */}
        <Section background="bg-dark-deep">
          <hr className="border-light-dark" />
          <h1 className="text-light text-3xl font-bold mb-12 mt-12 text-shadow-md/50">💻 Projets personnels</h1>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card variant="project" image="/images/projects/minecraftShader/galerie/surface/coverON.png" body="mx-auto w-128 lg:w-auto lg:mx-0">
              <Projects
                title="🌄 Développement de Shader"
                date="Octobre 2024 - Juin 2025"
                keywords={["Game Development", "Real Time Rendering", "OpenGL"]}
                pageLink="/projects/minecraftShader"
              />
            </Card>

            <Card variant="project" image="/images/projects/videoGame/chronoCriminal.png" body="mx-auto w-128 lg:w-auto lg:mx-0">
              <Projects
                title="🎮 Création de jeu vidéo"
                place="Guilde du dé libéré"
                date="Octobre 2023"
                keywords={["Game Development", "Game Jam", "Godot"]}
                pageLink="/projects/videoGame"
              />
            </Card>
          </div>
        </Section>

        {/* Contact */}
        {/* --------------------------------------------------------------------------- */}
        <Section background="bg-dark">
          <div className="grid gap-6 md:grid-cols-3">
            <Links emoji="📨" title="Envoyez-moi un e-mail →" url={""}/>
            <Links emoji="📄" title="Consultez mon CV →" url={""}/>
            <Links emoji="🌐" title="Accédez à mon GitHub →" url={""}/>
          </div>
        </Section>

      </main>

      {/* Footer */}
      {/* --------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------- */}
      <Footer/>
    </div>
  );
}
