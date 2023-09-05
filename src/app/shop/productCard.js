
import Image from "next/image"


export default function ProductCard({name, description,price, recommend,image ,keyCode}){

return (
    <section key={keyCode} className="bg-black/[.7] text-orange-50 pt-6 px-6 mx-4 my-2 min-h-1/2 md:min-h-fit rounded-md light-shadowShop max-w-lg flex-grow flex flex-col justify-between">
        <article className="text-center">
        <h2 className="text-4xl font-bold font-serif text-orange-200 ">{name}</h2>
        <p className="text-lg px-10 ">{description}</p>
        
        </article>
        <article className="h-44 lg:h-52 w-4/5 self-center relative">
        <Image src={image} alt={name} layout="fill" objectFit="cover" objectPosition="center" className="z-0 rounded-t-md"/>
        <section className="text-orange-200 bg-black/[.7] p-6 z-10 absolute transform translate-y-1/2 right-0 rounded-l-md  ">
        <p className="text-4xl font-bold animate-pulse">${price}</p>
        </section>
        </article>
    </section>
)
    

}