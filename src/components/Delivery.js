import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2' >
        <img className='w-[550px] mx-auto my-4 mt-[4rem]'  src="https://res.cloudinary.com/dodm9xkaz/image/upload/v1696905961/YumEats/pcjahhqbfot6d2zfz9y2.jpg" alt="" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold mt-[5rem]'>Get The App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have 
            suffered alteration in some form, by injected humour, or randomised words which don't 
            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you 
            need to be sure there isn't anything embarrassing hidden in the middle of text. All 
            the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
            making this the first true generator on the Internet. It uses a dictionary of over 
            200 Latin words, combined with a handful of model sentence structures, to generate 
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
             free from repetition, injected humour, or non-characteristic words etc.
            </p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery
