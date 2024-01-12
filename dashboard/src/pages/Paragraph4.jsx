import React from 'react';
import Header from '../component/Header';
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';
import YouTube from 'react-youtube';



export const Paragraph4 = () => {
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
            <p className="text-xl font-semibold">Paragraph 4</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <div className="mt-8">
              <p className="font-semibold text-lg">Introduction au Machine Learning</p>
              <p className="text-gray-400">Concepts Fondamentaux et Applications Variées</p>
              
              {/* Utilisation de react-youtube pour intégrer la vidéo */}
              <div className="mx-auto ">
                  <YouTube videoId="6M5VXKLf4D4" opts={videoOptions} onReady={onReady} />
             </div>
    
              <p className="mt-8 text-sm text-gray-400">
                Le Machine Learning, ou apprentissage automatique, est une branche de l'intelligence artificielle qui permet aux systèmes informatiques d'apprendre à partir de données sans être explicitement programmés. Ce chapitre offre une vue d'ensemble des concepts fondamentaux du Machine Learning, en commençant par définir les différents types d'apprentissage, tels que l'apprentissage supervisé, non supervisé et par renforcement. Nous explorerons également les applications diverses du Machine Learning dans des domaines tels que la reconnaissance d'images, le traitement du langage naturel, et la prise de décision.
              </p>
              <div className="mt-3">
                {/* Ajoutez ici d'autres éléments ou composants au besoin */}
              </div>
            </div>
          </div>
        </div>
      );
    };
  export default Paragraph4;