'use client'
import { MapContainer, TileLayer, Circle } from "react-leaflet"
import 'leaflet/dist/leaflet.css'


export default function Map() {

    const position = [51.505, -0.09]
    const center = [51.505, -0.09]
    const fill = {color: 'orange'}
    
    return (
        <section className="h-72">
            <MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={false} className="map-container h-full w-1/2">
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
            <article>
              <h3> Where do we deliver ?</h3> 
            </article>
        </section>
    )
}