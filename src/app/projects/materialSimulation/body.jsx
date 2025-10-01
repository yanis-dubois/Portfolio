import {StaticImg} from "../../../utils/media.jsx"

export function Body() {
  return (
    <div>
      <h1>Contexte</h1>
      <hr />
      <div>
        <div>
          <p>
            Ce projet a été réalisé dans le cadre de mon stage de fin d’études du master informatique, spécialité <em>Image et Son</em>, à l’université de Bordeaux. L’objectif du stage était de développer une méthode de reproduction de l’apparence de matériaux inspirés des ailes de papillons, en s’appuyant sur des techniques issues de l’informatique graphique.
          </p>
          <p>Le stage s’est déroulé au sein de l’équipe de recherche Manao à l’Inria, une équipe spécialisée dans les problématiques de rendu, modélisation et simulation visuelle. Ce sujet a été proposé et encadré par les chercheurs Pascal Barla et Romain Pacanowski, avec qui j’ai collaboré tout au long du stage.</p>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/result.png"/>
          </figure>
        </div>
      </div>
      <h1>Idée générale</h1>
      <hr />
      <h2>Introduction</h2>
      <p>Le monde du vivant présente une richesse de structures et de phénomènes visuels difficile à reproduire, ce qui en fait un sujet d’étude privilégié dans de nombreux domaines scientifiques, notamment en informatique graphique. Dans ce projet, nous nous sommes donc intéressés à l’apparence de matériaux bio-inspirés, et plus précisément à celle des ailes de papillons, connues pour leur complexité structurelle et leurs effets optiques singuliers.</p>
      <p>Ces ailes sont constituées de structures à différentes échelles : elles sont d’abord recouvertes d’écailles (mesurant entre 30 et 500 µm), elles-mêmes composées de crêtes microscopiques, dont la taille se compte en micromètres. Cette organisation particulière donne lieu à une grande variété d’effets optiques, tels que le crénelage, le tramage, le scintillement, l’anisotropie ou encore l’iridescence.</p>
      <p>L’objectif du stage était de concevoir une méthode permettant de reproduire ces effets visuels en modélisant les principales structures observées sur les ailes de papillons, à savoir les écailles et leurs crêtes. Pour cela, nous avons choisi d’utiliser Blender, un logiciel libre et open source, afin de tirer parti de ses capacités de génération procédurale de géométrie et de son moteur de rendu path-tracing, Cycles.</p>
      <figure>
        <StaticImg src="/images/projects/materialSimulation/butterfly.png"/>
        <figcaption>
          Ailes d’un papillon de l’espèce <em>Isostola Flavicollaris</em>
        </figcaption>
      </figure>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/scales.png"/>
            <figcaption>Écailles recouvrant les ailes</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/ridges.png"/>
            <figcaption>Structurations en crêtes recouvrant les écailles</figcaption>
          </figure>
        </div>
      </div>
      <h2>Modélisation géométrique</h2>
      <p>La première étape du projet a consisté à générer de façon procédurale la géométrie des écailles à la surface des ailes, en utilisant le système Geometry Nodes de Blender. L’objectif était d’offrir à l’utilisateur un contrôle fin sur la distribution et la déformation des écailles, afin de refléter la grande variété morphologique observée selon les espèces de papillons.</p>
      <p>Le système mis en place permet de modifier un large éventail de paramètres : forme, densité, orientation, distribution, courbure, ainsi que la présence et la structure des crêtes. Cette flexibilité rend possible la création de motifs complexes et variés, proches de ceux observés dans la nature.</p>
      <h3>Distribution</h3>
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/distrib_hexaJitter0.png"/>
            <figcaption>Distribution hexagonale</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/distrib_hexaJitter03.png"/>
            <figcaption>Distribution hexagonale avec de légères perturbations</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/distrib_hexaJitter1.png"/>
            <figcaption>Distribution hexagonale avec de fortes perturbations</figcaption>
          </figure>
        </div>
      </div>
      <h3>Rotations</h3>
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/orientation_noise.png"/>
            <figcaption>Orientation</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/elevation_noise.png"/>
            <figcaption>Élévation</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/tilt_noise.png"/>
            <figcaption>Inclinaison</figcaption>
          </figure>
        </div>
      </div>
      <h3>Courbure et crêtes</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/shadding_smooth.png" />
            <figcaption>Courbure</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/ridge_frequence.png" />
            <figcaption>Crêtes</figcaption>
          </figure>
        </div>
      </div>
      <p>En jouant sur la présence de différents types d’écailles lors de la distribution, il nous a été possible de reproduire deux effets optique que sont la tramage et le crénelage comme on peut le constater sur l’image suivante. </p>
      <figure>
        <StaticImg src="/images/projects/materialSimulation/materialDistrib_result.png" />
        <figcaption>Distribution de trois types d’écailles différentes</figcaption>
      </figure>
      <h2>Optimisation</h2>
      <p>Pour pouvoir générer un grand nombre d’écailles sans compromettre les performances, un travail d’optimisation a été mené sur leur modélisation géométrique. L’une des principales améliorations a consisté à implémenter un algorithme de Parallax Occlusion Mapping (POM) afin de simuler les crêtes présentes à la surface des écailles.</p>
      <p>Cette technique permet de reproduire des détails géométriques complexes tout en réduisant significativement la charge en géométrie réelle transmise à la carte graphique. Pour améliorer la fidélité de cette approximation, l’algorithme a été étendu avec des étapes inspirées du ray-tracing, permettant la prise en compte de multiple réflexion. </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/POM.png" />
            <figcaption>POM sans ray-tracing</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/POM_plus.png" />
            <figcaption>POM avec ray-tracing</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/materialSimulation/ref.png" />
            <figcaption>Référence</figcaption>
          </figure>
        </div>
      </div>
      <h2>Apparence</h2>
      <p>Enfin, nous avons développé plusieurs modèles de matériaux pouvant être appliqués aux écailles, tout en veillant à ce qu’ils soient compatibles avec le système d’optimisation basé sur le Parallax Occlusion Mapping décrit précédemment. Ces matériaux ont été implémentés à l’aide du système de Shading Nodes de Blender, ce qui impliquait de travailler dans les limites imposées par le moteur de rendu Cycles.</p>
      <p>L’une des principales difficultés rencontrées concernait l’impossibilité, dans Blender, de définir directement nos propres fonctions BSDF (Bidirectional Scattering Distribution Function), qui décrivent le comportement de la lumière à la surface des matériaux. Pour contourner cette contrainte, nous avons conçu une approche permettant de simuler différents comportements optiques complexes en combinant intelligemment les nœuds disponibles.</p>
      <p>Trois types de matériaux ont ainsi été implémentés :</p>
      <ul>
        <li>un matériau diffus (Lambertien)</li>
      </ul>
      <ul>
        <li>un matériau iridescent à réflexion spéculaire parfaite</li>
      </ul>
      <ul>
        <li>un matériau iridescent rugueux (Microfacet)</li>
      </ul>
      <p>Voici des résultats obtenus nous permettant d’illustrer la présence de scintillement, d’anisotropie et d’iridescence :</p>
      <figure>
        <StaticImg src="/images/projects/materialSimulation/glittering_30deg.png" />
        <figcaption>Scintillement</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/materialSimulation/finalResult.png" />
        <figcaption>Anisotropie et iridescence</figcaption>
      </figure>
      <h1>Ressources supplémentaires</h1>
      <hr />
    </div>
  );
}
