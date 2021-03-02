import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import steak from '../Images/steak.svg'
import mapStyle from '../GoogleMapKey/mapStyle'
const MyPositionMarker = ({ text, icon }) =>{
  return(
    <div style={{display:'flex',flexFlow:'nowrap row'}}>
    <img 
      style={{width:'60px',height:'60px'}} 
      src={icon} 
      alt="logo"
    />
      <div style={{color:'rgb(233,40,64)',fontWeight:'600',whiteSpace:'nowrap'}}>{text}</div>
    </div>
  )
}

// Map
const GoogleApiWrapper = (props)=>{
  const [newMap, setNewMap] = useState()
  const [mapApi, setMapApi] = useState()
  const [googleMapApi, setGoogleMapApi] = useState(false)
  const handleApiLoaded = (map, maps) => {
    setGoogleMapApi(true)
    setNewMap(map)
    setMapApi(maps)
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ 
          key: 'AIzaSyCvV4cof1FqYA1X_FCa9EQeg1kRLMA0KcA',
          libraries:['places'],
        }}
        options={{styles:mapStyle.mapStyleLight}}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <MyPositionMarker
          lat='24.1565085'
          lng='120.6595701'
          icon={steak}
        />
      </GoogleMapReact>
    </div>
  );
}  

export default GoogleApiWrapper;

GoogleApiWrapper.defaultProps = {
  center: {
    lat:24.1565085,
    lng:120.6595701,
  },
  zoom: 18
};