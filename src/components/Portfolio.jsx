import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const Portfolio = () => {
  const projects = [
    {
      title: "Hip-Hop Album",
      description: "Produkcja i mastering albumu hip-hopowego",
      audioUrl: "https://soundcloud.com/example/hiphop"
    },
    {
      title: "Rock Band EP",
      description: "Nagrania live session z lokalnym zespołem",
      audioUrl: "https://soundcloud.com/example/rock"
    },
    {
      title: "Pop Single",
      description: "Produkcja i miks singla popowego",
      audioUrl: "https://soundcloud.com/example/pop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Nasze Portfolio</h2>
          <p className="text-gray-400 text-lg">Posłuchaj naszych realizacji</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <ReactPlayer
                  url={project.audioUrl}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Co mówią nasi klienci</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <p className="text-gray-400 italic">"Profesjonalne podejście i świetna atmosfera podczas nagrań. Polecam!"</p>
                <p className="text-white mt-2">- Jan Kowalski, wokalista</p>
              </div>
              <div className="text-left">
                <p className="text-gray-400 italic">"Najlepsze studio w Chojnicach, super jakość w przystępnej cenie."</p>
                <p className="text-white mt-2">- Anna Nowak, producent muzyczny</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;