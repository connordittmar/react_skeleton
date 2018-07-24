import L from 'leaflet'
import {Container,Menu} from 'semantic-ui-react'
import { MapControl, withLeaflet } from 'react-leaflet'
import type {MapControlProps} from 'react-leaflet'

L.Control.Watermark = L.Control.extend({
  onAdd: function(map) {
    var img = L.DomUtil.create('img');
    img.src = './bill.png';
    img.style.width = '200px';
    return img;
  },

  onRemove: function(map) {
  }
});

type LeafletElement = L.Control.Watermark
type Props = {
  position?: string,
} & MapControlProps

class MapUI extends MapControl<LeafletElement, Props> {
  createLeafletElement (props: Props): LeafletElement {
    return new L.Control.Watermark(props)
  }
}

export default withLeaflet(MapUI)
