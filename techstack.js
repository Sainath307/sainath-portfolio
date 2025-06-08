// src/components/TechStack.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaCss3Alt } from 'react-icons/fa';

const techStacks = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-400" /> },
  { name: 'Java', icon: <FaJava size={40} className="text-red-500" /> },
  { name: 'Tailwind CSS', icon: <FaCss3Alt size={40} className="text-teal-400" /> },
];

const TechStack = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
      <div className="flex gap-6 flex-wrap">
        {techStacks.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {tech.icon}
            <span className="mt-2">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
