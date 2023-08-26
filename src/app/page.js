'use client'
import Dishes from "./main-components/dishes"
import Reviews from "./main-components/reviews";
import dynamic from 'next/dynamic';
import Map from "./main-components/map";

// Define the Home component
export default function Home() {
 


  // Render the component
  return (
    
    <main className="">
      <article className="flex">
      <section className="overflow-hidden z-0 w-2/5 h-screen relative">
        <figure id="main-figure" className="w-full h-full ">
        </figure>
        <figcaption className="absolute bottom-1/2 left-1/3 bg-orange-200/[.7] p-20 w-full ">
          <h1>Navaz Kitchen</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </figcaption>
      </section>
      <section className="w-3/5 bg-orange-200 h-screen">
        <article>
          <h2>Savor the smoky delights</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, </p>
        </article>
        <article className="w-full p-2  bg-black flex justify-center " >
          <section className="w-2/3 overflow-hidden text-white">
            <p id="scroll-text">Just opened now | blah blah | blah blah</p>
          </section>
        </article>

      </section>
      </article>
      <Dishes/>
      <Reviews/>
      <Map/>
    </main>
  );
}