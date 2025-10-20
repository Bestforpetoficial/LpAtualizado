import React, { useState, useEffect } from 'react';
import medio from "../assets/porte-medio.webp";
import gato from "../assets/866513462-gato.webp";

const Carousel = ({ onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const items = [
    {image: medio,title: 'Cachorro'},
    {image: gato,title: 'Gato'}
  ];

  useEffect(() => {
    const autoRun = setInterval(() => {
      nextItem();
    }, 100000); 
    return () => clearInterval(autoRun); 
  }, []);

   useEffect(() => {
    if (onSlideChange) {
      onSlideChange(items[currentIndex].title.toLowerCase());
    }
  }, [currentIndex]);

  const nextItem = () => {
    setIsNext(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setIsNext(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${isNext ? 'next' : 'prev'}`}>
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 p-10 text-white text-center">
                <h2 className="text-4xl font-bold font-serif mt-16">{item.title}</h2>
                <p className="text-2xl font-bold font-poppins text-white/70">{item.description}</p>
                <div className="mt-4">
                  <ul className="text-lg">
                    <li>{item.weight}</li>
                    <li>{item.food}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-24 h-32 relative ${currentIndex === index ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-2 left-2 right-2 text-white text-center font-semibold">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 z-20">
        <button onClick={prevItem} className="p-2 w-10 h-10 bg-black/10 text-white rounded-full">
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 z-20">
        <button onClick={nextItem} className="p-2 w-10 h-10 bg-black/10 text-white rounded-full">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
