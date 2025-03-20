import React from 'react';
import { motion } from 'framer-motion';
import ingred from '../../assets/ingredients.jpg';
import chefs from '../../assets/chefs.jpg';
import delivery from '../../assets/delivery.avif';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 py-20 px-6 text-white">
            <div className="max-w-6xl mx-auto relative">
                <motion.h2
                    className="text-6xl font-extrabold text-center mb-16 tracking-widest drop-shadow-lg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}  
                    variants={fadeInUp}
                >
                    🍽️ ABOUT US
                </motion.h2>

              
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-12 mb-16 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <img
                        src={ingred}
                        alt="Quality Ingredients"
                        className="w-full md:w-1/2 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-white"
                    />
                    <div className="md:w-1/2 text-center md:text-left bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-md">
                        <h3 className="text-4xl font-bold text-yellow-300 mb-4">🌿 Quality Ingredients</h3>
                        <p className="text-white text-lg leading-relaxed">
                            We use only the <span className="text-yellow-200 font-bold">freshest</span> and
                            <span className="text-yellow-200 font-bold"> finest</span> ingredients to craft each dish with care.
                        </p>
                    </div>
                </motion.div>

              
                <motion.div
                    className="flex flex-col-reverse md:flex-row items-center gap-12 mb-16 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <div className="md:w-1/2 text-center md:text-left bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-md">
                        <h3 className="text-4xl font-bold text-yellow-300 mb-4">👨‍🍳 Expert Chefs</h3>
                        <p className="text-white text-lg leading-relaxed">
                            Our talented chefs bring <span className="text-yellow-200 font-bold">years of experience</span> to the kitchen.
                        </p>
                    </div>
                    <img
                        src={chefs}
                        alt="Expert Chefs"
                        className="w-full md:w-1/2 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-white"
                    />
                </motion.div>

            
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-12 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <img
                        src={delivery}
                        alt="Fast Delivery"
                        className="w-full md:w-1/2 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-white"
                    />
                    <div className="md:w-1/2 text-center md:text-left bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-md">
                        <h3 className="text-4xl font-bold text-yellow-300 mb-4">🚚 Fast Delivery</h3>
                        <p className="text-white text-lg leading-relaxed">
                            We prioritize <span className="text-yellow-200 font-bold">fast delivery</span> so your meals arrive
                            <span className="text-yellow-200 font-bold"> hot and fresh</span>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
