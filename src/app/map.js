'use client'
import { MapContainer, TileLayer, Circle } from "react-leaflet"
import 'leaflet/dist/leaflet.css'


export default function Map() {

    const position = [51.505, -0.09]
    const center = [51.505, -0.09]
    const fill = { color: '#fff7ed' }

    return (
        <section className=" flex flex-col-reverse md:flex-row-reverse bg-black md:items-center justify-between md:py-10 md:pr-10 w-screen">
            <MapContainer center={[51.505, -0.09]} zoom={11} scrollWheelZoom={false} className="map-container h-full  md:w-1/2 z-10 w-screen md:ring-8 ring-2 ring-orange-50">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Circle
                    center={center}
                    pathOptions={fill}
                    radius={5000}
                    stroke={false}
                />

            </MapContainer>
            <article className="flex flex-col items-center w-screen md:w-1/2 px-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className="text-5xl  fill-orange-100 motion-safe:animate-bounce"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                
                <h3 className="text-2xl md:text-3xl font-bold font-serif"> Where do we deliver ?</h3>
            </article>
        </section>
    )
}