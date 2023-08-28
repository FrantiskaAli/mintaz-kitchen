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
      window.addEventListener("resize", setupInstances);
  
      return () => {
        window.removeEventListener("resize", setupInstances);
      };
    }, [looperInstances, setupInstances]);
  
    return (
      <section className="looper" ref={outerRef}>
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
               <section className="contentBlock contentBlock--one relative ">
         <Image src="/grill1.jpeg"  layout="fill" objectFit="cover" objectPosition="center"  />
        </section>
        <section className="contentBlock contentBlock--one relative">
         <Image src="/Grill2.jpg"  layout="fill" objectFit="cover" objectPosition="center"  />
        </section>
        <section className="contentBlock contentBlock--one relative">
         <Image src="/Grill3.jpeg"  layout="fill" objectFit="cover" objectPosition="center"  />
        </section>
        <section className="contentBlock contentBlock--one relative">
         <Image src="/Grill4.jpeg"  layout="fill" objectFit="cover" objectPosition="center"  />
        </section>
        <section className="contentBlock contentBlock--one relative">
         <Image src="/Grill5.jpeg"  layout="fill" objectFit="cover" objectPosition="center"  />
        </section>
        <section className="contentBlock contentBlock--one relative">
         <Image src="/Grill6.jpeg"  layout="fill" objectFit="cover" objectPosition="center"  />
        </section>
            </section>
          ))}
        </article>
      </section>
    ); 
  }
  
 