'use client'

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import Image from 'next/image';

export default function () {
    //scroll function
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //window width function
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 500);//getting actual window width
    const [nav, setNav] = useState({ //setting if nav bar is visible and if its open
        display: true,
        open: false
    })
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        width < 900 ? setNav({ ...nav, display: false }) : setNav({ ...nav, display: true })
    }, [width])
    const toggleNav = () => {
        nav.open ? setNav({ ...nav, open: false }) : setNav({ ...nav, open: true })
    };

    return (

        <nav className={scrollTop > 100 ? "flex min-w-screen p-12 justify-center bg-black/[.5] sticky top-0 z-20 border-b-4 border-solid border-orange-100 font-bold font-serif text-gray-700 shadow-md" : "flex min-w-screen p-12 justify-center bg-black font-bold font-serif text-orange-100 z-40 sticky top-0 border-b-4 border-double border-orange-200 "} >
            {/*desktop navigation*/}
            <Image src="/logo.jpg" width={100} height={100} className={scrollTop > 100 ? 'absolute top-6 left-10 ring-2 ring-gray-950' : 'absolute top-6 left-10'} />

            {nav.display ?

                <ul className="flex  h-4/5 w-3/5 justify-between uppercase" >
                    <li> <Link href="/" className="hover:text-orange-200 border-double hover:border-t-2  p-4 border-orange-200 hover:pointer">Home</Link> </li>
                    <li><Link href="/menu" className="hover:text-orange-200 border-double hover:border-t-2 p-4 border-orange-200 hover:pointer">Menu</Link> </li>
                    <li><Link href="/contact" className="hover:text-orange-200 border-double hover:border-t-2 p-4 border-orange-200 hover:pointer">Contact Us</Link> </li>
                </ul>

                :

                <article className="flex justify-center pl-6 flex-shrink-0"><svg width="50" height="15" xmlns="http://www.w3.org/2000/svg" className="hover:cursor-pointer hover:brightness-50"
                    onClick={() => (toggleNav())}><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
                </article>
            }
            {
                nav.open ? <section className="h-screen w-screen absolute top-0 z-40 left-0 overflow-y-hidden bg-gray-500/[.7] ">
                    <article className="h-1/2 w-full bg-gray-950 p-10 ">
                        <section classNAme="w-8 h-8">
                            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" onClick={() => (toggleNav())} className="hover:cursor-pointer"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="gray" fillRule="evenodd" /></svg>
                        </section>
                        <ul className='flex flex-col justify-between w-full text-2xl h-full items-center p-6'>
                            <Link href="/" onClick={() => (toggleNav())}>Home</Link>
                            <Link href="/menu" onClick={() => (toggleNav())}>Menu</Link>
                            <Link href="/contact" onClick={() => (toggleNav())}>Contact Us</Link>
                        </ul>
                    </article>
                </section> : null
            }


        </nav>
    )
}