import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Bandoo Studio
            <span className="block text-accent mt-2">
              Twoja muzyka w profesjonalnym brzmieniu
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Domowe studio nagraniowe w Chojnicach - nagrania, miks, mastering
          </p>
          <button className="bg-accent text-primary px-8 py-4 rounded-md text-lg font-medium hover:bg-accent/90 transition-colors">
            Rozpocznij swoją muzyczną podróż
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;