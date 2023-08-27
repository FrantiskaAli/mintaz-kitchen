'use client'
import { useState } from "react"
import Image from "next/image"
import Link from 'next/link';

export default function Reviews() {
    const dishes = [
        {
            text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
            name: "Steakn",
            src: "/steak.png"
        },
        {
            text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
            name: "Soup",
            src: "/soup.png"
        },
        {
            text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
            name: "Cheesecake",
            src: "/cheesecake.png"
        },
    ]

    const [dish, setDish] = useState(0)

    const handleClickBack = () => {
        let newDish = dish
        if (dish > 0) { newDish = dish - 1 }
        else if (dish === 0) {
            newDish = 2
        }
        setDish(newDish)
    }

    const handleClickForward = () => {
        let newDish = dish
        if (dish === 2) { newDish = 0 }
        else {
            newDish = dish + 1
        }
        setDish(newDish)
    }
    //setInterval(handleClickForward,10000)
    return (
        <section className="flex bg-gray-950 text-orange-100 justify-between w-full md:px-10 h-screen md:flex-row flex-col">
            <article onClick={() => handleClickBack()} className="flex items-center hover:cursor-pointer text-2xl md:text-6xl">
                &#8636;
            </article>
            <article className="flex h-full">
                <section className="md:ml-20 md:h-full h-full w-screen relative rounded">
                    <figure className="absolute -z-0 inset-0">
                        <Image src={dishes[dish].src} layout="fill" objectFit="cover" objectPosition="center" />
                    </figure>
                </section>
                <section className="md:w-1/2 w-full md:-ml-52 -ml-80 bg-black/[.7] z-10 md:h-1/2 h-1/3 self-end md:self-center rounded text-center p-4 md:p-10 font-serif">
                    <h2 className="text-orange-50 font-bold md:text-3xl text-xl p-2 md:pb-8" >{dishes[dish].name}</h2>
                    <p className="text-orange-100  md:mb-20">{dishes[dish].text}</p>
                    <Link href="/menu" className=" md:p-4 pb-2 ring-2 ring-orange-100 rounded bg-orange-100/[.7] text-gray-950 text-xl font-bold hover:pointer hover:scale-125 hover:bg-orange-100 ">Check out menu</Link>
                </section>

            </article>
            <article onClick={() => handleClickForward()} className="flex items-center justify-end hover:cursor-pointer text-2xl md:text-6xl ">
                &#8641;
            </article>
        </section>
    )
}