// import { addToBasket } from '@/redux/basketSlice';
import { urlFor } from '@/sanity';
// import { ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
// import toast from 'react-hot-toast';
// import { useDispatch } from 'react-redux';

interface Props {
    product: Product;
}


function Product({ product }: Props) {

    return (
        <div className='flex h-[300px] w-[100%] lg:w-[320px] select-none flex-col rounded-xl sm:h-[300px] lg:h-[400px]   md:h-[500px] md:w-[100%] cursor-pointer hover:scale-105 transition-all duration-500'>
            <div className='relative h-[100%] w-full '>
                <Link href={product.url} target='_blank'>
                <Image alt='' src={urlFor(product.image[0]).url()} layout='fill' objectFit='cover' className='rounded-xl ' />
                </Link>
            </div>

            
            <p className='space-y-2 text-xl text-white hover:text-red-700 md:text-2xl lg:text-3xl font-bold relative left-2 bottom-12 z-40'>{product.title}</p>
            

        </div>
    )
}

export default Product