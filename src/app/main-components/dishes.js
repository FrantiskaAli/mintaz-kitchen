'use client'
import { useState } from "react"
import Image from "next/image"

export default function Reviews (){
    const dishes = [
        {text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
        name:"Steakn",
        src:"/steak.png"},
        {text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
        name:"Soup",
        src:"/soup.png"},
        {text: "lorem ispum chipsum dipsum wht ncdjsibv chdbv csdbf cdsjkb cudsibbf jfb csdb  jkcsdui jcbd jbsd kjsd jksdbf ksjfb kjsc kdsjbfir jdbisff !!!",
        name:"Cheesecake",
        src:"/cheesecake.png"},
    ]

    const [dish, setDish] = useState(0)
   
    const handleClickBack = ()=>{
        let newDish= dish
        if (dish > 0 )
        {newDish = dish - 1}
        else if (dish === 0){
            newDish = 2 
        }
        setDish(newDish)
    }

    const handleClickForward = ()=>{
        let newDish = dish
        if (dish === 2 )
        {newDish = 0}
        else {
            newDish = dish + 1
        }
        setDish(newDish)
    }
    //setInterval(handleClickForward,10000)
return(
    <section>
            <article onClick={()=>handleClickBack()}>
                sipka
            </article>
            <article>
                <Image src={dishes[dish].src} width={200} height={300}/>
                <section>
                    <h2>{dishes[dish.name]}</h2>
                    <p>{dishes[dish].text}</p>
                </section>
                
            </article>
            <article onClick={()=>handleClickForward()}>
                sipka
            </article>
    </section>
)
}