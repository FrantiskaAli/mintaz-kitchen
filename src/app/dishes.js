'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import Link from 'next/link';
import 'animate.css'
import { useState,useEffect } from "react";


export default function Dishes() {
  const isClient = typeof window !== 'undefined';
  const [width, setWidth] = useState(isClient ? window.innerWidth : 500);
  const [slides,setSlides] = useState(1)
  useEffect(() => {
      const handleResize = () => {
          setWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);
useEffect(()=> {width  > 900 ? setSlides(2) : setSlides(1)}, [width])
  
  var settings =  {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: slides,
    slidesToScroll: 1,
    accessibility: true,
    autoplaySpeed: 3000,
    autoplay: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false

  } 


  return (
    <article>
      <section className="flex w-full p-12 text-orange-100 border-y-4 border-solid border-orange-100/[.6] justify-center">
    <h2 className=" md:text-5xl text-3xl font-serif font-bold">Our top picks</h2>
  </section>
  {
    
    <Slider {...settings} className="h-dishes" >


<section className="relative">

<figure className="p-4 inset-0 h-dishes content-center justify-center h-full flex" >

  <video autoPlay muted loop className="video-dish" >
    <source src='/video4.mp4' type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</figure>

<figcaption className=" bg-black/[.4] z-10 md:h-1/3 h-fit w-full rounded font-serif absolute left-0 bottom-0 p-4 flex justify-between items-center flex-col">

  <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >Food</h2>
  <p className="text-orange-100  ">brief description</p>

  <Link href="/shop" className="p-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-200/[.7] ">See shop</Link>

</figcaption>

</section>
      <section className="relative ">

        <figure className="p-4 inset-0 h-dishes content-center justify-center h-full flex" >

          <video autoPlay muted loop className="video-dish" >
            <source src='/video2.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.4] z-10 md:h-1/3 h-fit w-full rounded font-serif absolute left-0 bottom-0 p-4 flex justify-between items-center flex-col">

          <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >Food</h2>
          <p className="text-orange-100  ">brief description</p>

          <Link href="/shop" className="p-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-200/[.7] ">See shop</Link>

        </figcaption>

      </section>
      <section className="relative ">

        <figure className="p-4 inset-0 h-dishes content-center justify-center h-full flex" >

          <video autoPlay muted loop className="video-dish" >
            <source src='/video3.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.4] z-10 md:h-1/3 h-fit w-full rounded font-serif absolute left-0 bottom-0 p-4 flex justify-between items-center flex-col">

          <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >Food</h2>
          <p className="text-orange-100  ">brief description</p>

          <Link href="/shop" className="p-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-200/[.7] ">See shop</Link>

        </figcaption>

      </section>
     




    </Slider>}
    </article>
  );
}

