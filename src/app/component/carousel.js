"use client"
import React, { useState } from 'react';
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa";

const images = [
    '/carouselPic.png',
    '/carouselPic.png',
    '/carouselPic.png',
    '/carouselPic.png',

];

const Carousel = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handlePrevious = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex flex-col items-center ">
            <div className='flex items-center gap-4 relative'>
                <button className=" text-white bg-white -mr-16 z-40 absoulte bg-opacity-50 p-3 rounded-xl" onClick={handlePrevious}>
                    <FaLessThan />
                </button>
                <div className='w-[680px] h-80'>
                    <img src={images[selectedImageIndex]} alt="Selected" className="mb-4 w-full h-96" />

                </div>                <button className=" text-white bg-white -ml-16 z-40 absoulte bg-opacity-50 p-3 rounded-xl" onClick={handleNext}>
                    <FaGreaterThan />
                </button>
            </div>
            <div className="flex items-center mt-20">

                <div className="flex ">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className={`w-40 h-20  ml-2 rounded-xl object-cover cursor-pointer ${index === selectedImageIndex ? 'border-2 border-blue-500' : ''
                                }`}
                            onClick={() => setSelectedImageIndex(index)}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Carousel;
