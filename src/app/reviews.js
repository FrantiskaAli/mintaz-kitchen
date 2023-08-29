'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

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
        arrows: true

    };


    return (
        <Slider {...settings}>

            <section className="h-dishes flex justify-center content-center bg-orange-100  w-1/2 "  >
                <article className="md:p-20  text-gray-900 text-center bg-orange-100 flex flex-col h-full justify-evenly">
                    <h3 className="text-2xl font-serif font-medium">&#34;blblblb&#34;</h3>
                    <p className="text-right text-xl font-bold">tom and jerry</p>
                </article>
            </section>
            <section className="h-dishes flex justify-center content-center"  >
                <article className="md:p-20  text-gray-900 text-center bg-orange-100 flex flex-col h-full justify-evenly">
                    <h3 className="text-2xl font-serif font-medium">&#34;blbhfgggnvnvbnlblb&#34;</h3>
                    <p className="text-right text-xl font-bold">tom and jerry</p>
                </article>
            </section>
            <section className="h-dishes flex justify-center content-center"  >
                <article className="md:p-20  text-gray-900 text-center bg-orange-100 flex flex-col h-full justify-evenly">
                    <h3 className="text-2xl font-serif font-medium">&#34;blblblb sdihod djshof jsdhf jsdbd f dfjbsdf jfbsn df fjbdf sdkfbfe  dfbsf dfkjsdfisdf fsd ffoidsf&#34;</h3>
                    <p className="text-right text-xl font-bold">tom and jerry</p>
                </article>
            </section>

        </Slider>
    )
}