'use client'
import MainPage from "./mainPage";
import Dishes from "./dishes"
import Reviews from "./reviews";
import dynamic from 'next/dynamic';
import InfiniteLooper from "./loop";

const Map = dynamic(() => import('./map'), { ssr: false });
// Define the Home component



export default function Home() {



  // Render the component
  return (

    <main className="">
     <MainPage/>
      <section className="flex w-full p-8 text-orange-100 bg-gray-900 ">
        <h2 className=" md:text-5xl text-3xl font-serif font-bold">Our top picks</h2>
      </section>
   <Dishes/>
      <section className="border-solid border-4 pt-6 border-orange-50  bg-black text-orange-50 text-3xl text-center py-4 ">
        <p><span className="motion-safe:animate-pulse font-bold text-4xl">Order now :</span> tel 0102843098 3298</p>
      </section>
      <InfiniteLooper speed="10" direction="right">
       
      </InfiniteLooper>

<Map/>
      <section className="md:text-5xl text-3xl w-full py-8 text-orange-100 text-center border-double border-t-8 border-orange-100 bg-gray-950">
        <h2 className="md:text-5xl font-serif font-bold">What was said about us</h2>
      </section>
      <Reviews />
    </main>
  );

}