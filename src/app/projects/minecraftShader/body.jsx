import {StaticImg, Video} from "../../../utils/media.jsx"
import {ImageComparison} from "../../../utils/dynamicUI.jsx"

export function Body() {
  return (
    <div>
      <h1>Contexte</h1>
      <hr />
      <div>
        <div>
          <p>
            Après avoir terminé mes études, je me suis lancé un défi personnel : repenser entièrement les graphismes de l’un de mes jeux vidéo préférés, <em>Minecraft.</em>
          </p>
          <p>Ce projet a pour objectif de moderniser l’esthétique visuelle du jeu tout en me permettant d’explorer et d’approfondir les techniques de rendu 3D en temps réel.</p>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/minecraftShader/galerie/surface/coverON.png" />
          </figure>
        </div>
      </div>
      <hr />
      <h1>Introduction</h1>
      <p>
        Sorti en 2011, <em>Minecraft </em>a conservé jusqu’à aujourd’hui un style graphique minimaliste, sans refonte visuelle majeure. Ce choix artistique, bien qu’iconique, en fait un excellent terrain d’expérimentation pour y appliquer des techniques de rendu avancées.
      </p>
      <p>Ce projet m’offre ainsi une opportunité concrète de mettre en pratique mes connaissances en rendu 3D, tout en développant de nouvelles compétences spécifiques au rendu en temps réel.</p>
      <p>En effet, dans le domaine du jeu vidéo, le rendu en temps réel constitue un défi majeur. L’image affichée à l’écran doit être calculée en une fraction de seconde afin de maintenir une fluidité optimale. En général, 30 images par seconde minimum sont nécessaires pour garantir une expérience de jeu agréable. Cela implique l’usage de méthodes de rendu très efficaces.</p>
      <h3>Comprendre les shaders et le rendu en temps réel</h3>
      <p>
        Pour atteindre cet objectif, le projet repose principalement sur l’écriture de <em>shaders</em>, des programmes spécialisés qui s’exécutent directement sur la carte graphique (GPU). Contrairement au processeur central (CPU), qui gère la logique du jeu et les calculs généraux, le GPU est optimisé pour effectuer des calculs graphiques massivement parallèles, ce qui le rend idéal pour le rendu 3D.
      </p>
      <p>Dans un moteur de rendu moderne le processus d’affichage d’une image 3D passe par ce qu’on appelle le pipeline graphique. Ce pipeline est composé de plusieurs étapes, dont les deux principales sont les vertex shaders et les fragment shaders.</p>
      <ul>
        <li>
          Le vertex shader intervient en premier. Il reçoit en entrée les coordonnées des sommets d’un objet 3D (<em>vertices</em>) et calcule leur position à l’écran en tenant compte de la perspective, de la caméra et des transformations de la scène. Il peut également transmettre d&#x27;autres informations, comme les normales ou les coordonnées de texture, à l&#x27;étape suivante.
        </li>
      </ul>
      <ul>
        <li>Le fragment shader, quant à lui, intervient après la rasterisation. Il détermine la couleur de chaque pixel de l’image finale, en se basant sur les données interpolées par le vertex shader. C’est ici que l’on implémente des effets visuels comme les ombres, les réflexions, la lumière dynamique, les matériaux, ou encore des effets atmosphériques.</li>
      </ul>
      <p>L’écriture de ces shaders permet donc un contrôle très fin sur le rendu visuel, et constitue le cœur du développement d’un rendu graphique personnalisé. C’est précisément ce que j’ai cherché à explorer et à maîtriser au cours de ce projet.</p>
      <hr />
      <h1>1. Éclairage</h1>
      <h2>1.1 Modèle d’éclairage diffus</h2>
      <p>
        La première étape de ce projet a consisté à implémenter un modèle d’éclairage pour les objets de la scène. Ces modèles, appelés BRDF (<em>Bidirectional Reflectance Distribution Functions</em>), décrivent la manière dont un matériau réfléchit la lumière en fonction de sa direction d’entrée et de sortie.
      </p>
      <p>Dans un premier temps, j’ai choisi d’appliquer un modèle d’éclairage diffus, à la fois simple à mettre en œuvre et suffisant pour obtenir un rendu de base cohérent. Il constitue une première approche efficace pour poser les fondations du système d’éclairage global.</p>
      <h3>Données d’éclairage issues du jeu</h3>
      <p>Pour calculer l’éclairage diffus, le moteur de jeu met à disposition deux types de données lumineuses pour chaque objet visible à l’écran :</p>
      <ul>
        <li>La lumière indirecte provenant du ciel</li>
      </ul>
      <ul>
        <li>La lumière indirecte issue de sources artificielles (torches, lanternes, feux, etc.)</li>
      </ul>
      <p>Ces deux contributions sont traitées séparément, puis combinées pour obtenir une intensité lumineuse finale.</p>
      <p>Chaque source est associée à une température de couleur (correspondant à un illuminant standard) et à un facteur d’intensité. Voici les paramètres retenus :</p>
      <ul>
        <li>
          Lumière indirecte du ciel :<p>→ Illuminant standard D65 (température de couleur de 6500K, correspondant à une lumière du jour au moment du zénith)</p>
          <p>→ Facteur d’intensité : 0,6</p>
        </li>
      </ul>
      <ul>
        <li>
          Sources artificielles :<p>→ Température de 4500K, correspondant à une lumière d’intérieur chaude et modérée</p>
          <p>→ Facteur d’intensité : 1,0</p>
        </li>
      </ul>
      <p>Chacune de ces lumières est associée à une couleur RGB dérivée de leur température, multipliée par leur intensité, puis additionnée pour former un éclairage combiné à la surface des objets.</p>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/basic.png" />
        <figcaption>Premier rendu</figcaption>
      </figure>
      <h3>Lumière ambiante</h3>
      <p>Dans la plupart des jeux vidéo, une lumière ambiante est ajoutée pour améliorer le confort visuel du joueur. Elle permet d’éviter les zones totalement noires, en maintenant un niveau d’éclairage minimal, même dans les environnements très sombres (comme des grottes profondes). Cette lumière, bien qu’irréaliste, joue un rôle important en termes de lisibilité et d’expérience utilisateur.</p>
      <p>Pour ce projet, j’ai choisi une lumière ambiante légèrement bleutée, simulant une lumière diffuse froide, avec les paramètres suivants :</p>
      <ul>
        <li>Température : 10000K</li>
      </ul>
      <ul>
        <li>Facteur d’intensité : 0,0125</li>
      </ul>
      <p>Ce niveau très faible assure que les zones dans l’ombre restent sombres, tout en étant perceptible.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/ambientLight_off.png"
          imageOn="/images/projects/minecraftShader/explanation/ambientLight_on.png"
        />
        <figcaption>Lumière ambiante (sans / avec)</figcaption>
      </figure>
      <h3>Lumière directe du soleil (ou de la lune)</h3>
      <p>Enfin, le modèle intègre également une lumière directe provenant du soleil en journée, ou de la lune pendant la nuit. Cette lumière n’est pas transmise directement par le jeu : elle doit être simulée dynamiquement lors du rendu.</p>
      <p>La lumière directe utilise la même température de couleur que celle du ciel (D65 – 6500K), mais avec une intensité modulée dynamiquement en fonctions des deux vecteurs suivant :</p>
      <ul>
        <li>La direction de la source lumineuse (soleil ou lune)</li>
      </ul>
      <ul>
        <li>La normale de la surface en cours de traitement</li>
      </ul>
      <p>L’intensité de la lumière reçue est obtenue via le produit scalaire entre ces deux vecteurs. Plus l’angle entre la lumière et la surface est proche de la perpendiculaire, plus l’éclairement est élevé. Autrement dit, plus un objet fait face à la source de lumière, plus l’intensité lumineuse qu’il reçoit est élevé.</p>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/direct_noon.png" />
        <figcaption>Midi (lumière zénithale)</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/direct_morning.png" />
        <figcaption>Matin (lumière provenant de la gauche)</figcaption>
      </figure>
      <h2>1.2 Ajustement des lumières</h2>
      <p>Dans le but de renforcer l’immersion et de rendre l’éclairage plus crédible, j’ai progressivement complexifié le système lumineux en introduisant des variations de couleur et d’intensité selon le contexte environnemental du jeu.</p>
      <h3>Variation dynamique de la lumière extérieure</h3>
      <p>
        À l’origine, la lumière du ciel était représentée par une couleur constante, correspondant à l’illuminant D65 (6500K), simulant une lumière neutre de plein jour. Afin de mieux refléter le cycle jour/nuit et les conditions<strong> </strong>météorologiques, j’ai mis en place un système dynamique faisant varier à la fois la température de couleur et l’intensité de la lumière extérieure.
      </p>
      <ul>
        <li>
          En journée, lorsque le ciel est dégagé :
          <ul>
            <li>La température de couleur du soleil évolue de 2000K à l’aube ou au crépuscule (lumière chaude, orangée) jusqu’à 6500K au zénith (lumière blanche et neutre).</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          La nuit, un gradient similaire est appliqué à la lumière lunaire :
          <ul>
            <li>Température variant de 20000K en début et fin de nuit (lumière très bleutée) à 7500K autour de minuit (teinte plus neutre).</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          L’intensité globale de la lumière est également ajustée :
          <ul>
            <li>Elle est réduite de moitié pendant la nuit.</li>
          </ul>
          <ul>
            <li>En cas de pluie, elle est réduite d’un dixième et un filtre légèrement bleuté est appliqué.</li>
          </ul>
          <ul>
            <li>En cas d’orages, elle est réduite de deux dixième et le même filtre bleuté est appliqué.</li>
          </ul>
        </li>
      </ul>
      <p>Ce système de modulation permet de renforcer la sensation de passage du temps et d’apporter une ambiance visuelle plus cohérente selon le contexte de jeu.</p>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/skyLightColor_noon.png" />
        <figcaption>Midi</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/skyLightColor_morning.png" />
        <figcaption>Matin</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/skyLightColor_night.png" />
        <figcaption>Nuit</figcaption>
      </figure>
      <h3>Raffinement des lumières artificielles</h3>
      <p>J’ai également apporté des ajustements aux sources lumineuses artificielles, telles que les torches, feux ou lanternes, dans l’objectif de leur donner un aspect plus réaliste.</p>
      <p>Pour cela, chaque source lumineuse est désormais décomposée de deux parties distinctes, chacune ayant sa propre couleur et son propre comportement d’atténuation :</p>
      <ol type="1" start="1">
        <li>
          Composante chaude :
          <ul>
            <li>Température de 3500K, produisant une lumière orangée chaleureuse.</li>
          </ul>
          <ul>
            <li>Atténuation linéaire avec la distance, simulant un éclairage ambiant.</li>
          </ul>
        </li>
      </ol>
      <ol type="1" start="2">
        <li>
          Composante neutre :
          <ul>
            <li>Température de 5500K, donnant une teinte assez neutre.</li>
          </ul>
          <ul>
            <li>Atténuation exponentielle avec la distance, simulant un éclat de lumière.</li>
          </ul>
        </li>
      </ol>
      <p>Cette approche permet d’enrichir la représentation des sources lumineuses et d’ajouter plus de nuances dans la façon dont elles interagissent avec leur environnement.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/blockLightColor_off.png"
          imageOn="/images/projects/minecraftShader/explanation/blockLightColor_on.png"
        />
        <figcaption>Nouveau système d'éclairage artificiel (sans / avec)</figcaption>
      </figure>
      <h3>Amélioration de la lisibilité géométrique</h3>
      <p>
        Enfin, un dernier ajustement a été réalisé pour améliorer la perception de la géométrie dans un univers constitué exclusivement de cubes alignés, comme c’est le cas dans <em>Minecraft</em>. L’uniformité des formes peut parfois rendre difficile la lecture de la profondeur et des volumes.
      </p>
      <p>
        Pour pallier ce problème, j’ai introduit de légères variations d’intensité lumineuse en fonction de la face du cube<strong> </strong>éclairée. Ainsi, même sous un éclairage homogène, les différentes faces d’un même bloc n’affichent jamais exactement la même couleur.
      </p>
      <p>Ce traitement subtil, mais efficace, permet de renforcer la lisibilité spatiale de la scène et d’éviter l’effet de &quot;platitude&quot; souvent associé à une lumière trop uniforme.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/blockLightColor_on.png"
          imageOn="/images/projects/minecraftShader/explanation/faceTweak.png"
        />
        <figcaption>Amélioration de la lisibilité (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/skyLightColor_morning.png"
          imageOn="/images/projects/minecraftShader/explanation/faceTweak_morning.png"
        />
        <figcaption>Amélioration de la lisibilité (sans / avec)</figcaption>
      </figure>
      <h2>1.3 Occlusion Ambiante</h2>
      <p>
        L’un des effets essentiels pour renforcer la perception de la profondeur et améliorer la lisibilité du relief est l’occlusion ambiante (<em>Ambient Occlusion</em>).
      </p>
      <p>Ce procédé simule l’assombrissement des zones d’un objet ou d’une scène qui reçoivent peu ou pas de lumière indirecte, typiquement dans les creux, les angles, ou entre des surfaces très rapprochées. Cet effet renforce la sensation de volume et ancre visuellement les objets dans leur environnement.</p>
      <p>
        Dans le cas du projet en question, les blocs constituant le terrain bénéficient déjà d’une occlusion ambiante pré-calculée<strong> </strong>et intégrée dans les données du jeu. Cela permet une intégration simple et directe dans le pipeline de rendu.
      </p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/faceTweak.png"
          imageOn="/images/projects/minecraftShader/explanation/vanillaAO_indoor.png"
        />
        <figcaption>Occlusion Ambiante (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/faceTweak_morning.png"
          imageOn="/images/projects/minecraftShader/explanation/vanillaAO_outside.png"
        />
        <figcaption>Occlusion Ambiante (sans / avec)</figcaption>
      </figure>
      <p>En revanche, pour les éléments de décor (comme les plantes, objets décoratifs, ou structures non cubiques), aucune information d’occlusion ambiante n’est fournie. Il est donc nécessaire de la calculer dynamiquement dans le shader.</p>
      <p>Pour cela, j’ai classé les éléments de décor selon plusieurs critères : taille, épaisseur, orientation.</p>
      <p>En fonction de ces paramètres, j’ai appliqué des fonctions spécifiques d’atténuation lumineuse, permettant de simuler une occlusion ambiante cohérente avec la forme et le comportement de chaque type d’objet.</p>
      <p>Ce traitement permet, par exemple, à des éléments allongés comme les hautes herbes ou les plantes grimpantes d’avoir une occlusion suivant cette forme verticale, et à des éléments moins allongés comme des buissons ou des fougère d’avoir une occlusion ambiante moins étiré.</p>
      <p>Cette approche offre un bon compromis entre qualité visuelle et coût de calcul, tout en s’adaptant aux contraintes du rendu en temps réel.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/customAO_off.png"
          imageOn="/images/projects/minecraftShader/explanation/customAO_on.png"
        />
        <figcaption>Occlusion Ambiante sur la végétation (sans / avec)</figcaption>
      </figure>
      <h2>1.4 Ombres projetées</h2>
      <p>Jusqu’à présent, le calcul de l’éclairage direct reposait uniquement sur deux vecteurs : la normale de surface et la direction vers la source lumineuse (le soleil ou la lune). Cette approche, bien qu&#x27;efficace dans un premier temps, néglige un aspect fondamental du réalisme visuel : la prise en compte des ombres projetées. En effet, aucun obstacle n&#x27;est actuellement capable de bloquer la lumière incidente, ce qui donne lieu à des scènes visuellement incomplètes et peu cohérentes.</p>
      <p>Pour intégrer ces ombres, j’ai mis en œuvre la technique bien connue des shadow maps (cartes d’ombre). Cette méthode consiste à effectuer une première passe de rendu depuis le point de vue de la source lumineuse, au cours de laquelle on enregistre la profondeur (distance à la lumière) de chaque fragment visible dans la scène.</p>
      <p>Lors de la seconde passe de rendu, cette fois-ci depuis la caméra du joueur, on peut comparer la profondeur d’un fragment à celle enregistrée dans la shadow map. Si la profondeur actuelle est supérieure à celle enregistrée depuis la source, cela signifie qu’un objet bloque la lumière : le fragment est donc dans l’ombre.</p>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/hardShadow_noon.png" />
        <figcaption>midi</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/hardShadow_morning.png" />
        <figcaption>matin</figcaption>
      </figure>
      <p>Pour adoucir la transition entre les zones éclairées et les zones ombrées, j’ai mis en place une technique de filtrage multi-échantillons de la shadow map. Cela permet d’ajouter une zone de pénombre en bordure d’ombre, apportant un rendu plus naturel et visuellement agréable.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/hardShadow_noon.png"
          imageOn="/images/projects/minecraftShader/explanation/softShadow_noon.png"
        />
        <figcaption>Ombre adoucie - midi (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/hardShadow_morning.png"
          imageOn="/images/projects/minecraftShader/explanation/softShadow_morning.png"
        />
        <figcaption>Ombre adoucie - matin (sans / avec)</figcaption>
      </figure>
      <p>Enfin, j’ai souhaité explorer un effet de style visuel appelé split toning. Il s’agit d’un procédé artistique visant à appliquer des teintes différentes selon l’exposition à la lumière. Dans mon cas, les zones éclairées conservent une température de couleur neutre ou chaude, tandis que les zones d’ombre adoptent une teinte bleutée. Ce choix réduit le contraste brutal de luminosité et crée une ambiance plus douce et cinématographique, tout en renforçant la séparation visuelle entre lumière et obscurité.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/softShadow_noon.png"
          imageOn="/images/projects/minecraftShader/explanation/splitToning_noon.png"
        />
        <figcaption>Split toning - midi (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/softShadow_morning.png"
          imageOn="/images/projects/minecraftShader/explanation/splitToning_morning.png"
        />
        <figcaption>Split toning - matin (sans / avec)</figcaption>
      </figure>
      <h2>1.5 Pixélisation</h2>
      <p>Pour conclure le système d’éclairage, j’ai souhaité renforcer la cohérence visuelle avec l’identité graphique originale de Minecraft, en réintroduisant volontairement un effet de pixélisation dans le rendu. En effet, l’un des éléments emblématiques du jeu est son esthétique résolument pixelisée, que je tenais à respecter malgré l’ajout de techniques de rendu modernes.</p>
      <p>Concrètement, cela signifie que les valeurs d’éclairage ne sont plus calculées de façon continue à l’échelle des pixels de l’écran, mais échantillonnées selon la grille de la texture des objets. Ainsi, une seule valeur d’éclairage est appliquée à chaque zone de texture (texel), ce qui recrée un rendu plus fidèle au style low-resolution du jeu.</p>
      <p>Cet effet a été l’un des plus complexes à mettre en œuvre techniquement, notamment car il a nécessité d’adapter en profondeur les calculs d’éclairage précédemment mis en place (intensité lumineuse, occlusion ambiante, ombres projetées) afin qu’ils s’intègrent dans cette nouvelle logique de rendu discret.</p>
      <p>
        Mais c’est aussi, à mes yeux, l’une des réussites les plus marquantes du projet. En assumant pleinement le style visuel pixel-art de <em>Minecraft</em>, tout en lui apportant un rendu plus physique et réaliste, j’ai pu créer un équilibre unique entre modernité technique et fidélité artistique.
      </p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/splitToning_noon.png"
          imageOn="/images/projects/minecraftShader/explanation/pixelatedShadow_noon.png"
        />
        <figcaption>Pixélisation - midi (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/splitToning_morning.png"
          imageOn="/images/projects/minecraftShader/explanation/pixelatedShadow_morning.png"
        />
        <figcaption>Pixélisation - matin (sans / avec)</figcaption>
      </figure>
      <hr />
      <h1>2. Matériaux</h1>
      <p>
        Jusqu’à présent, tous les objets de la scène étaient considérés comme étant constitués d’un matériau parfaitement diffus, c’est-à-dire ne réfléchissant la lumière que de façon uniforme, sans effets spéculaires ni effets de surface complexes. Pour aller plus loin dans le réalisme visuel et diversifier l’apparence des objets, j’ai introduit la notion de matériaux PBR (<em>Physically Based Rendering</em>).
      </p>
      <p>Ce modèle PBR permet de caractériser chaque matériau à l’aide de plusieurs attributs physiques tels que l’émissivité, la rugosité, la réflectance, ou encore la transluminescence. Ces paramètres influencent directement le comportement de la lumière sur les surfaces, et sont essentiels pour simuler des apparences de matériaux plus complexe comme le métal brossé, le bois ciré, la pierre rugueuse ou encore le verre.</p>
      <p>Pour intégrer ces paramètres au moteur de rendu, deux approches sont envisageables :</p>
      <ol type="1" start="1">
        <li>Définir les propriétés des matériaux au niveau des objets : cela consiste à créer un fichier listant les différents blocs du jeu et à leur associer un ensemble fixe de valeurs physiques. Cette méthode est simple à implémenter, mais elle présente une limitation importante : elle ne permet pas de faire varier les matériaux à l’intérieur d’un même objet, ce qui est pourtant nécessaire pour les objets composites.</li>
      </ol>
      <ol type="1" start="2">
        <li>
          Spécifier les propriétés des matériaux à l’échelle de leurs textures : cette méthode plus fine consiste à utiliser des textures PBR, dans lesquelles chaque canal (rouge, vert, bleu, alpha) encode une propriété physique spécifique (ex. : rugosité, réflectance, transluminescence, etc.). Des membres de la communauté <em>Minecraft</em> ont développé des packs de textures PBR compatibles avec de nombreux blocs du jeu, et librement accessibles. Ces packs fournissent une description plus granulaire et visuellement cohérente des matériaux.
        </li>
      </ol>
      <p>Pour garantir une flexibilité maximale, j’ai décidé d’implémenter les deux méthodes dans le projet. L’utilisateur a ainsi la possibilité soit de se contenter d’un modèle simple à base de propriétés globales, soit d’installer un pack de textures PBR s’il souhaite un rendu plus détaillé et réaliste.</p>
      <h2>2.1 Émissivité</h2>
      <p>La première propriété issue du modèle PBR que nous allons intégrer est l’émissivité, qui désigne la capacité d’un matériau à émettre sa propre lumière, indépendamment des sources lumineuses extérieures. Cette caractéristique est particulièrement utile pour simuler des objets lumineux comme les torches ou des flammes, mais aussi des objets luminescent comme la lueur des luciole ou les objets magiques.</p>
      <p>L’émissivité est généralement représentée sous la forme d’une valeur d’intensité, qui vient s’ajouter directement au résultat final du calcul d’éclairage. Plus cette valeur est élevée, plus l’objet semblera briller par lui-même, et son apparence se rapprochera de sa couleur d’albedo d’origine, même en l’absence de lumière ambiante ou directe. Un objet hautement émissif reste donc parfaitement visible dans l’obscurité.</p>
      <p>Dans la pratique, cela signifie que le modèle d’éclairage utilisé dans le shader doit intégrer l’émissivité comme un terme additif indépendant de l’éclairage incident. Cela permet d&#x27;assurer que les objets concernés conservent une présence visuelle forte, quelles que soient les conditions lumineuses environnantes.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/emissive_off.png"
          imageOn="/images/projects/minecraftShader/explanation/emissive_on.png"
        />
        <figcaption>Émissivité (sans / avec)</figcaption>
      </figure>
      <h2>2.2 Rugosité et réflectance</h2>
      <p>Dans la continuité de l’ajout de l’émissivité, j’ai intégré deux autres propriétés fondamentales du modèle PBR : la rugosité et la réflectance. Ces deux paramètres permettent de décrire avec plus de précision le comportement de la lumière à la surface d’un matériau, en introduisant une composante spéculaire en complément du modèle diffus.</p>
      <ul>
        <li>La rugosité contrôle le niveau de micro-aspérités de la surface. Une surface rugueuse diffuse la lumière de manière large et floue, tandis qu’une surface lisse produit une tâche spéculaire plus nette et concentrée.</li>
      </ul>
      <ul>
        <li>La réflectance détermine la quantité de lumière réfléchie par le matériau selon l’angle d’incidence. Elle joue un rôle clé dans l’intensité de cette tâche spéculaire.</li>
      </ul>
      <p>Pour simuler la composante spéculaire du rendu, j’ai implémenté le modèle de BRDF Cook-Torrance, largement utilisée dans les moteurs de rendu modernes. Ce modèle prend en compte à la fois le coefficient de Fresnel (réflectance), les microstructures de la surface et la géométrie d’occlusion entre les microfacettes (rugosité), permettant un rendu réaliste des reflets spéculaires.</p>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/specular_off.png" />
        <figcaption>sans</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/specular_on.png" />
        <figcaption>par matériaux</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/minecraftShader/explanation/specular_pbr.png" />
        <figcaption>par texel</figcaption>
      </figure>
      <p>En cohérence avec l’approche pixelisée que j’ai adoptée pour l’ensemble du pipeline de rendu, j’ai également adapté le calcul de la tâche spéculaire : au lieu d’évaluer ce reflet de manière continue sur toute la surface, il est quantifié selon la grille de texture de l’objet. Cela permet de respecter pleinement l’esthétique visuelle du jeu original, tout en apportant un niveau de détail plus poussé et fidèle aux matériaux simulés.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/specular_on.png"
          imageOn="/images/projects/minecraftShader/explanation/specular_pixelated.png"
        />
        <figcaption>Pixélisation - par matériaux (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/specular_pbr.png"
          imageOn="/images/projects/minecraftShader/explanation/specular_pbrPixelated.png"
        />
        <figcaption>Pixélisation - par texel (sans / avec)</figcaption>
      </figure>
      <h2>2.3 Réflexion</h2>
      <p>Grâce aux données de rugosité et de réflectance désormais intégrées aux matériaux, il devient possible de simuler un nouveau phénomène essentiel à la perception réaliste des surfaces : les réflexions.</p>
      <p>En effet, lorsqu’un matériau présente une faible rugosité, sa surface devient suffisamment lisse pour réfléchir son environnement selon les lois de l’optique géométrique, c’est-à-dire selon un angle miroir par rapport à l’angle d’observation. Plus la surface est polie, plus le reflet est net. La réflectance, quant à elle, permet de moduler l’intensité de la réflexion en fonction de l’angle entre l’observateur et la normale à la surface. Cet effet, connu sous le nom de Fresnel, décrit le fait que la réflexion devient plus intense à mesure que l’on observe un objet selon un angle rasant.</p>
      <p>
        Pour rendre visuellement cet effet dans le moteur de rendu, j’ai implémenté une technique appelée Screen Space Reflections (SSR), ou réflexion en espace écran. Cette méthode repose sur l’utilisation des informations déjà disponibles dans l’image (comme la profondeur et les normales de surface) pour calculer les réflexions en temps réel, sans avoir à simuler l’intégralité de la scène une seconde fois depuis chaque surface réfléchissante. Bien qu’elle ait certaines limites, notamment dans les zones hors champ ou avec des objets très fins, elle permet d’obtenir des réflexions convaincantes à moindre coût de performance, ce qui est essentiel dans un contexte de rendu temps réel comme celui de <em>Minecraft</em>.
      </p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/reflection_off.png"
          imageOn="/images/projects/minecraftShader/explanation/reflection_on.png"
        />
        <figcaption>Réflexion (sans / avec)</figcaption>
      </figure>
      <h2>2.4 Transluminescence</h2>
      <p>La transluminescence, ou subsurface scattering en anglais, désigne la capacité d’un matériau à laisser passer la lumière sous sa surface avant de la diffuser. Ce phénomène est particulièrement visible sur des matériaux organiques tels que l’herbe, les feuilles, ou les pétales de fleurs, mais peut également apparaître, de manière plus subtile, sur certains types de roche.</p>
      <p>Simuler ce comportement de manière réaliste constitue un véritable défi, surtout dans un contexte de rendu en temps réel, où les contraintes de performance sont fortes. J’ai donc opté pour une approximation simplifiée, permettant néanmoins de capturer visuellement l’essence de cet effet sans alourdir les calculs.</p>
      <p>J’ai décomposé ce phénomène en deux composantes :</p>
      <ul>
        <li>Composante diffuse : elle consiste à simuler la lumière traversant partiellement l’objet en appliquant le modèle d’éclairage diffus (vu précédemment), non pas sur la face directement éclairée, mais sur la face opposée. Cela permet de créer l’illusion que la lumière &quot;passe à travers&quot; l’objet, comme c’est souvent le cas avec les feuilles ou l’herbe éclairées à contre-jour.</li>
      </ul>
      <ul>
        <li>Composante directionnelle : cette composante dépend de la position de l’observateur. Plus l’angle de vue de la caméra s’aligne avec la direction de la source lumineuse (le soleil ou la lune), plus la lumière transmise à travers l’objet est renforcée. Cela permet de simuler un effet de transluminescence plus dynamique, perceptible principalement lorsque le joueur observe un objet à contre-jour.</li>
      </ul>
      <p>Ce traitement, bien que simplifié, renforce considérablement le réalisme visuel de certains matériaux naturels et accentue la profondeur des scènes, tout en respectant le style artistique du jeu.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/subsurface_off.png"
          imageOn="/images/projects/minecraftShader/explanation/subsurface_on.png"
        />
        <figcaption>Transluminescence (sans / avec)</figcaption>
      </figure>
      <h2>2.5 Porosité</h2>
      <p>Une autre propriété que j’ai souhaité intégrer est celle de la porosité, qui permet de faire varier l’apparence des matériaux en fonction de leur exposition à la pluie. En effet, plus un matériau est poreux, plus il absorbe l’eau qui entre en contact avec sa surface.</p>
      <p>Cette absorption a deux effets visuels principaux :</p>
      <ul>
        <li>Assombrissement du matériau : l’eau pénétrant la surface tend à réduire la diffusion de la lumière, ce qui assombrit légèrement le matériau. Cet effet est particulièrement visible sur des matériaux comme la terre, le bois ou certaines pierres.</li>
      </ul>
      <ul>
        <li>Augmentation de la réflectivité : une fine pellicule d’eau se forme à la surface du matériau une fois qu’il est saturé, ce qui modifie son interaction avec la lumière. Cette couche agit comme un miroir partiel, augmentant la réflectance du matériau, en particulier sous des angles rasants.</li>
      </ul>
      <p>L’introduction de la porosité permet ainsi de renforcer le réalisme des scènes en conditions météorologiques humides, tout en enrichissant la diversité des réactions visuelles des matériaux selon leur nature.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/porosity_off.png"
          imageOn="/images/projects/minecraftShader/explanation/porosity_on.png"
        />
        <figcaption>Porosité (sans / avec)</figcaption>
      </figure>
      <h2>2.6 Normal map</h2>
      <p>Après avoir défini en détail les propriétés physiques des matériaux, il est temps de s’intéresser à la structure des objets eux-mêmes, et plus particulièrement à la manière dont on peut enrichir leur apparence sans modifier leur géométrie.</p>
      <p>Le premier outil que j’ai mis en place pour cela est l’utilisation des normal maps. Ces textures permettent de simuler de légères variations dans l’orientation des normales à la surface des objets, sans altérer la topologie réelle du modèle. Ce procédé donne une impression de relief, en accentuant les détails tels que les motifs ou les creux d’un matériau, et améliore ainsi considérablement le réalisme du rendu visuel.</p>
      <p>Les packs de textures PBR disponibles dans la communauté incluent souvent des normal maps pour chaque texture, ce qui permet de les intégrer directement dans notre pipeline de rendu. Cependant, dans un souci d’accessibilité pour les joueurs ne souhaitant pas utiliser ces packs, j’ai également développé une méthode procédurale de génération de normal maps.</p>
      <p>Cette méthode repose sur un principe simple : pour chaque fragment de surface à évaluer, on applique une variation pseudo-aléatoire de la normale, calculée en fonction de la couleur de la texture à cet emplacement. Cela permet d’attribuer une orientation cohérente à tous les pixels partageant une même teinte, tout en introduisant une différenciation subtile entre zones de couleurs distinctes. Le résultat est une surface qui conserve l’esprit stylisé du jeu tout en gagnant en richesse visuelle grâce à l’apparence de micro-reliefs dynamiques.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/normalmap_off.png"
          imageOn="/images/projects/minecraftShader/explanation/normalmap_on.png"
        />
        <figcaption>Normal map (sans / avec)</figcaption>
      </figure>
      <h2>2.7 Parallax Occlusion Mapping</h2>
      <p>
        Pour enrichir davantage la complexité visuelle des surfaces, nous pouvons exploiter un paramètre supplémentaire : la carte d’élévation (<em>height map</em>). Cette donnée, généralement incluse dans les packs de textures PBR, permet de simuler du relief tridimensionnel sur des surfaces planes à l’aide de l’algorithme de Parallax Occlusion Mapping (POM).
      </p>
      <p>Le principe du POM repose sur une technique d’échantillonnage adaptatif. Depuis chaque point de la surface visible par la caméra, on envoie un rayon dans la direction du regard, et on recherche l’intersection entre ce rayon et la carte d’élévation. Cette opération permet de déterminer le point apparent à afficher à l’écran, en tenant compte des creux et des bosses indiqués par la height map.</p>
      <p>Cette méthode permet ainsi de simuler un effet de parallaxe accompagné d’occlusion : les détails en relief semblent se déplacer plus lentement que les zones en retrait lorsque le point de vue du joueur change, tout en permettant à certaines portions de la surface de cacher partiellement d’autres éléments en fonction de leur élévation. Le résultat visuel renforce grandement l’illusion de profondeur, tout en conservant des performances adaptées à un rendu temps réel.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/pom_off.png"
          imageOn="/images/projects/minecraftShader/explanation/pom_on.png"
        />
        <figcaption>Parallax Occlusion Mapping (sans / avec)</figcaption>
      </figure>
      <hr />
      <h1>3. Effets atmosphérique</h1>
      <p>Pour renforcer l’immersion et donner davantage de vie au monde de jeu, plusieurs effets atmosphériques ont été implémentés. Ceux-ci englobent les phénomènes visuels liés à la présence d’une atmosphère, tels que le ciel, le brouillard ou encore le vent.</p>
      <h2>3.1 Ciel</h2>
      <p>Le rendu du ciel a été repensé dans une optique plus expressive. Un premier travail a consisté à définir un dégradé de couleur variant selon la hauteur dans le ciel, permettant d’obtenir une teinte plus chaude ou plus froide entre l’horizon et le zénith. Un halo lumineux a également été ajouté autour du soleil et de la lune, simulant l’éclat diffus qu’ils génèrent.</p>
      <p>Trois palettes de couleurs distinctes permettent de refléter les différents moments de la journée : plein jour, aube/crépuscule, et nuit. En période nocturne, un champ d’étoiles généré procéduralement est affiché, apportant du relief au ciel et ajoutant à l’ambiance globale.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/ciel_aubeOff.png"
          imageOn="/images/projects/minecraftShader/explanation/ciel_aubeOn.png"
        />
        <figcaption>Nouveau ciel - matin (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/ciel_nuitOff.png"
          imageOn="/images/projects/minecraftShader/explanation/ciel_nuitOn.png"
        />
        <figcaption>Nouveau ciel - nuit (sans / avec)</figcaption>
      </figure>
      <p>Les conditions météorologiques modifient également l’apparence du ciel. Lorsqu’il pleut, celui-ci adopte un ton gris, qui s’assombri en cas d’orage. Dans ces situations, les étoiles sont masquées et la luminosité du soleil ou de la lune est fortement réduite, créant une ambiance plus lourde et plus cohérente visuellement.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/sky_rainOff.png"
          imageOn="/images/projects/minecraftShader/explanation/sky_rainOn.png"
        />
        <figcaption>Nouveau ciel - pluie (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/sky_thunderOff.png"
          imageOn="/images/projects/minecraftShader/explanation/sky_thunderOn.png"
        />
        <figcaption>Nouveau ciel - orage (sans / avec)</figcaption>
      </figure>
      <h2>3.2 Brouillard</h2>
      <p>
        Le jeu présente une particularité notable : les mondes dans lesquels évolue le joueur sont extrêmement vastes et ne peuvent pas être affichés en totalité. Pour gérer cela, une technique de chargement dynamique appelée <em>chunking</em> est utilisée, permettant d&#x27;afficher le terrain au fur et à mesure des déplacements du joueur. Cependant, cette approche engendre un problème visuel : l&#x27;absence de transition fluide entre les zones chargées et l’arrière-plan céleste.
      </p>
      <p>Pour y remédier, un brouillard atmosphérique a été mis en place. Son rôle est d&#x27;assurer un fondu progressif entre les couleurs du terrain et celles du ciel, créant ainsi une transition plus cohérente et naturelle. Ce brouillard devient également plus dense dans les zones souterraines, accentuant l’effet d’enfermement et la perte de repères visuels.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/fog_off.png"
          imageOn="/images/projects/minecraftShader/explanation/fog_on.png"
        />
        <figcaption>Nouveau ciel - orage (sans / avec)</figcaption>
      </figure>
      <p>Un second type de brouillard, plus complexe, a aussi été intégré : le brouillard volumétrique. Contrairement au brouillard traditionnel basé uniquement sur la distance entre un point de la scène et la caméra, cette version échantillonne l’espace en plusieurs segments successifs. Cela permet de créer des effets atmosphériques en volume, s’inscrivant directement dans l’environnement 3D du joueur.</p>
      <p>
        Ce principe a notamment été exploité pour simuler des light shafts (<em>rayons crépusculaires</em>), en accumulant la lumière directe diffusée dans le brouillard et en prenant en compte les zones d’ombre de façon volumétrique. La couleur de ces rayons est directement liée à celle de la lumière incidente (soleil ou lune), tandis que leur densité varie selon l&#x27;altitude : plus concentrée à basse altitude, près du niveau de la mer, et atténuée en hauteur, afin d&#x27;obtenir un rendu plus crédible et subtil.
      </p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/volfog_jourOff.png"
          imageOn="/images/projects/minecraftShader/explanation/volfog_jourOn.png"
        />
        <figcaption>Brouillard volumétrique - jour (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/volfog_nuitOff.png"
          imageOn="/images/projects/minecraftShader/explanation/volfog_nuitOn.png"
        />
        <figcaption>Brouillard volumétrique - nuit (sans / avec)</figcaption>
      </figure>
      <h2>3.3 Vent</h2>
      <p>Certains éléments de décor ont été animés de manière procédurale afin de simuler la présence du vent dans le jeu. Cette animation concerne principalement la végétation ainsi que la surface de l’eau. Pour créer ces mouvements naturels, un bruit de Perlin est utilisé directement dans le vertex shader, ce qui permet de modifier les positions des sommets de façon fluide et réaliste, simulant ainsi le balancement des feuilles, ou les ondulations de l’eau.</p>
      <p>Pour les matériaux réfléchissants comme l’eau, l’animation est également appliquée aux normal maps. Cette approche permet de faire varier les reflets en fonction de la courbure dynamique de la surface, renforçant ainsi l’impression de mouvement causé par le vent.</p>
      <p>Enfin, ces animations sont activées uniquement lorsque les objets sont situés à l’extérieur. Cette contrainte garantit un contraste marqué entre les zones intérieures, calmes et sans vent, et les zones extérieures où le mouvement dynamique est bien perceptible, renforçant ainsi l’immersion et la cohérence de l’environnement.</p>
      <p>[vidéo]</p>
      <figure>
        <Video src="/images/projects/minecraftShader/explanation/vent.mp4" type="video/mp4"/>
      </figure>
      <hr />
      <h1>4. Post-traitement</h1>
      <p>Le post-traitement regroupe l’ensemble des traitements appliqués à l’image une fois le rendu principal de la scène terminé. Ces effets interviennent généralement sur l’image finale afin d’améliorer la qualité visuelle, d’ajouter du réalisme ou encore de renforcer une ambiance particulière.</p>
      <h2>4.1 Temporal Anti-Aliasing (TAA)</h2>
      <p>Le premier effet de post-traitement mis en place est un algorithme d’anti-aliasing temporel. Bien que le jeu dispose déjà de plusieurs niveaux de détails pour accélérer le rendu et réduire l’aliasing, la nature pixelisée des graphismes et la composition du terrain en blocs génèrent encore beaucoup d’artefacts visuels, particulièrement des effets d’aliasing qui peuvent perturber l’expérience visuelle.</p>
      <p>L’implémentation du Temporal Anti-Aliasing permet de réduire efficacement ces effets en exploitant les informations temporelles entre plusieurs images consécutives, offrant ainsi un rendu plus lisse et agréable à l’œil.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/taazoom_off.png"
          imageOn="/images/projects/minecraftShader/explanation/taazoom_on.png"
        />
        <figcaption>TAA dans une image zommée (sans / avec)</figcaption>
      </figure>
      <h2>4.2 Bloom</h2>
      <p>L’un des effets de post-traitement les plus appréciés pour son impact visuel est le bloom. Cet effet vise à simuler un phénomène optique naturel qui se produit lorsque la lumière d’une source particulièrement intense dépasse la capacité de perception d’un capteur ou d’un œil, entraînant une sorte de halo lumineux qui s’étend au-delà de la source elle-même. Ce phénomène est très présent en photographie et dans la vision humaine, surtout face à des sources lumineuses fortes comme le soleil, des lampes ou des reflets.</p>
      <p>Le procédé est le suivant :</p>
      <ol type="1" start="1">
        <li>
          Sélection des zones lumineuses
          <p>La première étape consiste à identifier les pixels de l’image qui seront affectés par le bloom. Cette sélection repose sur un seuil d’intensité lumineuse : seuls les pixels dont la luminosité dépasse ce seuil sont retenus. Pour une meilleure fidélité, cette sélection intègre également la valeur d’émissivité des matériaux, qui correspond à leur capacité intrinsèque à émettre de la lumière indépendamment de l’éclairage extérieur. Ainsi, les objets lumineux et luminescent (comme certaines sources lumineuses du jeu) sont correctement pris en compte.</p>
        </li>
      </ol>
      <ol type="1" start="2">
        <li>
          Application du flou
          <p>Les pixels lumineux isolés forment une image partielle qu’il faut ensuite flouter pour créer l’effet d’étalement lumineux. On applique un flou à plusieurs échelles différentes, en utilisant plusieurs passes successives avec des niveaux de flou croissants. Ce processus génère plusieurs versions floues de l’image lumineuse, qui simulent les halos lumineux de différentes tailles et intensités.</p>
        </li>
      </ol>
      <ol type="1" start="3">
        <li>
          Combinaison et ajout au rendu final
          <p>Les différentes images floutées sont ensuite recombinées par somme pondérée, afin de créer un halo complexe et réaliste. Ce résultat est ajouté à l’image finale du rendu principal, ce qui crée l’illusion que la lumière intense déborde de ses contours initiaux.</p>
        </li>
      </ol>
      <p>Le bloom est ainsi un effet important pour enrichir le rendu visuel, renforçant la sensation de luminosité, et accentuant visuellement les zones très éclairées de l’image, ce qui ajoute du réalisme et une esthétique plus immersive.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/bloom_dayOff.png"
          imageOn="/images/projects/minecraftShader/explanation/bloom_dayOn.png"
        />
        <figcaption>Bloom - jour (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/bloom_nightOff.png"
          imageOn="/images/projects/minecraftShader/explanation/bloom_nightOn.png"
        />
        <figcaption>Bloom - nuit (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/emissive_on.png"
          imageOn="/images/projects/minecraftShader/explanation/bloom_on.png"
        />
        <figcaption>Bloom - émissivité (sans / avec)</figcaption>
      </figure>
      <h2>4.3 Profondeur de champ</h2>
      <p>
        Un autre phénomène optique intéressant à reproduire en post-traitement est la profondeur de champ (<em>depth of field</em>). Cet effet provient du fonctionnement des systèmes optiques : un objectif ne peut faire le point que sur un seul plan à la fois, appelé plan focal. Les objets situés à cette distance apparaissent nets, tandis que ceux placés devant ou derrière deviennent progressivement flous. Ce flou permet non seulement de renforcer la perception de la profondeur dans la scène, mais aussi de diriger l’attention du joueur vers un point d’intérêt visuel.
      </p>
      <h3>Segmentation de l’image</h3>
      <p>Pour simuler cet effet, l’image est d’abord segmentée en trois zones selon les valeurs de profondeur :</p>
      <ul>
        <li>Le plan proche (objet entre la caméra et le point focal)</li>
      </ul>
      <ul>
        <li>Le plan focal (à distance de mise au point)</li>
      </ul>
      <ul>
        <li>L’arrière-plan (au-delà du point focal)</li>
      </ul>
      <p>Ces zones sont déterminées à partir du depth buffer, calculé pendant le rendu. Chacune est ensuite traitée différemment pour obtenir un résultat crédible.</p>
      <h3>Application du flou</h3>
      <p>Un flou gaussien est ensuite appliqué au plan proche et à l’arrière-plan, en fonction de leur distance relative au plan focal. Plus un point s’en éloigne, plus l’intensité du flou augmente.</p>
      <p>Il est important ici de préserver la cohérence des contours entre les plans : par exemple, les pixels du plan proche ne doivent pas se mélanger avec ceux de l’arrière-plan lors du flou. Pour cela, des masques de séparation sont utilisés, permettant d’éviter les artefacts de &quot;bavures&quot; entre plans de profondeur différentes.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/dof_dayOff.png"
          imageOn="/images/projects/minecraftShader/explanation/dof_dayOn.png"
        />
        <figcaption>Profondeur de champ - jour (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/dof_nightOff.png"
          imageOn="/images/projects/minecraftShader/explanation/dof_nightOn.png"
        />
        <figcaption>Profondeur de champ - nuit (sans / avec)</figcaption>
      </figure>
      <h3>Effet de Bokeh</h3>
      <p>Enfin, un effet de Bokeh est ajouté aux objets lumineux situés en dehors de la mise au point. Le Bokeh désigne ces formes floues et diffuses que produisent les sources de lumière lorsqu&#x27;elles sont hors focus, souvent visibles en photographie nocturne.</p>
      <p>Dans ce projet, afin de conserver la cohérence avec le style graphique pixelisé du jeu, les formes de Bokeh ne sont pas circulaires comme en photographie classique, mais carrées. Cela renforce à la fois l’aspect stylistique du rendu et l’originalité de l’intégration de l’effet.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/dof_dayOn.png"
          imageOn="/images/projects/minecraftShader/explanation/dof_dayBokeh.png"
        />
        <figcaption>Effet de Bokeh - jour (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/dof_nightOn.png"
          imageOn="/images/projects/minecraftShader/explanation/dof_nightbokeh.png"
        />
        <figcaption>Effet de Bokeh - nuit (sans / avec)</figcaption>
      </figure>
      <h2>4.4 État du joueur</h2>
      <p>Pour renforcer l’immersion et le lien entre l’état du personnage et la perception visuelle du joueur, plusieurs effets de post-traitement contextuels ont été mis en place. Ces effets ne sont pas seulement esthétiques, ils participent à la lisibilité du gameplay en transmettant des informations physiologiques du personnage incarné par le joueur.</p>
      <h3>Santé</h3>
      <p>Lorsque le personnage subit des dégâts et voit ses points de vie diminuer, un effet d’aberration chromatique est progressivement appliqué à l’image. L’amplitude de cet effet augmente de manière non linéaire à mesure que la santé chute.</p>
      <p>En plus de l’intensité croissante, une pulsation temporelle est ajoutée, modulant l’effet à une fréquence variable. Plus le niveau de santé est bas, plus cette pulsation s’accélère, simulant un battement cardiaque affolé, ce qui accentue l’urgence de la situation de manière perceptible.</p>
      <figure>
        <Video src="/images/projects/minecraftShader/explanation/vie.mp4" type="video/mp4"/>
      </figure>
      <h3>Faim</h3>
      <p>Le système de faim affecte directement les capacités du joueur, notamment sa capacité à courir. Pour renforcer cette contrainte de gameplay, un flou de mouvement a été intégré et devient progressivement plus prononcé à mesure que le niveau de satiété baisse.</p>
      <p>Ce flou donne une impression de lourdeur ou de léthargie, traduisant visuellement la fatigue croissante du personnage. Cet effet rend plus tangible l’importance de la gestion des ressources alimentaires dans l’univers du jeu.</p>
      <figure>
        <Video src="/images/projects/minecraftShader/explanation/faim.mp4" type="video/mp4"/>
      </figure>
      <h3>Apnée</h3>
      <p>Lorsqu’un joueur reste sous l’eau sans respirer, une désaturation progressive des couleurs est appliquée à l’écran. Cette transition vers une palette plus terne permet de transmettre visuellement la perte d’oxygène, en évoquant un état de conscience altérée ou de vision affaiblie.</p>
      <p>Une fois le niveau d’oxygène épuisé, le personnage commence à perdre de la vie à intervalles réguliers. Pour accentuer ce danger, une pulsation noire est superposée à l’image, synchronisée avec le rythme des dégâts reçus. Ce clignotement donne un sentiment d’étouffement imminent, tout en servant de signal critique sans avoir recours uniquement à l’interface.</p>
      <figure>
        <Video src="/images/projects/minecraftShader/explanation/noyade.mp4" type="video/mp4"/>
      </figure>
      <hr />
      <h1>5. Autres Mondes</h1>
      <p>L’univers du jeu ne se limite pas à un environnement unique : plusieurs mondes distincts ou types de terrains spécifiques coexistent, chacun présentant des contraintes visuelles particulières. Ces variations nécessitent des adaptations ciblées du pipeline de rendu pour garantir une immersion cohérente.</p>
      <h2>5.1 Environnement sous-marin</h2>
      <p>Parmi ces mondes, les zones aquatiques offrent des conditions visuelles radicalement différentes, et exigent un traitement graphique spécifique pour rendre leur ambiance crédible et esthétique.</p>
      <h3>Absorption lumineuse</h3>
      <p>Lorsqu’un joueur entre sous l’eau, le spectre lumineux perçu change drastiquement. Cet effet est simulé en filtrant dynamiquement la lumière ambiante et directe, ainsi que le brouillard atmosphérique, afin de reproduire le phénomène d’absorption spectrale. Les longueurs d’onde les plus chaudes (rouge, orange) disparaissent rapidement, laissant une dominante bleu caractéristique des environnements subaquatiques.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/underwater_off.png"
          imageOn="/images/projects/minecraftShader/explanation/underwater_on.png"
        />
        <figcaption>Absorption (sans / avec)</figcaption>
      </figure>
      <h3>Caustiques</h3>
      <p>Pour enrichir le rendu des fonds marins, des caustiques animées sont projetées sur les surfaces immergées, simulant les motifs lumineux créés par la réfraction des rayons solaires à travers la surface agitée de l’eau. La méthode utilisé repose sur l’usage direct de la texture animée de la surface de l’eau, permettant de garder un style plus proche du jeu de base.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/caustic_off.png"
          imageOn="/images/projects/minecraftShader/explanation/caustic_vanilla.png"
        />
        <figcaption>Caustique (sans / avec)</figcaption>
      </figure>
      <h3>Lumière volumétrique sous-marine</h3>
      <p>Les puis de lumière visibles sous l’eau sont générés en utilisant un modèle volumétrique similaire à celui utilisé dans l’atmosphère, mais ici animé par du bruit de Perlin 3D afin de simuler les variations de l’intensité lumineuse dû au mouvement présent à la surface de l’eau.</p>
      <p>Ce procédé crée des colonnes de lumière fluctuantes, renforçant l’immersion et la dynamique des environnements marin.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/underwater_on.png"
          imageOn="/images/projects/minecraftShader/explanation/underwater_volLight.png"
        />
        <figcaption>Lumière volumétrique (sans / avec)</figcaption>
      </figure>
      <h3>Réfraction</h3>
      <p>Enfin, une légère distorsion de la scène est appliquée lorsque le joueur se trouve sous l’eau. Cet effet de réfraction repose sur la modification des coordonnées d’échantillonnage dans le fragment shader, déviées à l’aide d’un bruit directionnel simulant les déformations optiques dû au mouvement du milieu aquatique. Cette distorsion légère donne une sensation de submersion et de vision réfracté à travers le liquide.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/underwater_volLight.png"
          imageOn="/images/projects/minecraftShader/explanation/underwater_refraction.png"
        />
        <figcaption>Réfraction (sans / avec)</figcaption>
      </figure>
      <h2>5.2 Nether</h2>
      <p>Le Nether constitue l’un des environnements les plus hostiles et distincts du jeu. Cette dimension infernale, caractérisée par des paysages de roche volcanique, de lacs de lave et une atmosphère suffocante, impose un traitement visuel entièrement spécifique pour renforcer sa singularité et son intensité dramatique.</p>
      <h3>Altération de l’atmosphère</h3>
      <p>La première adaptation visuelle consiste à modifier la teinte globale des lumières et du brouillard en fonction de la zone explorée dans le Nether. L’éclairage est alors filtrer par les couleurs correspondant au biome dans lequel le joueur se trouve, rejoignant la teinte du brouillard. Ces variations permettent la cohérence chromatique de l’environnement.</p>
      <p>En parallèle, l’intensité de la lumière ambiante a été augmentée dans cette dimension. Cela permet de simuler la manière dont la lumière de la lave et des matériaux incandescents semble inonder l’espace environnant, tout en améliorant la lisibilité du terrain.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/nether_off.png"
          imageOn="/images/projects/minecraftShader/explanation/nether_on.png"
        />
        <figcaption>Atmosphère (sans / avec)</figcaption>
      </figure>
      <h3>Brouillard volumétrique</h3>
      <p>Un brouillard volumétrique a été ajouté pour simuler de larges panaches de fumée s’élevant verticalement, symbolisant les émanations des lacs de laves ou suggérant une activité géothermique intense. Ce brouillard animé est contrôlé à l’aide d’un bruit de Perlin 3D appliqué dans le fragment shader, permettant de générer des mouvements fluides et organiques.</p>
      <p>Sa densité est proportionnelle à l’altitude : plus on se rapproche de la hauteur des lacs de lave, plus ces fumées sont présentes et opaques ; à l’inverse, elles s’estompent à mesure que l’on s’élève au-dessus du niveau de la lave.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/nether_on.png"
          imageOn="/images/projects/minecraftShader/explanation/nether_vollight.png"
        />
        <figcaption>Brouillard volumétrique (sans / avec)</figcaption>
      </figure>
      <h3>Animation thermique de la végétation</h3>
      <p>Les rares éléments végétaux du Nether bénéficient d’un traitement spécifique. Leurs mouvements sont animés de manière à évoquer des courants thermiques ascendants. Contrairement au vent classique utilisé dans les zones tempérées, l’animation repose ici sur des perturbations verticales, générées par un bruit de Perlin 2D, simulant les ondulations provoquées par la chaleur.</p>
      <figure>
        <Video src="/images/projects/minecraftShader/explanation/netherHeat.mp4" type="video/mp4"/>
      </figure>
      <h3>Réfraction thermique</h3>
      <p>Pour souligner la chaleur ambiante omniprésente, un effet de réfraction thermique est appliqué sur l’image, en particulier autour des sources de chaleur comme les lacs de lave. Cet effet repose sur la distorsion dynamique de l’image, basée sur un bruit de Perlin. Le rendu final rappelle les vagues de chaleur visibles dans l’air au-dessus d’un feu ou d’un désert.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/nether_vollight.png"
          imageOn="/images/projects/minecraftShader/explanation/nether_refraction.png"
        />
        <figcaption>Réfraction (sans / avec)</figcaption>
      </figure>
      <h2>5.3 End</h2>
      <p>La dernière dimension explorée dans le jeu est appelée l’End. Il s’agit d’un monde étrange, composé d’îles rocheuses qui semblent léviter dans le vide, suspendues dans une atmosphère énigmatique.</p>
      <h3>Ambiance lumineuse</h3>
      <p>Pour renforcer cette ambiance surnaturelle, la lumière ambiante a été ajustées afin d’adopter une teinte violette froide. Ce choix permet d’évoquer l’étrangeté cosmique de cet environnement et de marquer une rupture nette avec les autres dimensions du jeu.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/end_base.png"
          imageOn="/images/projects/minecraftShader/explanation/end_lighting.png"
        />
        <figcaption>Lumière ambiante (sans / avec)</figcaption>
      </figure>
      <h3>Apparence du ciel</h3>
      <p>Le ciel a été changé en une teinte noire, évoquant le vide spatial. Ce fond sombre est ponctué d’étoiles générées procéduralement, renforçant l’aspect infini et isolé de l’End. Cette apparence évoque à la fois l’espace intersidéral et un monde détaché des lois naturelles.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/end_lighting.png"
          imageOn="/images/projects/minecraftShader/explanation/end_sky.png"
        />
        <figcaption>Ciel étoilé (sans / avec)</figcaption>
      </figure>
      <h3>Effets volumétriques</h3>
      <p>Des faisceaux lumineux colorés ont été intégrés sous forme de halos volumétriques. Ces effets utilisent un échantillonnage volumétrique en espace écran (similaire au brouillard volumétrique), et apparaissent ponctuellement dans l’environnement. Ils donnent l’impression que certaines zones sont traversées par des flux d’énergie, évoquant des aurores boréales, accentuant l’ambiance énigmatique de cette dimension.</p>
      <figure>
        <ImageComparison 
          imageOff="/images/projects/minecraftShader/explanation/end_sky.png"
          imageOn="/images/projects/minecraftShader/explanation/end_volLight.png"
        />
        <figcaption>Effets volumétriques (sans / avec)</figcaption>
      </figure>
      <h1>🖼️ Gallerie</h1>
      <hr />
      <p>Voici quelques images permettant de comparer différentes scènes du jeu avec les graphismes originels (à gauche) et les résultats obtenus avec mon shader (à droite) :</p>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/pbr" />
        <figcaption>Intérieur (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/cover" />
        <figcaption>Bord de lac (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/savane" />
        <figcaption>Savane (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/jungle" />
        <figcaption>Jungle (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/pine" />
        <figcaption>Forêt de pins (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/village" />
        <figcaption>Village de nuit (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/badland" />
        <figcaption>Grand canyon (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/ice" />
        <figcaption>Terres gelées (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/surface/mangrove" />
        <figcaption>Mangrove (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/cave/lush" />
        <figcaption>Caverne luxuriante (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/cave/deepdark" />
        <figcaption>Caverne sombre (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/nether/netherredforest" />
        <figcaption>Nether : forêt rouge (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/nether/netherblueforest" />
        <figcaption>Nether : forêt bleue (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/nether/netherdelta" />
        <figcaption>Nether : deltas de basalte (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/nether/nethersoul" />
        <figcaption>Nether : vallée des âmes (sans / avec)</figcaption>
      </figure>
      <figure>
        <ImageComparison image="/images/projects/minecraftShader/galerie/end/endcity" />
        <figcaption>End : cité (sans / avec)</figcaption>
      </figure>
      <h1>Ressources supplémentaires</h1>
      <hr />
    </div>
  );
}
