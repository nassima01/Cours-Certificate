import React from 'react';
import Header from '../component/Header';
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';
import YouTube from 'react-youtube';
export const Paragraph2 = () => {
  const { currentColor, screenSize } = useStateContext();
  const videoOptions = {
    height: '315',
    width: '60%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const onReady = (event) => {
    // Fonction à exécuter lorsque la vidéo est prête
    event.target.pauseVideo(); // Vous pouvez ajouter d'autres actions ici si nécessaire
      };
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl m-3 text-center">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Paragraph 2</p>
        <button type="button" className="text-xl font-semibold text-gray-500">
          <IoIosMore />
        </button>
      </div>
      <div className="mt-10">
        <div className="mt-8"> 
          <p className="font-semibold text-xl text-lg">Prétraitement des données et Feature Engineering</p>
          <p className="text-xl text-gray-400">Techniques Avancées de Feature Engineering</p>
          <div className="mx-auto w-full max-w-screen-xl">
                  <YouTube videoId="GduT2ZCc26E" opts={videoOptions} onReady={onReady} />
             </div>
          <p className="mt-8 text-xl text-gray-400">
          
Les principaux algorithmes de Machine Learning couvrent un large éventail de techniques, chacune adaptée à des types spécifiques de problèmes. Voici une présentation succincte des principaux algorithmes :

Régression Linéaire :

Description : Modèle utilisé pour prédire une variable continue en fonction de variables indépendantes. Il suppose une relation linéaire entre les caractéristiques et la cible.
Applications : Prévisions économiques, modélisation de la croissance, analyse de tendances.
Régression Logistique :

Description : Adaptée aux problèmes de classification binaire, elle est utilisée pour estimer la probabilité qu'un exemple appartienne à une classe particulière.
Applications : Prévision de la probabilité de défaut de paiement, détection de spam.
Machines à Vecteurs de Support (SVM) :

Description : Algorithme de classification qui trouve un hyperplan optimal pour séparer les données en différentes classes. Peut être étendu à des problèmes de régression.
Applications : Classification d'images, détection d'anomalies, prédiction de valeurs numériques.
Arbres de Décision :

Description : Structure arborescente de décisions basée sur des règles conditionnelles. Ils sont utilisés pour la classification et la régression.
Applications : Diagnostic médical, recommandation de produits, prévision de l'attrition des employés.
Random Forest :

Description : Ensemble d'arbres de décision, où chaque arbre "vote" pour la classe prédite. Réduit le surajustement et améliore la précision.
Applications : Classification d'images, prévision de la demande, détection de fraudes.
Réseaux de Neurones Profonds :

Description : Modèle inspiré du fonctionnement du cerveau, composé de couches de neurones interconnectés. Convient à des tâches complexes et à des données non linéaires.
Applications : Traitement d'images, reconnaissance vocale, traduction automatique.
K-Nearest Neighbors (KNN) :

Description : Algorithme basé sur la similarité des exemples. Classifie un point en se basant sur les classes majoritaires des k voisins les plus proches.
Applications : Recommandation de produits, prédiction de tendances, classification d'images.
Clustering K-Means :

Description : Algorithme de regroupement qui partitionne les données en k groupes homogènes en minimisant la variance intra-groupe.
Applications : Segmentation de marché, regroupement de documents, compression d'images.
Chaque algorithme a ses propres forces et faiblesses, et le choix dépend du type de problème, de la nature des données et des objectifs spécifiques de la tâche de Machine Learning à accomplir.</p>
           <div className="mt-3">
            <Button_bg
              color="white"
              text="Explore"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paragraph2;
