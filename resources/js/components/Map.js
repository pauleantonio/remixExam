import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

export class MapContainer extends Component {
  render() {
    
    return (
        
        <div  style={{ position: 'relative',  
        width: '100%',
        height: '100vh'}}>
            
            <Map
             google={this.props.google}
          
              zoom={14}
              >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
        </Map>

        
        </div>
  
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAYG482P-M6hxj75svjpPQx2ol5Juxgclg')
})(MapContainer)