import React from 'react';
import Header from '../component/Header';
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';
import YouTube from 'react-youtube';

export const Paragraph7 = () => {
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
              <p className="text-xl font-semibold"></p>
              <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
              </button>
          </div>
          <div className="mt-10">
            <div className="mt-8">
              <p className="font-semibold text-lg">Évaluation des modèles et Optimisation des hyperparamètres</p>
              <p className="text-gray-400">L'importance de l'évaluation précise des modèles pour leur pertinence dans les situations réelles </p>
              <div className="mx-auto" >
                  <YouTube videoId="YjojuYjQ-F0" opts={videoOptions} onReady={onReady} />
             </div>
              <p className="mt-8 text-sm text-gray-400">
              L'évaluation correcte des modèles est cruciale pour garantir leur pertinence dans des situations du monde réel. Dans le premier paragraphe, nous aborderons les métriques d'évaluation couramment utilisées, telles que la précision, le rappel, la F1-score et la courbe ROC. Nous expliquerons comment choisir la métrique appropriée en fonction du problème spécifique que le modèle cherche à résoudre.
              </p>
              <div className="mt-3">
              
              </div>
            </div>
          </div>
        </div>
    );
  };

  export default Paragraph7;
