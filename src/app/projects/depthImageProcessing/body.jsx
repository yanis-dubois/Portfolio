export function Body() {
  return (
    <div>
      <h1>Contexte</h1>
      <hr />
      <div>
        <div>
          <p>
            En collaboration avec Théo Lacoste, Maxime Oçafrain et Olivier Riverain, nous avons développé une application dédiée au traitement d’images reposant sur l’exploitation de cartes de profondeur. Ceci, dans le cadre de notre projet de fin d’année de première année de master informatique spécialité <em>Image et Son</em>, à l’université de Bordeaux.
          </p>
          <p>Le sujet nous a été proposé par Pascal Desbarats, chercheur au LaBRI, qui nous a accompagnés et encadrés tout au long du projet.</p>
        </div>
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/indoorTotoro_mask.png">
              <img src="/images/projects/depthImageProcessing/indoorTotoro_mask.png" />
            </a>
          </figure>
        </div>
      </div>
      <h1>Idée générale</h1>
      <hr />
      <p>
        L’objectif de ce projet était d’explorer des traitements d’images optiques en s’appuyant sur des cartes de profondeur. Ces cartes ont été générées à l’aide du réseau de neurones DenseDepth (<a href="https://github.com/ialhashim/DenseDepth">lien GitHub</a>), un modèle d’estimation monoculaire de la profondeur à partir d’images RGB.
      </p>
      <p>Les cartes obtenues sont bien sûr des approximations, leur qualité dépendant fortement des données d’entraînement et de la robustesse du modèle utilisé. Dans un cadre applicatif plus avancé, on pourrait envisager des résultats plus précis à partir de données issues de capteurs 3D réels (comme des caméras stéréoscopiques ou des capteurs de type LiDAR).</p>
      <h2>1. Effet de brouillard</h2>
      <p>Comme première étape, et pour nous familiariser avec les cartes de profondeur, nous avons mis en place un effet de brouillard simulé. Celui-ci est calculé en fonction de la distance des objets à la caméra : plus un élément est éloigné, plus il est atténué. Ce procédé permet de produire un effet atmosphérique, souvent utilisé en infographie pour accentuer la profondeur dans une scène.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/meeseeks.png">
              <img src="/images/projects/depthImageProcessing/meeseeks.png" />
            </a>
            <figcaption>Image originale</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/meeseeks_fog.png">
              <img src="/images/projects/depthImageProcessing/meeseeks_fog.png" />
            </a>
            <figcaption>Ajout de brouillard</figcaption>
          </figure>
        </div>
      </div>
      <h2>2. Traitements locaux</h2>
      <p>Nous avons ensuite exploré des traitements localisés, c’est-à-dire des modifications visuelles appliquées uniquement à certaines zones d’une image, définies selon leur profondeur. Pour cela, nous avons conçu un algorithme de segmentation qui, à partir d’une carte de profondeur, divise l’image en plusieurs couches ou régions.</p>
      <p>Par exemple, une image peut être découpée en premier plan, zone intermédiaire et arrière-plan. Sur l’exemple présenté, le bleu représente l’arrière-plan, le vert le premier plan, tandis que la zone noire correspond à la région ciblée par le traitement.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/indoorTotoro_rescale.jpg">
              <img src="/images/projects/depthImageProcessing/indoorTotoro_rescale.jpg" />
            </a>
            <figcaption>Image de synthèse</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/indoorTotoro_mask.png">
              <img src="/images/projects/depthImageProcessing/indoorTotoro_mask.png" />
            </a>
            <figcaption>Segmentation selon la profondeur</figcaption>
          </figure>
        </div>
      </div>
      <h3>2.1 Profondeur de champ</h3>
      <p>L’un des traitements mis en œuvre est une simulation de focus optique, visant à reproduire un effet de profondeur de champ. Seule une région spécifique reste nette, tandis que le reste de l’image est progressivement flouté selon sa distance. Cette approche imite le comportement d’un objectif ayant un plan focal fin.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/introspection.png">
              <img src="/images/projects/depthImageProcessing/introspection.png" />
            </a>
            <figcaption>Image originale</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/dof-p_introspection.png">
              <img src="/images/projects/depthImageProcessing/dof-p_introspection.png" />
            </a>
            <figcaption>Ajout de l’effet de focus</figcaption>
          </figure>
        </div>
      </div>
      <h3>2.2 Ajustement local de luminosité</h3>
      <p>Une autre expérimentation a consisté à ajuster localement la luminosité. À l’aide de la carte de profondeur, il devient possible de modifier uniquement certaines zones (ici l’arrière-plan), tout en préservant le reste de l’image. Ce type de traitement permet des ajustements visuels fins sans dégrader la cohérence de la scène.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/reflexion.png">
              <img src="/images/projects/depthImageProcessing/reflexion.png" />
            </a>
            <figcaption>Image originale</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <a href="/images/projects/depthImageProcessing/light_reflexion.png">
              <img src="/images/projects/depthImageProcessing/light_reflexion.png" />
            </a>
            <figcaption>Ajustement de luminosité</figcaption>
          </figure>
        </div>
      </div>
      <p>Ce principe peut bien sûr être généralisé à d’autres types de traitements : modification du contraste, ajustement des couleurs, application de filtres artistiques, etc.</p>
      <h1>Rapport détaillé</h1>
      <hr />
      <figure>
        <div>
          <a href="https://drive.google.com/file/d/1BdeK0goqTmyTdKlJyG5KzTgSa1N6fRAI/view?usp=share_link">rapport PDF</a>
        </div>
      </figure>
    </div>
  );
}
