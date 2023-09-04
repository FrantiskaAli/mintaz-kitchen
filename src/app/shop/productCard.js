
import Image from "next/image"


export default function ProductCard({name, description,price, recommend,image ,keyCode}){

return (
    <section key={keyCode} className="bg-black/[.7] text-orange-50 h-fit p-20">
        <article className="">
        <h2 className="text-4xl bold font-serif text-orange-200">{name}</h2>
        <p className="text-lg px-10 ">{description}</p>
        
        </article>
        <article className="h-44 w-full relative">
        <Image src={image} alt={name} layout="fill" objectFit="cover" objectPosition="center" className="z-0"/>
        <section className="text-black bg-orange-100/[.6] p-4 z-10 absolute bottom-0 right-0 ">
        <p className="font-2xl font-bold text-gray-800">{price}</p>
        </section>
        </article>
    </section>
)
    

}