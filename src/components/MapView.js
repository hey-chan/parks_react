import React, { useState } from 'react';
// import { useParams } from 'react-router'; 
// import { getParkPost } from '../services/parkPostServices';
// import { useGlobalState } from '../config/stateContext'
import {Link} from 'react-router-dom';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import mapStyles from '../mapStyles';
// import parks from '../data/parks';


// FOR MAP VIEW, and landing page

const libraries = ['places'];

const containerStyle = {
  width: '100vw',
  height: '82vh'
};

const center = {
  lat: -37.840935,
  lng: 144.946457
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

export default function MapView() {
  const [selectedPark, setSelectedPark] = useState(null);
  // const {store} = useGlobalState();
  // const {parkPosts} = store;

  const {isLoaded, loadError} = useLoadScript(
    {
      googleMapsApiKey: "AIzaSyC8NxtPpxOWXgvnjId9HRzz-hG9Wlcj6AA",
      libraries,
    }
  )

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return <div>
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={12}
      center={center}
      options={options}
    >
      {parkPosts.map((park) => (
        <Marker 
          key={park.id}
          position={{
            lat: park.latitude, 
            lng: park.longitude
          }}
        onClick={() => {
          setSelectedPark(park);
        }}
        />
      ))}
        
      {/* {selectedPark && (
        <InfoWindow
          position={{
            lat: selectedPark.latitude, 
            lng: selectedPark.longitude
          }}
          onCloseClick={() => {
            setSelectedPark(null);
          }}
        >
          <div>
            <h4 style={{fontWeight: "bold"}}><Link to={`/parks/${selectedPark.id}`}>{selectedPark.name}</Link></h4>
            {selectedPark.address.number ? selectedPark.address.number : null} {selectedPark.address.street},<br/> {selectedPark.address.suburb}, {selectedPark.address.postcode}<br/>
            {selectedPark.category.name}
          </div>
        </InfoWindow>
      )} */}
    </GoogleMap>
  </div>
}
