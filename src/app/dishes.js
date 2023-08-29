'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import Link from 'next/link';
import 'animate.css'


export default function Dishes() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplaySpeed: 3000,
    autoplay: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false

  };

  return (
    <Slider {...settings} className="h-dishes">


      <section className="relative ">

        <figure className="h-dishes content-center justify-center h-full flex" >

          <video autoPlay muted loop  className="video-dish">
            <source src='/video4.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.4] z-10 md:h-1/3 h-fit w-full rounded font-serif absolute left-0 bottom-0 p-4 flex justify-between items-center flex-col">
          <h2 className="text-orange-50 font-bold md:text-3xl text-xl" >Food</h2>
          <p className="text-orange-100 py-1/4">brief description</p>
          <Link href="/menu" className="p-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-200/[.7] ">See shop</Link>

        </figcaption>

      </section>
      <section className="relative ">

        <figure className="p-4 inset-0 h-dishes content-center justify-center h-full flex" >

          <video autoPlay muted loop className="video-dish">
            <source src='/video2.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.4] z-10 md:h-1/3 h-fit w-full rounded font-serif absolute left-0 bottom-0 p-4 flex justify-between items-center flex-col">

          <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >Food</h2>
          <p className="text-orange-100  ">brief description</p>

          <Link href="/menu" className="p-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-200/[.7] ">See shop</Link>

        </figcaption>

      </section>
      <section className="relative ">

        <figure className="p-4 inset-0 h-dishes content-center justify-center h-full flex" >

          <video autoPlay muted loop className="video-dish">
            <source src='/video3.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.4] z-10 md:h-1/3 h-fit w-full rounded font-serif absolute left-0 bottom-0 p-4 flex justify-between items-center flex-col">
          <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >Food</h2>
          <p className="text-orange-100 ">brief description</p>

          <Link href="/menu" className="p-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-200/[.7] ">See shop</Link>

        </figcaption>

      </section>




    </Slider>
  );
}

