'use client'
import { useRef } from "react";

export default function MainPage() { 
    const videoRef= useRef();
    const setPlayBack = () => {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
    };

return ( 
<article className="flex ">
<section className="overflow-hidden  w-screen h-96 md:h-screen relative shadow-2xl flex justify-center ">
  <video id="main-video"
  autoPlay muted loop ref={videoRef}
        onCanPlay={() => setPlayBack()}>
    <source src='/jumbotron.mp4' type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <figcaption className="absolute md:bottom-1/5 bottom-32 md:right-10 bg-orange-100/[.3]  w-fit p-12 shadow-2xl">
    <article className="text-center">
      <h1 className="text-gray-950 font-bold md:text-6xl text-4xl font-serif">Savor the smoky delights</h1>
      
    </article>
  </figcaption>
</section>

</article>)}
/*<article className="w-full p-2  bg-gray-950/[.7] flex justify-center " >
<section className="w-2/3 overflow-hidden text-white  text-2xl">
<p id="scroll-text">Just opened now | blah blah | blah blah</p>
</section>
</article>*/