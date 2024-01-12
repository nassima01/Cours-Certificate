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
              <p className="text-gray-400">Éthique en Machine Learning : Enjeux, Confidentialité des Données et Responsabilité Algorithmique</p>
             
              <div className="mx-auto w-full max-w-screen-xl">
                  <YouTube videoId="yN7ypxC7838" opts={videoOptions} onReady={onReady} />
             </div>
              <p className="mt-8 text-sm text-gray-400">
              
Le troisième paragraphe de ce chapitre offre une plongée approfondie dans les enjeux éthiques prégnants et les défis fondamentaux qui accompagnent le domaine du Machine Learning. Cette exploration méticuleuse s'attarde sur trois aspects cruciaux : la confidentialité des données, la discrimination algorithmique et les biais inhérents aux modèles. En mettant en lumière ces problématiques complexes, le paragraphe cherche à sensibiliser le lecteur à la nécessité impérieuse de concevoir des systèmes équitables et responsables dans le cadre du développement des technologies de l'apprentissage automatique.
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