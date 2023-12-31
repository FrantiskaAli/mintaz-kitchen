import React from "react";
import {useState, useRef, useEffect, useCallback} from "react"
import Image from "next/image";

export default function InfiniteLooper({
    speed,
    direction,
  }) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef(null);
  
    function resetAnimation() {
      if (innerRef?.current) {
        innerRef.current.setAttribute("data-animate", "false");
  
        setTimeout(() => {
          if (innerRef?.current) {
            innerRef.current.setAttribute("data-animate", "true");
          }
        }, 10);
      }
    }
  
    const setupInstances = useCallback(() => {
      if (!innerRef?.current || !outerRef?.current) return;
  
      const { width } = innerRef.current.getBoundingClientRect();
  
      const { width: parentWidth } = outerRef.current.getBoundingClientRect();
  
      const widthDeficit = parentWidth - width;
  
      const instanceWidth = width / innerRef.current.children.length;
  
      if (widthDeficit) {
        setLooperInstances(
          looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
        );
      }
  
      resetAnimation();
    }, [looperInstances]);
  
    useEffect(() => setupInstances(), [setupInstances]);
  
    useEffect(() => {
       if (typeof window !== 'undefined') {window.addEventListener("resize", setupInstances);}
  
      return () => {
        if (typeof window !== 'undefined') {window.removeEventListener("resize", setupInstances);}
      };
    }, [looperInstances, setupInstances]);
  
    return (
      <section className="looper lg:py-10" ref={outerRef}>
        <article className="looper__innerList" ref={innerRef} data-animate="true">
          {[...Array(looperInstances)].map((_, ind) => (
            <section
              key={ind}
              className="looper__listInstance"
              style={{
                animationDuration: `${speed}s`,
                animationDirection: direction === "right" ? "reverse" : "normal",
              }}
            >
               <section className="contentBlock contentBlock--one relative border-4 border-solid border-black ">
         <Image src="/grill1.jpeg"  layout="fill" objectFit="cover" objectPosition="center" className="rounded" alt="grilled chicken tights"/>
        </section>
        <section className="contentBlock contentBlock--one relative border-4 border-solid border-black">
         <Image src="/Grill2.jpg"  layout="fill" objectFit="cover" objectPosition="center" className="rounded" alt="grilled ribs" />
        </section>
        <section className="contentBlock contentBlock--one relative border-4 border-solid border-black">
         <Image src="/Grill3.jpeg"  layout="fill" objectFit="cover" objectPosition="center" className="rounded" alt="burgers pn grill"/>
        </section>
        <section className="contentBlock contentBlock--one relative border-4 border-solid border-black">
         <Image src="/Grill4.jpeg"  layout="fill" objectFit="cover" objectPosition="center" className="rounded" alt="cutting crunchy crust beef ham"/>
        </section>
        <section className="contentBlock contentBlock--one relative border-4 border-solid border-black">
         <Image src="/Grill5.jpeg"  layout="fill" objectFit="cover" objectPosition="center"  className="rounded" alt="grilled lamb chops"/>
        </section>
        <section className="contentBlock contentBlock--one relative border-4 border-solid border-black">
         <Image src="/Grill6.jpeg"  layout="fill" objectFit="cover" objectPosition="center" className="rounded" alt="grilled chicken steak"/>
        </section>
            </section>
          ))}
        </article>
      </section>
    ); 
  }
  
 