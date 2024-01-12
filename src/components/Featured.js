import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
    const sliders = [
       { url: "https://res.cloudinary.com/dodm9xkaz/image/upload/e_improve:outdoor/YumEats/jbrtx3bfawfp4sdvd0sn.jpg"
    },
{ url: 'https://res.cloudinary.com/dodm9xkaz/image/upload/v1696902956/YumEats/ftx3580r0aovfhoq06da.jpg'
},
{
url: 'https://res.cloudinary.com/dodm9xkaz/image/upload/v1696902955/YumEats/xis6k0afhkr6lvtssbdf.jpg',
},
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlider = ()=> {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
      }
      const nextSlider = ()=> {
        const isLastSlide = currentIndex === sliders.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
      }

      const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
      }

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 mx-auto relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage: `url(${sliders[currentIndex].url})` }}
        ></div>
        <div className='  hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlider} />
        </div>
        <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5  text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlider} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {
            sliders.map((sliderItems, slideIndex) => (
              <div className='text-2xl cursor-pointer'
              key={slideIndex}
              onClick={()=>moveToNextSlide(slideIndex)} >
               <RxDotFilled />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Featured
