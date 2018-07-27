import React, {Component} from 'react'
import { Map, TileLayer, Marker, Popup, MapControl} from 'react-leaflet'
import MapUI from './MapUI'
import { Button, Icon } from 'semantic-ui-react'
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
          <MapUI
            className='leaflet-transparent'
            position="bottomleft">
            <div>
              <Button onClick={()=>alert('locate')} circular icon>
                <Icon name='location arrow'/>
              </Button>
              <Button circular icon>
                <Icon name='expand'/>
              </Button>
            </div>
            </MapUI>
          <TileLayer url="http://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" />
        </Map>
      </div>
    )
  };
}

export default MainMap
