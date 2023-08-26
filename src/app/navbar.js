'use client'

import Link from 'next/link';
import React, { useState, useEffect } from "react"

export default function (){
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
        nav.open ? setNav({ ...nav, open: false }) : setNav({ ...nav, open: true })};
    
        return(

         <nav className={scrollTop > 20 ? "flex min-w-screen p-12 justify-center bg-gray-200 text-white sticky top-0 z-10" : "flex min-w-screen p-12 justify-center bg-black text-white z-10 sticky top-0"} >
            {/*desktop navigation*/}
      

           { nav.display ?
           
           <ul className= "flex  h-auto w-2/5 justify-between" >
           <li> <Link href="/" className="text-white">Home</Link> </li>
           <li><Link href="/menu">Menu</Link> </li>
           <li><Link href="/contact">Contact Us</Link> </li>
            </ul> 
            
            :

            <article className="flex justify-center pl-6 flex-shrink-0"><svg width="50" height="15" xmlns="http://www.w3.org/2000/svg" className="hover:cursor-pointer hover:brightness-50"
            onClick={() => (toggleNav())}><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd" /></svg>
            </article>
            }
            {
                nav.open? <section className="h-screen w-screen absolute top-0 z-40 left-0 overflow-y-hidden bg-gray-500/[.7] ">
                <article className="h-full w-2/4 bg-white p-10 self-end flex-wrap-reverse">
                    <section classNAme="w-8 h-8">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" onClick={() => (toggleNav())} className="hover:cursor-pointer"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="gray" fillRule="evenodd" /></svg>
                    </section>
                    <ul>
                    <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact Us</Link>
                    </ul>
                </article>
            </section> : null
        }
            
         
          </nav>
    )}