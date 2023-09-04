'use client'
import MainPage from "./mainPage";
import Dishes from "./dishes"
import Reviews from "./reviews";

import InfiniteLooper from "./loop";
import 'animate.css'
//const Map = dynamic(() => import('./map'), { ssr: false });
// Define the Home component



export default function Home() {



  // Render the component
  return (

    <main className="bg-black">
   <article className="light-shadow"> 
      <MainPage />
      <article className="lg:flex lg:my-10 light-shadow lg:h-96 ">
      <section className="py-20 text-center bg-gray-900 lg:w-1/2">
      <p className="md:px-40 px-10 font-medium md:text-xl text-lg text-orange-50">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium  accusantium doloremque laudantium </p>
      </section>
      <section className="flex w-screen md:flex-row flex-col justify-between h-80 md:h-full items-center py-12 bg-gray-950 lg:w-1/2 lg:p-20">
        <h2 className="text-orange-100 text-5xl font-bold font-serif">Follow us on</h2>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="fill-orange-100 self-center text-7xl animate-pulse"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" className="fill-orange-100 text-7xl animate-pulse"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
      </section>
      </article>
      <InfiniteLooper speed="12" direction="right" />
      <Dishes />
      <section className="bg-gray-900 text-orange-50 text-3xl text-center pt-8 pb-4 my-6 ">
        <p><span className="motion-safe:animate-pulse font-bold text-4xl">Order now :</span> tel 0102843098 3298</p>
      </section>
      <InfiniteLooper speed="12" direction="left" />



    
      <Reviews />
      </article>
    </main>
  );

}