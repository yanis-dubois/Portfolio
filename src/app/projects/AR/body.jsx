import {StaticImg} from "../../../utils/media.jsx"

export function Body() {
  return (
    <div>
      <h1>Contexte</h1>
      <hr />
      <div>
        <div>
          <p>Dans le cadre du projet de fin d’études du master informatique, spécialité <em>Image et Son</em>, à l’université de Bordeaux, j’ai participé au développement d’une application de visualisation d’objets 3D en réalité mixte, en collaboration avec Florian Bernadet, Maxime Oçafrain et Coralie Rigaut. Le projet ciblait notamment une intégration avec le casque Meta Quest 3, dans une optique d’exploration interactive et immersive.</p>
          <p>Cette initiative nous a été proposée par Fabien Baldacci et Pascal Desbarats, chercheurs au LaBRI, qui nous ont accompagnés tout au long du développement.</p>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/AR/XR_visulizer.png" />
            <figcaption>Exemple de visualisation d’objets en réalité mixte</figcaption>
          </figure>
        </div>
      </div>
      <h1>Idée générale</h1>
      <hr />
      <h2>Introduction</h2>
      <p>Dans le cadre de ce projet, deux applications ont été développées pour permettre la visualisation de données 3D dans un environnement en réalité mixte. Le travail a été réparti en deux axes :</p>
      <ol type="1" start="1">
        <li>Une première application, orientée vers un usage grand public, permettait la visualisation d’objets 3D au format OBJ.</li>
      </ol>
      <ol type="1" start="2">
        <li>La seconde, pensée pour un contexte plus scientifique, visait à établir une communication avec le logiciel 3DSlicer, afin de visualiser des données médicales ou scientifiques en réalité mixte.</li>
      </ol>
      <p>Ces deux applications partagent une base technique commune, permettant le chargement, l’affichage et l’interaction avec des objets 3D dans un environnement immersif.</p>
      <h2>Visualisation de fichiers OBJ</h2>
      <p>La première application permettait d’importer et de visualiser des fichiers OBJ dans une scène en réalité mixte. Plusieurs modes de chargement ont été implémentés : depuis le web via une URL ou via un serveur Samba (SMB). Tous les chargements ont été rendus asynchrones, afin d’assurer la fluidité de l’application pendant le traitement des fichiers.</p>
      <p>Une particularité du format OBJ est qu’il peut contenir plusieurs objets distincts dans un même fichier. Dans ce cas, nous avons choisi de conserver leurs positions relatives afin de respecter leur structure.</p>
      <p>Voici deux exemples de fichier OBJ importé dans une scène en réalité mixte :</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <StaticImg src="/images/projects/AR/sphere.jpg" />
            <figcaption>Fichier OBJ simple importé dans la scène</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/AR/submesh.jpg" />
            <figcaption>Fichier OBJ composé de plusieurs objets importé dans la scène</figcaption>
          </figure>
        </div>
      </div>
      <h2>Visualisation de données chargées depuis 3DSlicer</h2>
      <p>La seconde application avait pour objectif de faire dialoguer le logiciel 3DSlicer avec notre environnement de réalité mixte. Pour cela, nous avons utilisé le protocole réseau OpenIGTLink, permettant de récupérer dynamiquement des maillages 3D générés par 3DSlicer, puis de les importer dans notre application.</p>
      <p>Ce système permet à un utilisateur d’examiner en réalité mixte des données médicales ou scientifiques issues de 3DSlicer, avec des possibilités d’interaction en temps réel.</p>
      <p>On peut voir sur les images présente ci-dessous, un exemple de données 3D visualisé depuis 3DSlicer, puis importé dans une scène de réalité mixte et manipulable par un utilisateur.</p>
      <figure>
        <StaticImg src="/images/projects/AR/slicer.jpg" />
        <figcaption>Fenêtre de 3DSlicer permettant le lancement d’un serveur OpenIGTLink (à gauche) et la visualisation de données 3D (à droite).</figcaption>
      </figure>
      <figure>
        <StaticImg src="/images/projects/AR/hand.jpg" />
        <figcaption>Maillage provenant de 3DSlicer importé dans une scène en réalité mixte</figcaption>
      </figure>
      <h2>Base commune</h2>
      <p>Les deux applications partagent un socle fonctionnel commun destiné à l’interaction avec les objets 3D, ainsi qu’une interface utilisateur adaptée à la réalité mixte.</p>
      <p>Concernant les interactions, nous avons mis en place plusieurs fonctionnalités essentielles : déplacement, rotation, mise à l’échelle, affichage à taille réelle, et suppression des objets.</p>
      <p>Côté interface, différents éléments ont été intégrés pour faciliter l’usage : formulaire, clavier virtuel, et menu interactif adapté à une utilisation en réalité mixte.</p>
      <figure>
        <StaticImg src="/images/projects/AR/607ee0ec-e73e-4cb4-b31d-00c9e7b7d77f.png" />
        <figcaption>Utilisateur ayant rentré une URL à l’aide du clavier virtuel</figcaption>
      </figure>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <figure>
            <StaticImg src="/images/projects/AR/UI_SMB.png" />
            <figcaption>Formulaire relatif à l’importation de fichier via SMB</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <StaticImg src="/images/projects/AR/53ae139d-6913-4d1e-b8a8-5735b3d804cf.png" />
            <figcaption>Menu principal</figcaption>
          </figure>
        </div>
      </div>
      <p></p>
      <h1>Ressources supplémentaires</h1>
      <hr />
    </div>
  );
}
