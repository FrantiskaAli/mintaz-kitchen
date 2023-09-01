'use client'
import products from "./products"
import ProductCard from "./productCard"


export default function Menu(){
    return (
    <main id="shopPage" className="min-w-screen min-h-screen">
        <article id="shopPageStyle" className="min-w-screen min-h-screen flex justify-center py-20">
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