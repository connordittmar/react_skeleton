import L from 'leaflet'
import React from 'react'
import ReactDOM from 'react-dom'
import { MapControl, withLeaflet } from 'react-leaflet'


class MapUI extends MapControl {

  componentWillMount() {
    const legend = L.control({position: 'bottomleft'});
    const jsx = (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
    legend.onAdd = function(map){
      let div = L.DomUtil.create('div','');
      ReactDOM.render(jsx,div);
      return div;
    };
    this.leafletElement = legend;
    }

  createLeafletElement () {
    return this.leafletElement
  }
}

export default withLeaflet(MapUI)
