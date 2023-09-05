'use client'
import products from "./products"
import ProductCard from "./productCard"


export default function Menu(){
    return (
    <main id="shopPage" className="min-w-screen min-h-screen pt-10">
        <h1 className="text-center md:text-6xl text-4xl text-orange-400 bg-black/[.7] font-serif font-bold py-6 sticky top-20 lg:top-28 z-20">Our latest offer</h1>
        <article id="shopPageStyle" className="min-w-screen min-h-screen flex flex-col flex-wrap justify-center content-center py-20 md:flex-row md:items-stretch">
            {products.map((product)=> <ProductCard
            name={product.name}
            description={product.description}
            price={product.price}
            recommend={product.recommend}
            image={product.image}
            key={product.key} />)}
        </article>
    </main>)
}