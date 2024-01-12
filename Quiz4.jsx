import React, { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';



const Quiz4 = () => {
    const questions = [
      {
        question: "Quelle est l'utilité du prétraitement des données dans le contexte du Machine Learning?",
        options: [
          "a) Améliorer la lisibilité des données",
          "b) Réduire la taille des données",
          "c) Préparer les données pour l'entraînement d'un modèle",
          "d) Supprimer les outliers des données"
        ],
        correctAnswer: "c"
      },
      {
        question: "Quelles sont certaines techniques courantes de prétraitement des données?",
        options: [
          "a) Normalisation des données",
          "b) Échantillonnage aléatoire des données",
          "c) Suppression des variables catégorielles",
          "d)  Fusion des données"
        ],
        correctAnswer: "a"
      },
      {
        question: "Pourquoi est-il important de prétraiter les données avant de les utiliser pour entraîner un modèle?",
        options: [
          "a) Pour améliorer la précision du modèle",
          "b) réduire le temps d'entraînement du modèle",
          "c) faciliter l'interprétation des résultats du modèle",
          "d) éviter les erreurs de calcul"
        ],
        correctAnswer: "a"
      }
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);
  
    const handleOptionChange = (selectedOption) => {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQuestion] = selectedOption;
      setUserAnswers(updatedAnswers);
    };
  
    const handleNextClick = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    };
  
    const calculateScore = () => {
      let correctAnswers = 0;
  
      userAnswers.forEach((userAnswer, index) => {
        if (questions[index] && userAnswer === questions[index].correctAnswer) {
          correctAnswers++;
        }
      });
  
      return (correctAnswers / questions.length) * 100;
    };
  
    const resetQuiz = () => {
      setCurrentQuestion(0);
      setUserAnswers(Array(questions.length).fill(null));
      setShowResult(false);
    };
  
    return (
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl m-3 text-center">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">Quiz - Chapitre1</p>
          <button type="button" className="text-xl font-semibold text-gray-500">
            <IoIosMore />
          </button>
        </div>
        {showResult ? (
          <div>
            <h3 className="text-2xl mb-4">Résultats du Quiz:</h3>
            {userAnswers.map((answer, index) => (
              <p key={index} className="text-lg">{`Question ${index + 1}: Réponse - ${answer}`}</p>
            ))}
            <p className="text-lg">Pourcentage de réponses correctes: {calculateScore()}%</p>
            <Button_bg
              color="white"
              bgColor="currentColor"
              text="Recommencer"
              borderRadius="10px"
              onClick={resetQuiz}
            />
          </div>
        ) : (
          <div>
            {questions[currentQuestion] && (
              <>
                <h3 className="text-2xl mb-4">{questions[currentQuestion].question}</h3>
                <form>
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index}>
                      <label className="text-lg">
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          value={option.charAt(0)}
                          checked={userAnswers[currentQuestion] === option.charAt(0)}
                          onChange={() => handleOptionChange(option.charAt(0))}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </form>
                <Button_bg
                  color="blue"
                  bgColor="currentColor"
                  text="Suivant"
                  borderRadius="10px"
                  onClick={handleNextClick}
                />
              </>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default Quiz4;