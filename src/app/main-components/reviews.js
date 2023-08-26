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
    <section>
            <article onClick={()=>handleClickBack()}>
                sipka
            </article>
            <article>
                <h3>{reviews[review].text}</h3>
                <p>{reviews[review].name}</p>
                <p>{reviews[review].stars}</p>
            </article>
            <article onClick={()=>handleClickForward()}>
                sipka
            </article>
    </section>
)
}