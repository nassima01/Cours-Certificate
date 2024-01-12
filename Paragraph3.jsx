import React from 'react';
import Header from '../component/Header';
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';
import YouTube from 'react-youtube';
export const Paragraph3 = () => {
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
          <p className="text-xl text-gray-400">Évaluer Objectivement les Modèles</p>
          <div className="mx-auto w-full max-w-screen-xl">
                  <YouTube videoId="bCEbHuHQaUc" opts={videoOptions} onReady={onReady} />
             </div>
          <p className="mt-8 text-xl text-gray-400">
          Dans le troisième paragraphe de ce chapitre, nous aborderons les enjeux éthiques et les défis associés au Machine Learning. Cette section englobera des discussions approfondies sur plusieurs aspects cruciaux, mettant en lumière les préoccupations éthiques croissantes dans le domaine de l'apprentissage automatique.

Confidentialité des données :
La confidentialité des données est une préoccupation majeure, surtout dans le contexte où les modèles de Machine Learning peuvent traiter des informations sensibles. Des protocoles de protection des données, tels que l'anonymisation et le chiffrement, sont essentiels pour préserver la vie privée des individus tout au long du processus d'apprentissage et d'inférence.

Discrimination algorithmique :
Les modèles de Machine Learning peuvent inadvertamment refléter et amplifier les biais présents dans les données d'entraînement. Cela peut conduire à une discrimination algorithmique, où les décisions du modèle favorisent ou défavorisent certains groupes sociaux. Il est crucial de mettre en place des mécanismes pour détecter, atténuer et prévenir ces biais indésirables.

Biais inhérent aux modèles :
Les modèles de Machine Learning peuvent être influencés par des biais existants dans les données d'entraînement, résultant en des prédictions injustes ou discriminatoires. Il est important d'adopter des pratiques de collecte de données éthiques et de développer des techniques d'atténuation des biais pour garantir que les modèles ne reproduisent pas les inégalités existantes.

Systèmes équitables et responsables :
L'importance de développer des systèmes équitables et responsables est soulignée. Cela implique d'adopter des normes éthiques strictes, de promouvoir la transparence des modèles, et d'impliquer les parties prenantes dans le processus décisionnel. Les organisations sont encouragées à intégrer des principes éthiques tout au long du cycle de vie des projets de Machine Learning.

En résumé, cette section explorera les dimensions éthiques liées au Machine Learning, en mettant en avant les défis associés à la confidentialité des données, la discrimination algorithmique et les biais inhérents aux modèles. Elle insistera sur la nécessité de promouvoir des pratiques éthiques et de développer des modèles qui respectent les principes de l'équité et de la responsabilité, garantissant ainsi un déploiement socialement responsable des technologies de Machine Learning.</p>
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

export default Paragraph3;
