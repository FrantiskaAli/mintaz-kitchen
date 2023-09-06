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

    //adjusting logos width
    const [logoWidth,setLogoWidth]=useState(80)
    useEffect(()=>{width  > 700 ? setLogoWidth (100) : setLogoWidth(80)},[width])
    return (

        <nav className={scrollTop > 100 ? "flex min-w-screen p-10 justify-center bg-black/[.5] sticky top-0 z-40 border-b-4 border-solid border-orange-100 font-bold font-serif text-orange-50 shadow-md" : " flex min-w-screen p-10 justify-center bg-black font-bold font-serif text-orange-100 z-40 sticky top-0 border-b-4 border-double border-orange-200 "} >
            {/*desktop navigation*/}
         
            <Image src="/logo.jpg" alt="logo, grill with Mintaz Kitchen writing under" width={logoWidth} height={logoWidth} className={scrollTop > 100 ? 'absolute top-6 left-10 ring-2 ring-gray-950 ' : 'absolute top-6 left-10'} />
  
            {nav.display ?

                <ul className="flex  h-4/5 w-3/5 justify-between uppercase" >
                    <li> <Link href="/" className="hover:text-orange-200 border-double hover:border-t-2  p-4 border-orange-200 hover:pointer">Home</Link> </li>
                    <li><Link href="/shop" className="hover:text-orange-200 border-double hover:border-t-2 p-4 border-orange-200 hover:pointer">Shop</Link> </li>
                    <li><Link href="/contact" className="hover:text-orange-200 border-double hover:border-t-2 p-4 border-orange-200 hover:pointer">Contact Us</Link> </li>
                </ul>

                :

                <article className="flex justify-center pl-6 flex-shrink-0 ">
                    <svg width="40" height="20" xmlns="http://www.w3.org/2000/svg" className="hover:cursor-pointer hover:brightness-50 absolute left-1/2"
                        onClick={() => (toggleNav())}><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#FFE0B2" fillRule="evenodd" /></svg>
                </article>
            }
            {
                nav.open ? <section className="h-screen justify-center flex absolute top-0 z-40 w-screen overflow-y-hidden bg-gray-500/[.7] " onClick={() => (toggleNav())}>
                    <article className="h-1/2 w-1/2 bg-gray-950 p-10 ">
                        <section className="w-8 h-8">
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 40 40' onClick={() => (toggleNav())} className="hover:cursor-pointer"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="gray" fillRule="inherit" /></svg>
                        </section>
                        <ul className='flex flex-col justify-between w-full text-2xl h-full items-center p-6'>
                            <Link href="/" onClick={() => (toggleNav())}>Home</Link>
                            <Link href="/shop" onClick={() => (toggleNav())}>Shop</Link>
                            <Link href="/contact" onClick={() => (toggleNav())}>Contact Us</Link>
                        </ul>
                    </article>
                </section> : null
            }
            <section className="flex item-end justify-self-end justify-evenly absolute top-0 pt-10 right-6   w-1/6">
                <article className='hover:border-orange-100 hover:pointer hover:scale-125'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="fill-orange-100 self-center text-xl hover:border-2 "><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" /></svg>
                </article>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="fill-orange-100 text-xl"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
            </section>

        </nav>
    )
}