import React from 'react';
import Header from '../component/Header';
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';
import YouTube from 'react-youtube';

export const Paragraph1 = () => {
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
          <p className="font-semibold text-xl text-lg"> Prétraitement des données et Feature Engineering</p>
          <p className="text-gray-400 text-xl text-lg">Fondamentaux du Prétraitement des Données</p>
          <div className="mx-auto w-full max-w-screen-xl">
                  <YouTube videoId="HXuLN7EbWn8" opts={videoOptions} onReady={onReady} />
             </div>
          <p className="mt-8 text-xl  text-gray-400">
          Le succès du Machine Learning dépend en grande partie de la qualité des données sur lesquelles les modèles sont formés. Le prétraitement des données et l'ingénierie des caractéristiques jouent un rôle crucial dans l'amélioration de la qualité des données et, par conséquent, dans la création de modèles performants. Dans cette première section, nous explorerons en détail les étapes essentielles du prétraitement des données.
           
          Gestion des valeurs manquantes :
          L'une des premières étapes consiste à gérer les valeurs manquantes. 
          Les données incomplètes peuvent introduire des biais dans les modèles. Différentes approches peuvent être utilisées, telles que l'imputation des valeurs manquantes en utilisant la moyenne, la médiane ou d'autres techniques avancées.
          Encodage des variables catégorielles :
          Les modèles de Machine Learning nécessitent souvent des données numériques, ce qui signifie qu'il est nécessaire de convertir les variables catégorielles en une forme appropriée. 
          Les méthodes courantes incluent l'encodage one-hot, où chaque catégorie devient une nouvelle colonne binaire, ou l'encodage ordinal, qui attribue des nombres aux catégories en fonction de leur ordre.
          Normalisation des données :
          La normalisation des données est cruciale pour garantir que toutes les caractéristiques ont une échelle comparable.
          Cela évite que certaines caractéristiques aient un poids disproportionné dans le modèle en raison de leurs unités d'échelle différentes. Des techniques telles que la standardisation (soustraction de la moyenne et division par l'écart-type) sont couramment utilisées.
          Élimination des outliers :
          Les outliers, ou valeurs aberrantes, peuvent avoir un impact significatif sur la performance des modèles.
          Identifier et éliminer ces valeurs extrêmes peut améliorer la robustesse des modèles. Des méthodes statistiques ou des approches basées sur des seuils peuvent être utilisées pour détecter et traiter les outliers.
        
        En résumé, le prétraitement des données est une étape fondamentale pour garantir la fiabilité des modèles de Machine Learning. 
        En se concentrant sur la gestion des valeurs manquantes, l'encodage des variables catégorielles, la normalisation des données et l'élimination des outliers, on peut créer des ensembles de données propres et optimisés pour la formation de modèles performants. Cela contribue à maximiser le potentiel de prédiction et la généralisation des modèles dans divers contextes.</p>
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

export default Paragraph1;
