'use client'
import Dishes from "./dishes"
import Reviews from "./reviews";
import dynamic from 'next/dynamic';

const Map= dynamic(() => import('./map'), { ssr: false });
// Define the Home component
export default function Home() {
 


  // Render the component
  return (
    
    <main className="">
      <article className="flex">
      <section className="overflow-hidden z-0 w-screen h-screen relative shadow-2xl  ">
        <figure id="main-figure" className="w-full h-full ">
        </figure>
        <figcaption className="absolute md:bottom-1/3 bottom-1/4  bg-orange-100/[.4] md:p-20  md:h4/5 w-full ">
        <article className="text-center">
          <h1 className="text-gray-950 font-bold md:text-6xl text-4xl font-serif md:px-20 px-4 pt-10">Savor the smoky delights</h1>
          <article className="w-full p-2  bg-gray-950/[.7] flex justify-center " >
          <section className="w-2/3 overflow-hidden text-white  text-2xl">
            <p id="scroll-text">Just opened now | blah blah | blah blah</p>
          </section>
          </article>
          <p className="md:px-40 px-10 font-medium md:text-xl text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium  accusantium doloremque laudantium </p>
        </article>
        </figcaption>
      </section>
   
      </article>
      <section className="flex w-full p-8 bg-orange-100 ">
        <h2 className=" text-gray-950 md:text-5xl text-3xl font-serif font-bold">Our top picks</h2>
      </section>
      <Dishes/>
      <section className="border-solid border-4 pt-6 border-black  bg-orange-400 text-3xl text-center py-4 ">
        <p><span className="motion-safe:animate-pulse font-bold text-4xl">Order now :</span> tel 0102843098 3298</p>
      </section>
      <Map/>
      <section className="md:text-5xl text-3xl w-full py-8 text-orange-100 text-center border-double border-t-8 border-orange-100 bg-gray-950">
        <h2 className="md:text-5xl font-serif font-bold">What was said about us</h2>
      </section>
      <Reviews/>
    </main>
  );
}