import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={
          {
            lat: 24.1565085,
            lng: 120.6573761
          }
        }
      >
        <Marker position={{ lat: 25.1565085, lng: 121.6573761}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCvV4cof1FqYA1X_FCa9EQeg1kRLMA0KcA'
})(MapContainer);