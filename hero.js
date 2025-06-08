// src/components/Hero.js
import React from 'react';
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm <span className="text-blue-600">Sainath Rajendran</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
        Aspiring software developer passionate about cybersecurity, frontend development, and creating secure digital systems. Currently pursuing a B.E. in Computer Science.
      </p>
      <div className="flex gap-4 justify-center items-center">
        <a
          href="mailto:ssainath657@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <FaEnvelope />
          Contact Me
        </a>
        <a
          href="/Sainath_Rajendran_Resume.pdf" // Place resume in public folder
          download
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <FaDownload />
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/sainath-rajendran-430124313"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800 text-2xl"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Hero;
