'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import Link from 'next/link';
import 'animate.css'


export default function Dishes() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: true,

  };

  const dishes = [
    {
      text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
      name: "Steakn",
      src: "/steak.png"
    },
    {
      text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
      name: "Soup",
      src: "/soup.png"
    },
    {
      text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
      name: "Cheesecake",
      src: "/cheesecake.png"
    },
  ]





  return (
    <Slider {...settings}>

      <section className="h-screen w-screen relative rounded">

        <figure className="absolute p-4 inset-0 w-full h-full">

          <video autoPlay muted loop>
            <source src='/video1.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.7] z-10 md:h-1/2 h-1/3 w-full md:w-1/3 md:left-1/3 rounded text-center font-serif absolute bottom-0 p-4 md:bottom-10">

          <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >{dishes[1].name}</h2>
          <p className="text-orange-100  md:mb-20">{dishes[1].text}</p>
          <article onClick={() => handleClickBack()} className="flex items-center hover:cursor-pointer text-2xl md:text-6xl">
            &#8636;
          </article>
          <Link href="/menu" className=" md:p-4 pb-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-100 ">Check out menu</Link>
          <article onClick={() => handleClickForward()} className="flex items-center justify-end hover:cursor-pointer text-2xl md:text-6xl ">
            &#8641;
          </article>
        </figcaption>

      </section>
      <section className="h-screen w-screen relative rounded">

        <figure className="absolute p-4 inset-0 w-full h-full">

          <video autoPlay muted loop>
            <source src='/video4.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.7] z-10 md:h-1/2 h-1/3 w-full md:w-1/3 md:left-1/3 rounded text-center font-serif absolute bottom-0 p-4 md:bottom-10">

          <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >{dishes[1].name}</h2>
          <p className="text-orange-100  md:mb-20">{dishes[1].text}</p>
          
      
          <Link href="/menu" className=" md:p-4 pb-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-100 ">Check out menu</Link>
  
        </figcaption>

      </section>
      <section className="h-screen w-screen relative rounded">

        <figure className="absolute p-4 inset-0 w-full h-full">

          <video autoPlay muted loop>
            <source src='/video2.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.7] z-10 md:h-1/2 h-1/3 w-full md:w-1/3 md:left-1/3 rounded text-center font-serif absolute bottom-0 p-4 md:bottom-10">

          <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >{dishes[1].name}</h2>
          <p className="text-orange-100  md:mb-20">{dishes[1].text}</p>
          <article onClick={() => handleClickBack()} className="flex items-center hover:cursor-pointer text-2xl md:text-6xl">
            &#8636;
          </article>
          <Link href="/menu" className=" md:p-4 pb-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-100 ">Check out menu</Link>
          <article onClick={() => handleClickForward()} className="flex items-center justify-end hover:cursor-pointer text-2xl md:text-6xl ">
            &#8641;
          </article>
        </figcaption>

      </section>
      <section className="h-screen w-screen relative rounded">

        <figure className="absolute p-4 inset-0 w-full h-full">

          <video autoPlay muted loop>
            <source src='/video3.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        <figcaption className=" bg-black/[.7] z-10 md:h-1/2 h-1/3 w-full md:w-1/3 md:left-1/3 rounded text-center font-serif absolute bottom-0 p-4 md:bottom-10">

          <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >{dishes[1].name}</h2>
          <p className="text-orange-100  md:mb-20">{dishes[1].text}</p>
          <article onClick={() => handleClickBack()} className="flex items-center hover:cursor-pointer text-2xl md:text-6xl">
            &#8636;
          </article>
          <Link href="/menu" className=" md:p-4 pb-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-100 ">Check out menu</Link>
          <article onClick={() => handleClickForward()} className="flex items-center justify-end hover:cursor-pointer text-2xl md:text-6xl ">
            &#8641;
          </article>
        </figcaption>

      </section>




    </Slider>
  );
}

