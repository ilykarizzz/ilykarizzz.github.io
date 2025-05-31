import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">O Studiu</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Twoja muzyka, nasza pasja</h3>
            <p className="text-gray-300">
              Bandoo Studio to miejsce, gdzie profesjonalizm spotyka się z domową atmosferą. 
              Zlokalizowani w sercu Chojnic, oferujemy najwyższej jakości usługi nagraniowe 
              w przyjaznym, kreatywnym środowisku.
            </p>
            <p className="text-gray-300">
              Nasze studio zostało stworzone z myślą o artystach, którzy szukają 
              profesjonalnego brzmienia bez korporacyjnej atmosfery. Łączymy 
              najnowocześniejszy sprzęt z indywidualnym podejściem do każdego projektu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg"
                alt="Wnętrze Bandoo Studio"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <h4 className="text-3xl font-bold text-accent">5+</h4>
            <p className="text-gray-300">Lat doświadczenia</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-accent">100+</h4>
            <p className="text-gray-300">Zrealizowanych projektów</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-accent">50+</h4>
            <p className="text-gray-300">Zadowolonych artystów</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-accent">10+</h4>
            <p className="text-gray-300">Gatunków muzycznych</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;