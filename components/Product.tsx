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
        <div className='flex h-[400px] w-[320px] select-none flex-col rounded-xl sm:h-[300px]   md:h-[500px] md:w-[400px] cursor-pointer hover:scale-105 transition-all duration-500'>
            <div className='relative h-[100%] top-9 w-full '>
                <Link href={product.url} target='_blank'>
                <Image alt='' src={urlFor(product.image[0]).url()} layout='fill' objectFit='cover' className='rounded-xl ' />
                </Link>
            </div>

            <div className='space-y-2 text-2xl text-white hover:text-red-700 md:text-2xl lg:text-3xl font-bold relative left-6 bottom-8 z-40'>
                <p>{product.title}</p>
            </div>

        </div>
    )
}

export default Product