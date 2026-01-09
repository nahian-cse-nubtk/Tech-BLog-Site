import React, { JSX } from 'react';

import Image from 'next/image';

const Banner = ():JSX.Element => {
    return (
        <div className='flex py-10 px-10 items-center '>
            <div className='flex-1 space-y-2'>
                <h1 className='text-5xl font-bold text-blue-600'>Explore the recent technical news</h1>
                <p className='text-xl font-bold'>Increse your knowledge in the technical field</p>

            </div>

            <div className='flex-1'>
                <Image src='/hero.jpg' alt='hero image' width={500} height={400}/>

            </div>

        </div>
    );
};

export default Banner;