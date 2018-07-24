import React, {Component} from 'react'
import { Map, TileLayer, Marker, Popup, MapControl} from 'react-leaflet'
import MapUI from './MapUI'
class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 38.9899,
      lng: -76.489,
      zoom: 15,
    };
  }

  render () {
    const position = [this.state.lat, this.state.lng]
    return (
      <div>
        <Map center={position} zoom={this.state.zoom} MapUI>
          <MapUI position='topright'/>
            <TileLayer url="http://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" />
        </Map>
      </div>
    )
  };
}

export default MainMap
