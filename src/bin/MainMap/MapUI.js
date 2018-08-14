import L from 'leaflet'
import React from 'react'
import ReactDOM from 'react-dom'
import { MapControl, withLeaflet } from 'react-leaflet'


class MapUI extends MapControl {

  componentWillMount() {
    const ui_element = L.control({position: 'bottomleft'});
    const jsx = (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
    ui_element.onAdd = function(map){
      let div = L.DomUtil.create('div','');
      ReactDOM.render(jsx,div);
      return div;
    };
    this.leafletElement = ui_element;
    }

  createLeafletElement () {
    return this.leafletElement
  }
}

export default withLeaflet(MapUI)
