import React from 'react';
import Header from '../component/Header';
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';
import YouTube from 'react-youtube';

export const Paragraph8 = () => {
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
              <p className="text-gray-400"> l'optimisation des hyperparamètres</p>
              <div className="mx-auto" >
                  <YouTube videoId="ZVxwnX-c6Qg" opts={videoOptions} onReady={onReady} />
             </div> 
              <p className="mt-8 text-sm text-gray-400">
              l'optimisation des hyperparamètres, un processus visant à ajuster les paramètres du modèle pour améliorer ses performances. Nous examinerons des techniques telles que la recherche par grille, la recherche aléatoire et l'optimisation bayésienne pour trouver les combinaisons optimales d'hyperparamètres.
              </p>
                          
              <div className="mt-3">
             
              </div>
            </div>
          </div>
        </div>
    );
  };

  export default Paragraph8;
