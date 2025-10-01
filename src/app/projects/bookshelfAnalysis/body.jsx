import {StaticImg} from "../../../utils/media.jsx"

export function Body() {
  return (
    <div>
      <h1>Contexte</h1>
      <hr />
      <div>
        <div>
          <p>Ce projet a été réalisé dans le cadre de mon stage de fin d’études, au sein de l’IUT d’informatique de Gradignan. L’objectif principal était de développer une application capable de scanner et d’analyser des photographies de bibliothèques (étagères remplies de livres), afin d’identifier automatiquement les ouvrages présents à partir des images.</p>
          <p>Le sujet m’a été proposé par Mathieu Raffinot, chercheur au CNRS, avec qui j’ai collaboré tout au long du stage.</p>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/lineDetect.png" />
          </figure>
        </div>
      </div>
      <h1>Idée générale</h1>
      <hr />
      <h2>Introduction</h2>
      <p>Ce projet était séparé en deux parties :</p>
      <ol type="1" start="1">
        <li>La première consistait à concevoir une méthode de segmentation et d’analyse d’images de bibliothèques dans le but d’identifier automatiquement les ouvrages présents, notamment à partir de leurs tranches.</li>
      </ol>
      <ol type="1" start="2">
        <li>La seconde portait sur une tâche plus spécifique : la modification de la police d’écriture utilisée dans une application mobile Android existante, dans un souci d’accessibilité.</li>
      </ol>
      <h2>1. Analyse de bibliothèque</h2>
      <p>La suite présente le prototype Python développé au cours du projet, en détaillant les différentes étapes clés du pipeline de traitement d’images.</p>
      <h3>1.1 Recadrage de l’image</h3>
      <p>La première étape du processus consistait à corriger l’orientation des images afin que les étagères apparaissent bien alignées horizontalement. Pour cela, j’ai mis en œuvre des algorithmes de détection de lignes, notamment le filtre de Canny suivi de la transformée de Hough. Ces lignes détectées permettent d’estimer l’inclinaison de l’image par rapport à l’horizontale, et une rotation est ensuite appliquée pour réaligner correctement l’ensemble de la scène.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/lineDetect.png" />
            <figcaption>Détection de lignes</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-23__09.38.10.png" />
            <figcaption>Rotation</figcaption>
          </figure>
        </div>
      </div>
      <h3>1.2 Séparation des rangées de livres</h3>
      <p>Une fois l’image redressée, l’objectif suivant était d’isoler les différentes rangées de livres présentes sur les étagères. Pour ce faire, les mêmes techniques de détection de lignes horizontales ont été utilisées. Les coordonnées de ces lignes servent de repères pour découper l’image en plusieurs zones correspondant aux différentes étagères.</p>
      <div>
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-22__19.40.48.png" />
            <figcaption>Détection de lignes horizontales</figcaption>
          </figure>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-22__19.41.00.png" />
            <figcaption>Première partie de la segmentation</figcaption>
          </figure>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-22__19.41.09.png" />
            <figcaption>Seconde partie de la segmentation</figcaption>
          </figure>
        </div>
      </div>
      <h3>1.3 Séparation des tranches de livres</h3>
      <p>L’étape suivante visait à segmenter chaque rangée afin d’identifier individuellement les tranches de livres. Là encore, des méthodes similaires de détection de lignes, cette fois verticales, ont été appliquées pour localiser les limites entre chaque ouvrage. L’image est ensuite découpée en sous-parties correspondant à chaque tranche.</p>
      <div>
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-23__09.32.11.png" />
            <figcaption>Détection des lignes</figcaption>
          </figure>
          <h3>1.4 Nettoyage de la segmentation</h3>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2023-07-27__20.29.31.png" />
            <figcaption>Quelques tranches de livre résultats</figcaption>
          </figure>
        </div>
      </div>
      <p>Une phase de traitement supplémentaire a été nécessaire pour affiner les résultats et éliminer les éléments indésirables ou parasites (fonds, ombres, objets non pertinents). Ce nettoyage repose lui aussi sur des algorithmes de détection de structures linéaires, combinés à des heuristiques pour filtrer les segments incohérents.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-23__12.19.21.png" />
            <figcaption>Avant nettoyage</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-23__12.19.43.png" />
            <figcaption>Après nettoyage</figcaption>
          </figure>
        </div>
      </div>
      <h3>1.5 Extraction du texte</h3>
      <p>Une fois les tranches correctement isolées, l’étape suivante consistait à extraire le texte visible sur celles-ci. J’ai utilisé le moteur OCR Tesseract, appliqué sur plusieurs versions binarisées de chaque images de tranche, avec différents seuils de contraste. Cette approche multi-seuils permet de maximiser les chances d’extraire les informations utiles, en contournant les variations de qualité ou de lisibilité du texte imprimé.</p>
      <figure>
        <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-23__12.55.15.png" />
        <figcaption>Image originale</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/bookshelfAnalysis/Capture_decran_2021-06-23_a_12.55.54.png" />
      </figure>
      <figure>
        <StaticImg src="/images/projects/bookshelfAnalysis/Capture_decran_2021-06-23_a_13.09.25.png" />
      </figure>
      <figure>
        <StaticImg src="/images/projects/bookshelfAnalysis/Capture_decran_2021-06-23_a_12.55.47.png" />
      </figure>
      <figure>
        <StaticImg src="/images/projects/bookshelfAnalysis/Capture_decran_2021-06-23_a_12.56.04.png" />
        <figcaption>Image binaire avec différents seuils</figcaption>
      </figure>
      <p>Résultats obtenus :</p>
      <blockquote>
        © | Gintbendee cxrangice Un tout petit monde David Lodge <br />
        S | Bionteneoce ttrangere Un tout petit monde David Lodge<br />
        Resse tian Un tout petit monde David LodgeHats<br />
        g | Reaves mate Un tout petit monde David LodgeBibhotheque etrangere
      </blockquote>
      <h3>1.6 Traitement des résultats textuels</h3>
      <p>Le texte brut issu de l’OCR contient souvent du bruit : erreurs de reconnaissance, caractères spéciaux, coupures. Un post-traitement a donc été mis en place pour nettoyer ces résultats. Il comprend la suppression des caractères non alphanumériques, ainsi qu’un filtrage destiné à isoler les chaînes de texte les plus pertinentes.</p>
      <p>Résultats obtenus :</p>
      <blockquote>Un tout petit monde David Lodge</blockquote>
      <h3>1.7 Validation via interrogation en ligne</h3>
      <p>Afin de s’assurer d’avoir une information viable, on a ensuite décidé d’interroger Google en utilisant Selenium, ce qui nous a permis de naviguer en headless sur internet. On crée une requête avec Selenium contenant le résultat obtenu dans l’étape précédente, et l’on reçoit alors le titre exacte accompagné du nom de l’auteur.</p>
      <p>Pour fiabiliser les informations extraites, une validation automatique a été ajoutée en fin de chaîne. À l’aide de Selenium, une requête web est générée à partir du texte obtenu, puis envoyée à Google en mode headless. La réponse est ensuite analysée afin de récupérer le titre exact de l’ouvrage, ainsi que, lorsque c’est possible, le nom de l’auteur. Cette étape permet de compenser les éventuelles erreurs de l’OCR en s’appuyant sur des sources d’information externes.</p>
      <h2>2. Changement de police d’écriture</h2>
      <p>La seconde partie du projet consistait à ajouter une fonctionnalité de personnalisation de la police d’écriture dans l’application open source TextFairy, dédiée à la reconnaissance optique de caractères (OCR) sur Android.</p>
      <p>Bien que cette tâche puisse paraître simple en apparence, elle s’est révélée plus technique qu’anticipé, en raison de la complexité de l’architecture de l’application et des spécificités du développement Android. Le travail a été réalisé sous Android Studio, en manipulant les ressources d’interface, les fichiers XML de styles, et les mécanismes de gestion de thèmes pour intégrer le changement de typographie de manière propre et fonctionnelle.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-24__15.00.32.png" />
            <figcaption>Avant application de la police</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/bookshelfAnalysis/Capture_dcran_2021-06-24__17.26.30.png" />
            <figcaption>Après application de la police</figcaption>
          </figure>
        </div>
      </div>
      <h1>Ressources supplémentaires</h1>
      <hr />
    </div>
  );
}
