import L from 'leaflet'
import ReactDOM from 'react-dom'
import {Container,Menu} from 'semantic-ui-react'
import { MapControl, withLeaflet } from 'react-leaflet'
import type {MapControlProps} from 'react-leaflet'

class MapUI extends MapControl<LeafletElement, Props> {

  componentWillMount() {
    const legend = L.control({position: 'bottomright'});
    const jsx = (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
    legend.onAdd = function (map) {
      let div = L.DomUtil.Create('div','');
      ReactDOM.render(jsx,div);
      return div;
    };
    this.leafletElement = legend;
  }
}
export default withLeaflet(MapUI)
