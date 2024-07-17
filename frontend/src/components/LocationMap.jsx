import {Map, APIProvider} from "@vis.gl/react-google-maps"

const LocationMap = () => {
  const apiKey = import.meta.env.VITE_GGOGLE_MAPS_API_KEY;
  console.log(apiKey);

  return (
    <APIProvider apiKey={apiKey}>
      <Map className="w-screen h-60 mt-20 pointer-events-none bg-gray-300" disableDefaultUI={true} defaultCenter={{lat: 5.6033309, lng: -0.1776408}} defaultZoom={13}>
      </Map>
    </APIProvider>    
  )
}

export default LocationMap