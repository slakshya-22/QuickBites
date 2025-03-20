import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import heroImg from '../../assets/hero.jpeg';

const slides = [
    {
        title: "Savor Every Bite of Perfection",
        text: "Experience a delightful fusion of flavors, crafted with passion and precision."
    },
    {
        title: "Where Flavors Come Alive",
        text: "Our chefs create extraordinary dishes that ignite your senses."
    },
    {
        title: "Your Culinary Journey Starts Here",
        text: "Embark on a flavorful adventure with dishes that tell a delicious story."
    },
    {
        title: "Taste the Passion in Every Dish",
        text: "From farm-fresh ingredients to artistic presentation, we perfect every detail."
    }
];

const HeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const navigate = useNavigate(); 

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-orange-400 via-white to-orange-100 text-black overflow-hidden">
            
            <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 md:px-12 bg-white shadow-md border-b border-orange-500 z-10">
                <div className="bg-orange-500 w-10 h-10 rounded-full shadow-md" />
                <nav className="hidden md:flex items-center space-x-6">
                    {['Home', 'Offers', 'Contact', 'Services', 'Menu'].map((item) => (
                        <a
                            key={item}
                            className="text-black text-lg font-medium hover:text-orange-500 transition-all duration-300"
                            href="#"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </header>

            <main className="flex flex-col md:flex-row items-center justify-center pt-36 px-4 sm:px-10 md:px-16 lg:px-28 gap-10">
                <div className="flex-1 text-center md:text-left w-full max-w-xl text-box">
                    <div className="overflow-hidden relative min-h-[35vh] md:min-h-[40vh]">
                        <div
                            className="flex transition-transform duration-700"
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            {slides.map((item, index) => (
                                <div key={index} className="min-w-full">
                                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-snug md:leading-tight mb-4">
                                        {item.title} <br />
                                        <span className="text-orange-500">Crafted to Perfection</span>
                                    </h1>
                                    <p className="text-gray-800 text-lg leading-relaxed mb-4 sm:mb-3">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <button
                            className="bg-orange-500 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transform transition-all duration-300 cursor-pointer"
                            onClick={() => {
                                
                                navigate('/menu');
                            }}
                        >
                            View Menu
                        </button>

                        <div className="flex justify-center mt-2">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${index === activeSlide ? "bg-orange-500" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative flex-1 w-full max-w-xl img-box">
                    <div className="absolute inset-0 bg-orange-500 rounded-[60%_40%_60%_40%] transform rotate-3 shadow-xl" />
                    <img
                        className="relative w-full h-full object-cover rounded-[60%_40%_60%_40%] border-4 border-orange-500 transform -rotate-3"
                        src={heroImg}
                        alt="Delicious Meal"
                    />
                    <div className="absolute top-[-20px] right-[-30px] text-3xl font-bold text-orange-500 animate-bounce">
                        Hot & Fresh!
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
