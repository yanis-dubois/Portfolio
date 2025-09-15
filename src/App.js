// App.js
import React from "react";
import {Section, Card, Studies, Projects, Link} from "./components/ui"

export default function App() {
  return (
    <div className="min-h-screen text-light">

      {/* Header */}
      <header className="p-6 bg-dark text-light h-screen flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-8xl font-bold">Yanis Dubois</h1>
          <p className="mt-4 text-3xl">Développeur spécialisé dans le traitement, l’analyse, et la synthèse d’images et de sons</p>  
        </div>
      </header>

      {/* Main */}
      <main>

        {/* Introduction */}
        <Section background="bg-dark-soft text-light-soft" body="flex flex-col items-center justify-center">
          <h1 className="text-center text-light text-3xl font-bold m-4">Introduction</h1>

          <div className="grid grid-cols-5 gap-8">
            {/* Présentation */}
            <div className="col-span-3">
              <h2 className="text-light text-xl font-bold mb-4">👤 Présentation</h2>
              <code className="rounded font-mono py-0.5 bg-dark-deep text-primary-bright">[TODO : réécrire et ajouter de la forme (structure, couleur, gras, surligné, ...)]</code>
              <p className="mb-4 text-justify">
                Diplômé d’un master en informatique, je suis fasciné par les différentes 
                applications que l’on peut donner aux mathématiques. C’est l’aspect concret 
                de l’informatique que j’aime, cette capacité à transformer des concepts 
                abstraits en outils efficaces et fonctionnels.
              </p>
              <p className="mb-4 text-justify">
                J’apprécie la manipulation d’objets mathématiques et de structures de 
                données originaux telles que dans la théorie des graphes, la manipulation 
                de maillages, ou encore la conception d’algorithmes distribués ou parallèle. 
              </p>
              <p className="mb-4 text-justify">
                Ma spécialisation de Master m’a permis de me former en profondeur 
                à des domaines qui me passionnent aujourd’hui : 
                la computer graphics – au travers du rendu réaliste ou expressif, 
                via rasterisation pour les rendus temps réel ou pathtracing pour les 
                rendus plus précis.
                la computer vision – via le traitement et l’analyse de signaux, 
                notamment avec des méthodes de machine learning.
              </p>
            </div>

            {/* Formation */}
            <Card title="🎓 Formation" body="col-span-2">
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
        <Section background="bg-fixed bg-cover bg-center" image="images/background/katanaZero.png" body="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-center text-light text-4xl font-bold mb-12">⚙️ Compétences</h1>
          <div className="grid gap-6 md:grid-cols-3">

            <Card title="💬 Langages" variant="translucent">
              <p className="mb-2">
                Mon parcours m’a conduit à développer principalement en C, C++, C#, Java, Python et OpenGL, aussi bien pour la création d’applications que pour la mise en œuvre de preuves de concepts.
              </p>
              <p className="">
                J’ai également de bonnes bases en développement web (HTML, CSS, JavaScript) ainsi qu’en manipulation de bases de données relationnelles via SQL.
              </p>
            </Card>

            <Card title="🛠️ Techniques" variant="translucent">
              <p className="mb-2">
                J’ai eu l’occasion d’utiliser un large éventail d’environnements de développement (VS Code, IntelliJ, Anaconda, Android Studio, Visual Studio, …) ainsi que des outils de gestion de versions comme Git.
              </p>
              <p className="mb-2">
                Plus récemment, je me suis formé à l’utilisation de moteurs de rendu et d’outils de création graphique tels que Godot, Unity et Blender.
              </p>
              <p className="">
                En matière de gestion de projet, je suis familier avec le principe de Scrum, ainsi que la modélisation à l’aide du formalisme UML.
              </p>
            </Card>

            <Card title="📚 Académiques" variant="translucent">
              <p className="mb-2">
               Ma formation m’a habitué à lire, analyser et synthétiser des articles scientifiques, mais aussi à en rédiger.
              </p>
              <p className="">
                J’ai également participé à l’élaboration de preuves de concepts dans le cadre de projets orientés recherche, mêlant réflexion théorique et implémentation concrète.
              </p>
            </Card>

          </div>
        </Section>

        {/* Loisirs */}
        <Section background="bg-fixed bg-cover bg-center" image="images/background/scavengersReign.png" body="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-center text-light text-4xl font-bold mb-12">🎲 Loisirs</h1>
          <div className="grid gap-6 md:grid-cols-3">

            <Card title="🎵 Musique" variant="translucent">
              <p className="mb-2">
                Passionné de musique depuis de nombreuses années, je pratique la batterie depuis 14 ans.
              </p>
              <p>
                Je m’intéresse également à la création musicale assistée par ordinateur, notamment à travers l’exploration de synthétiseurs virtuels sur Ableton Live.
              </p>
            </Card>

            <Card title="🎬 Cinéma et Bandes Dessinées" variant="translucent">
              <p className="mb-2">
                Je puise beaucoup d’inspiration dans les univers de la science-fiction, que ce soit à travers le cinéma, l’animation, les bandes dessinées ou les mangas.
              </p>
              <p>
                Ces formes d’expression nourrissent mon imaginaire et influencent souvent mes projets créatifs.
              </p>
            </Card>

            <Card title="👾 Jeux Vidéo" variant="translucent">
              <p className="mb-2">
                Amateur de jeux vidéo, j’apprécie particulièrement les univers immersifs et les expériences narratives originales.
              </p>
              <p>
                Cette passion m’a naturellement conduit à m’intéresser au développement de jeux, notamment à l’occasion de Game Jams, où j’ai pu expérimenter la création de jeux vidéo en équipe.
              </p>
            </Card>

          </div>
        </Section>

        {/* Projets Pro */}
        <Section background="bg-dark-deep">
          <h1 className="text-light text-3xl font-bold mb-12 mt-12">🖥️ Projets universitaires et professionnels</h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Projets" type="project" image="images/projects/materialSimulation/result.png">
              <Projects
                title="🦋 Simulation de l’apparence de matériaux bio-inspirés"
                place="Inria, Bordeaux"
                date="Mai - Septembre 2024"
                keywords={["Computer Graphics", "Blender", "3D Modeling"]}
              />
            </Card>
          </div>
        </Section>

        {/* Projets Perso */}
        <Section background="bg-dark-deep">
          <hr className="border-light-dark" />
          <h1 className="text-light text-3xl font-bold mb-12 mt-12">💻 Projets personnels</h1>

          <div className="grid gap-6 md:grid-cols-2">
            <Card title="" type="project" >
              <p className="mb-4">
                Découvrez mes projets réalisés en stage, en master et lors de Game
                Jams.
              </p>
            </Card>
          </div>
        </Section>

        {/* Contact */}
        <Section background="bg-dark">
          <div className="grid gap-6 md:grid-cols-3">
            <Link emoji="📨" title="Envoyez-moi un e-mail" url={""}/>
            <Link emoji="📄" title="Consultez mon CV" url={""}/>
            <Link emoji="🌐" title="Accédez à mon GitHub" url={""}/>
          </div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="bg-dark-soft p-6 text-center text-sm text-light-dark">
        © 2025 Yanis Dubois — Libre et Open Source
      </footer>
    </div>
  );
}
