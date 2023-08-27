'use client'
import { useState } from "react"


export default function Reviews (){
    const reviews = [
        {text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
        name:"Jane Austin",
        stars:""},
        {text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
        name:"tony blair",
        stars:""},
        {text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
        name:"oscar wild",
        stars:""},
    ]

    const [review, setReview] = useState(0)
    const handleClickBack = ()=>{
        let newRev = review
        if (review > 0 )
        {newRev = review - 1}
        else if (review === 0){
         newRev = 2 
        }
        setReview(newRev)
    }

    const handleClickForward = ()=>{
        let newRev = review
        if (review === 2 )
        {newRev = 0}
        else {
         newRev = review + 1
        }
        setReview(newRev)
    }
    //setInterval(handleClickForward,10000)
return(
    <section className="flex md:flex-row flex-col justify-between  md:p-20 bg-orange-100 text-gray-950 ">
            <article onClick={()=>handleClickBack()} className="flex items-center hover:cursor-pointer text-9xl">
            &#8637;
            </article>
            <article className="md:p-20 p-10">
                <h3 className="text-2xl font-serif font-medium pb-10">&#34;{reviews[review].text}&#34;</h3>
                <p className="text-right text-xl font-bold">{reviews[review].name}</p>
                <p>{reviews[review].stars}</p>
            </article>
            <article onClick={()=>handleClickForward()} className="flex items-center hover:cursor-pointer text-9xl justify-end">
            &#8640;
            </article>
    </section>
)
}