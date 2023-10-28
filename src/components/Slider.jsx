import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://assets.vogue.com/photos/5ab6cabed65f511bbceadb3d/master/w_1600%2Cc_limit/06-seoul-fall-2018-rtw-day-5.jpg',
    },
    {
      url: 'https://assets.vogue.com/photos/5ab6cabcd1fabb2318bccd22/master/w_1600%2Cc_limit/09-seoul-fall-2018-rtw-day-5.jpg',
    },
    {
      url: 'https://assets.vogue.com/photos/5ab6cab2b4d97e517f48f7f7/master/w_1600%2Cc_limit/17-seoul-fall-2018-rtw-day-5.jpg',
    },

    {
      url: 'https://assets.vogue.com/photos/5ab6caad50ba394ce3a6844f/master/w_1600%2Cc_limit/25-seoul-fall-2018-rtw-day-5.jpg',
    },
    {
      url: 'https://assets.vogue.com/photos/5ab5016985604a74564ec558/master/w_1600%2Cc_limit/08-seoul-fall-2018-rtw-day-4.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='container'>
        <div className='h-[30rem] max-md:h-[500px] w-full m-auto relative group'>
        <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 left-8 max-md:left-4 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 right-8 max-md:right-4 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
            <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
            >
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}

export default Slider;