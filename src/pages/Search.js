import React from "react";
import { Component } from "react";
// import GoogleMapReact from 'google-map-react';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";


class SearchComponent extends Component {

  render() {
    return (
      // <div>
      //   <h1>This is the search page for {this.props.params.name}.</h1>
      // </div>
      <div style={{padding: "10px", borderRadius: "5px"}}>
        <Map
          google={this.props.google}
          zoom={8}
          style={{
            width: '40%',
            height: '87%',
            borderRadius: '10px'
          }}
          initialCenter={{ lat: 32.875120, lng: -117.218860}}
      >
        <Marker position={{ lat: 33.00, lng: -117.00}} />
      </Map>
      </div>
    );
  }
}



// export default SearchComponent;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB-vvXcp3O6oPDD_Lgj9Hk4cNxnsdVhx90'
})(SearchComponent);
