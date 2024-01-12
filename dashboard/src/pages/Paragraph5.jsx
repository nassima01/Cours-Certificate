import React from 'react';
import Header from '../component/Header';
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';
import YouTube from 'react-youtube';




export const Paragraph5 = () => {
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
              <p className="text-xl font-semibold">Paragraph 5</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
              </button>
          </div>
          <div className="mt-10">
            <div className="mt-8">
              <p className="font-semibold text-lg">Introduction au Machine Learning</p>
              <p className="text-gray-400">Exploration des Principaux Algorithmes en Machine Learning : Une Vue d'Ensemble et des Applications Variées</p>
                {/* Utilisation de react-youtube pour intégrer la vidéo */}
                <div className="mx-auto w-full max-w-screen-xl">
                  <YouTube videoId="PeMlggyqz0Y" opts={videoOptions} onReady={onReady} />
             </div>
              <p className="mt-8 text-sm text-gray-400">
              Dans le deuxième paragraphe, nous plongerons dans les principaux algorithmes du Machine Learning. Cela inclut les algorithmes classiques tels que la régression linéaire, les machines à vecteurs de support (SVM), les arbres de décision, ainsi que les méthodes plus récentes comme les réseaux de neurones profonds. Chaque algorithme sera décrit succinctement, mettant en lumière ses forces, ses faiblesses et les scénarios d'application appropriés.
              </p>
              <div className="mt-3">
             {/* <Button_bg
                color="white"
                bgColor={currentColor}
                text="Sign Up"
                borderRadius="10px"
              />*/}
              </div>
              

            </div>
          </div>
        </div>
    );
  };

  export default Paragraph5;