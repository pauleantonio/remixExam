import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

export class MapContainer extends Component {
      constructor(){
        super()
        this.state={
            id:0,
            name:'',
            points:[],
            point:''
        }
        
      
    }

    componentDidMount(){
      this.getPoints();
 
    }

    getPoints(){
      return axios
      .get('/api/point',{
          headers:{'Content-Type':'application/json'}
      })
      .then(res=>{
          this.setState({
            points:res.data
            
          })
          console.log(res.data)
      }).catch(res=>{
         console.log(res);
      })
  }

  render() {
    
    const posts=()=>{
            if(!this.state.points){
                return ('');
            }
            if(this.state.points.length==0){
                return ('');
            }
            else{

                return  this.state.points.map((point,index)=>
                <Marker key={index}  onClick={this.onMarkerClick}
                title={'point.name'}  
                name={'SOMA'}
                position={{lat:  point.lat, lng:  point.lng}} />
         
                )
            }
        
        }

    return (
        
        <div  style={{ position: 'relative',  
        width: '100%',
        height: '100vh'}}>
                {posts()}
            <Map
             google={this.props.google}
             initialCenter={{
              lat: 14.319431,
              lng: 121.059494
            }}
              zoom={14}
              >
           {posts()}
           
        </Map>

        
        </div>
  
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAYG482P-M6hxj75svjpPQx2ol5Juxgclg')
})(MapContainer)