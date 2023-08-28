'use client'
import { useRef } from "react";

export default function MainPage() { 
    const videoRef= useRef();
    const setPlayBack = () => {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    };

return ( 
<article className="flex">
<section className="overflow-hidden  w-screen h-screen relative shadow-2xl flex justify-center ">
  <video autoPlay muted loop className="min-w-screen " ref={videoRef}
        onCanPlay={() => setPlayBack()}>
    <source src='/jumbotron.mp4' type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <figcaption className="absolute md:bottom-1/3 bottom-1/4  bg-orange-100/[.4] md:p-20  md:h4/5 w-full md:w-4/5 ">
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

</article>)}