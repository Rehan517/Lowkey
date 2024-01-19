import Image from 'next/image'
import React from 'react'

function Landing() {
    return (
        <section className=' items-center justify-between h-[85vh]  md:h-[80vh] lg:h-[100vh]'>

            <div className='h-[100%] flex items-start relative'>
                <Image className="object-contain" alt='' src="/Front.jpeg" layout='fill' objectFit='cover' />
                <h1 className='z-50 text-white absolute top-[550px] left-[20px] lg:top-[700px] lg:left-[90px] text-[40px] lg:text-8xl font-bold'>LOWKEY BRANDS</h1>
                <p className='text-white absolute top-[600px] w-[270px] lg:w-max left-[20px] lg:top-[800px] lg:left-[95px] text-sm lg:text-xl'> <span className='text-red-700 font-bold'>hidden gems</span> in the world of fashion</p>
            </div>
            
            
        </section>
    )
}

export default Landing