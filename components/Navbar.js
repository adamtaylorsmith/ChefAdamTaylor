import {useEffect, useState} from "react";
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between bg-green-100 shadow-md">
                <div className="container mx-auto flex flex-wrap items-center justify-between py-2">
                    {/* <div className="hidden md:inline-flex"><Image className="" src="/10.png" width="50" height="50" alt="" /></div> */}
                    <div className="w-full relative flex justify-between md:w-auto md:block md:justify-start flex-nowrap">
                        <button className="cursor-pointer text-xl leading-none ml-2 px-2 py-1 border border-solid rounded bg-transparent block md:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </button>
                        {/* onClick={() => props.setEventName('Home')} */}
                        <Link href="/"><a className="font-display font-black text-xl pr-4 pt-1 hover:text-white">Adam Taylor Smith</a></Link>
                    </div>
                    <div className={"mt-2 md:mt-7 md:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
                        <div className="flex flex-col md:flex-row list-none md:ml-auto">
                            <div className="pl-16 pb-2 pt-2 md:pt-0">
                                <Link href="/services"><a className="md:px-6 font-display hover:text-white text-lg">Services</a></Link>
                            </div>
                            <div className="pl-16 pb-2">
                                <Link href="/menu"><a className="md:px-6 font-display hover:text-white text-lg">Menus</a></Link>
                            </div>
                            <div className="pl-16 pb-2">
                                <Link href="/shop"><a className="md:px-6 font-display hover:text-white text-lg">Shop</a></Link>
                            </div>
                            <div className="pl-16 pb-2">
                                <Link href="/cart">
                                    <a className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            {/* <div className="pl-10 pb-6">
                                <Link href="/account"><a className="md:px-6 font-display hover:text-white text-lg">Account</a></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}