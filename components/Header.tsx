import React, { useEffect, useState } from 'react'
import { ShoppingBagIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
// import { useSelector } from 'react-redux';
// import { selectBasketItems } from '@/redux/basketSlice';

function Header() {

    const [isButtonPressed, setButtonPressed] = useState(false);


    const handleBarsPress = () => {
        setButtonPressed(true);
        document.body.classList.add("menu--open")
        
    };
    const handleCrossPress = () => {
        setButtonPressed(false);
        document.body.classList.remove("menu--open")
    };

    // const items = useSelector(selectBasketItems)


    return (
        <header >
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center p-4'>
                <div className='w-full space-x-4 hidden md:block lg:block font-light'>
                    {/* <Link href="/shop">Shop</Link> */}
                    <Link href="">About</Link>
                    <Link href="">Contact</Link>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='w-full text-left lg:text-center'>
                        <Link href="/" className='text-2xl font-bold'>LOWKEY</Link>
                    </div>

                </div>

                <div className='flex items-center justify-end'>
                    <button className="block md:hidden lg:hidden" onClick={handleBarsPress}>
                        <Bars3Icon className='h-7 w-7' />
                    </button>
                    <div className='relative cursor-pointer'>
                    
                    <Link href="">
                    <UserCircleIcon className='h-6 w-6 ml-3' />
                    </Link>
                    </div>
                    
                </div>
            </div>
            <div className={`absolute bg-white top-0 left-0 w-[100vw] h-[100vh] z-[100] flex items-center justify-center transition-all ${isButtonPressed ? "visible opacity-1": "invisible opacity-0 "}`}>
                <button className='absolute top-[10px] right-[20px] p-[8px] text-black' onClick={handleCrossPress} >
                    <XMarkIcon className='h-6 w-6' />
                </button>
                <ul className='flex flex-col items-center'>
                    {/* <li className='py-[20px]'>
                        <Link href="/shop" className='text-black text-[30px]'>Shop</Link>
                    </li> */}
                    <li className='py-[20px]'>
                        <Link href="" className='text-black text-[30px]'>About</Link>
                    </li>
                    <li className='py-[20px]'>
                        <Link href="" className='text-black text-[30px]'>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header