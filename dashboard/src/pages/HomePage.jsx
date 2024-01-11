import React from 'react';
import Header from '../component/Header';
import { useStateContext } from '../contexts/ContextProvider';
import { IoIosMore } from 'react-icons/io';
import Button_bg from '../component/Button_bg';

const HomePage = () => {

    const { currentColor, screenSize } = useStateContext();

  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl m-3 text-center">
        <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Home Page</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
            <IoIosMore />
            </button>
        </div>
        <div className="mt-10">
          <div className="mt-8">
            <p className="font-semibold text-lg">Your Component entry</p>
            <p className="text-gray-400">Component Sub Title</p>
            <p className="mt-8 text-sm text-gray-400">
            Explore the fascinating world of machine learning and artificial intelligence. 
            Dive into cutting-edge algorithms, data analysis, and predictive modeling. 
            This platform is your gateway to mastering the art of intelligent machines.
            </p>
            <div className="mt-3">
            <Button_bg
              color="white"
              bgColor={currentColor}
              text="Sign Up"
              borderRadius="10px"
            />
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
