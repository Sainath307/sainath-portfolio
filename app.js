import React from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
}

export default App;
