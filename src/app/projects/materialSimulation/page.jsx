import {Section, Card, Studies, Projects, Link, Footer} from "../../../utils/ui.jsx"

export default function Home() {
  return (
    <div className="min-h-screen text-light">

      {/* Main */}
      {/* --------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------- */}
      <main>

        {/* Introduction */}
        {/* --------------------------------------------------------------------------- */}
        <Section background="bg-dark-soft text-light-soft" body="flex flex-col items-center justify-center">
          <div className="grid grid-cols-5 gap-8">
            {/* Présentation */}
            <div className="col-span-3">
              <h2 className="text-light text-4xl font-bold mb-4 mt-4">👤 Présentation</h2>
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
      </main>

      {/* Footer */}
      {/* --------------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------------- */}
      <Footer/>
    </div>
  );
}
