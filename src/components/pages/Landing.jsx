import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../asset/images/donenew.gif';
import Image from '../../asset/images/bg.svg';

function Landing() {
  return (
    <>
      {/* Full viewport with dynamic background */}
      <section
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}
      >
        {/* Flexbox wrapper - Center content vertically and horizontally */}
        <div className="flex items-center justify-center h-screen px-4 sm:px-6 md:px-8 lg:px-12">

          {/* Content container responsive */}
          <div className="flex flex-col items-center bg-white bg-opacity-90 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-md">

            {/* Centered Icon */}
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <img src={Icon} alt="Success Icon" className="w-24 md:w-32 h-24 md:h-32" />
            </div>

            {/* Main Heading */}
            <h1 className="mb-4 font-quicksand-bold text-[20px] sm:text-[22px] md:text-[26px] lg:text-[30px] text-center">
              Thank you for submitting
            </h1>

            {/* Home Button */}
            <Link
              to="/"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 text-sm md:text-base"
            >
              Go to Home
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default Landing;
