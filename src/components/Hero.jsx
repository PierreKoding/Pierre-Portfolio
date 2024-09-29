import React from 'react';
import profilePic from "../assets/PierreProfile.jpg";
import { HERO_CONTENT } from "../constants";

const Hero = ({ theme }) => {
  return (
    <div className={`border-b ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-800'} pb-12 lg:pb-24 lg:mb-36`}>
      <div className="flex flex-wrap items-center">
        {/* image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start pl-8 lg:ml-20">
            <img
              src={profilePic}
              alt="Pierre"
              className="w-48 h-48 rounded-full shadow-lg lg:w-64 lg:h-64"
            />
          </div>
        </div>
        {/* text */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="text-center lg:text-left">
            <h1 className={`pb-8 text-5xl font-semibold tracking-tight lg:mt-10 lg:text-7xl ${theme === 'dark' ? 'text-neutral-400' : 'text-silver-800'}`}>
              Pierre Sitorus
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent lg:text-4xl">
              Hello!
            </span>
            <p className={`mt-3 text-lg ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-400'} leading-relaxed lg:leading-relaxed`}>
              {HERO_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;