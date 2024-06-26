import { useRef } from "react"
import {MapContainer} from "react-leaflet/MapContainer"
import "leaflet/dist/leaflet.css"
import { TileLayer } from "leaflet";

const LocationMap = () => {
  const mapRef = useRef();

  return (
    <MapContainer ref={mapRef} zoom={12} center={[0,0]} className="w-screen mt-20 h-56"></MapContainer>
  )
}

export default LocationMap