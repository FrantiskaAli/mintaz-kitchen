'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

// Custom previous arrow button
const PrevArrow = (props) => (
    <button
    className="text-6xl font-bold text-orange-50 z-50 w-full md:w-fit md:absolute md:right-10 md:top-1/3 md:text-black"
      onClick={props.onClick}
    >
     &#8594;
    </button>
  );
  
  // Custom next arrow button
  const NextArrow = (props) => (
    <button
      className="text-6xl font-bold text-orange-50 z-50 w-full md:w-fit md:absolute md:left-10 md:top-1/3 md:text-black"
      onClick={props.onClick}
    >
      &#8592;
    </button>
  );
  



export default function Reviews() {


    var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        autoplaySpeed: 3000,
        autoplay: false,
        focusOnSelect: true,
        arrows: true,
        prevArrow: <PrevArrow />, // Custom previous arrow
        nextArrow: <NextArrow />, // Custom next arrow
    };



    return (
        <section>
              <section className="md:text-5xl text-3xl w-full py-8 text-orange-100 text-center border-double border-t-8 border-orange-100 bg-gray-950">
        <h2 className="md:text-5xl font-serif font-bold">What was said about us</h2>
      </section>
        <Slider {...settings}>

        <section className="h-dishes flex justify-center content-center"  >
                <article className="md:p-20  text-gray-900 text-center bg-orange-100 flex flex-col h-full justify-evenly">
                    <h3 className="text-2xl font-serif font-medium">&#34;blblblb sdihod djshof jsdhf jsdbd f dfjbsdf jfbsn df fjbdf sdkfbfe  dfbsf dfkjsdfisdf fsd ffoidsf&#34;</h3>
                    <p className="text-right text-xl font-bold">tom and jerry</p>
                </article>
            </section>
            <section className="h-dishes flex justify-center content-center" >
                <article className="md:p-20  text-gray-900 text-center bg-orange-100 flex flex-col h-full justify-evenly" >
                    <h3 className="text-2xl font-serif font-medium">&#34;blblblb sdihod djshof jsdhf jsdbd f dfjbsdf jfbsn df fjbdf sdkfbfe  dfbsf dfkjsdfisdf fsd ffoidsf&#34;</h3>
                    <p className="text-right text-xl font-bold">tom and jerry</p>
                </article>
            </section>
            <section className="h-dishes flex justify-center content-center"  style={{ width: 100 }}>
                <article className="md:p-20  text-gray-900 text-center bg-orange-100 flex flex-col h-full justify-evenly">
                    <h3 className="text-2xl font-serif font-medium">&#34;blblblb sdihod djshof jsdhf jsdbd f dfjbsdf jfbsn df fjbdf sdkfbfe  dfbsf dfkjsdfisdf fsd ffoidsf&#34;</h3>
                    <p className="text-right text-xl font-bold">tom and jerry</p>
                </article>
            </section>

        </Slider>
        </section>
    )
}
