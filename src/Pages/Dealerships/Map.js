/* eslint-disable max-len */
import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import userMarker from '../../Assets/Icons/user_marker.png'
import userMarkerShadow from '../../Assets/Icons/user_marker_shadow (1).png'
import dealershipMarker from '../../Assets/Icons/marker3d_no_shadow (1) (1).png'
import dealershipMarkerShadow from '../../Assets/Icons/marker3d_shadow (1).png'
import './map.css'

const MyComponent = ({ showDealers, dealers }) => {

  const userIcon = L.icon({
    iconUrl: `${userMarker}`,
    shadowUrl: `${userMarkerShadow}`,
    iconSize: [40, 40],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [40, 40],
  });

  const dealershipsIcon = L.icon({
    iconUrl: `${dealershipMarker}`,
    shadowUrl: `${dealershipMarkerShadow}`,
    iconSize: [70, 70],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [70, 70],
  });

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer style={{ height: '94%', width: '100%' }} center={[3.1319, 101.6841]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[3.1319, 101.6841]} icon={userIcon} />
        {showDealers && dealers.map(d => (
          <Marker position={d.geocode} icon={dealershipsIcon}>
            <Popup>{d.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MyComponent;