import React, {Component} from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'

class MainMap extends Component<Props,State> {
  state = {
    lat: 38.9899,
    lng: -76.489,
    zoom: 15,
  }



  render () {
    const position = [this.state.lat, this.state.lng]
    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            url="http://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
          />
          <Marker position={position}>
            <Popup>
              Test <br />
              Again
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  };
}

export default MainMap
