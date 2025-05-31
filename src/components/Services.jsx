import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrophone, FaGuitar, FaHeadphones, FaMusic, FaCompactDisc } from 'react-icons/fa';

const services = [
  {
    icon: <FaMicrophone className="w-8 h-8" />,
    title: "Nagrania wokalne",
    description: "Profesjonalne nagrania z komfortem domowego studia"
  },
  {
    icon: <FaGuitar className="w-8 h-8" />,
    title: "Nagrania instrumentalne",
    description: "Gitary, bas, perkusja, instrumenty klawiszowe"
  },
  {
    icon: <FaHeadphones className="w-8 h-8" />,
    title: "Miks i mastering",
    description: "Dopracowanie brzmienia do standardów branżowych"
  },
  {
    icon: <FaMusic className="w-8 h-8" />,
    title: "Produkcja muzyczna",
    description: "Tworzenie podkładów, aranżacje"
  },
  {
    icon: <FaCompactDisc className="w-8 h-8" />,
    title: "Pakiety kompleksowe",
    description: "Od pomysłu do gotowego utworu"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Nasze Usługi</h2>
          <p className="text-gray-400 text-lg">Profesjonalne rozwiązania dla Twojej muzyki</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
            >
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
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
          <button className="bg-accent text-primary px-8 py-4 rounded-md text-lg font-medium hover:bg-accent/90 transition-colors">
            Zarezerwuj sesję
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;