import L from 'leaflet'
import React from 'react'
import ReactDOM from 'react-dom'
import {Button,Icon} from 'semantic-ui-react'
import { MapControl, withLeaflet } from 'react-leaflet'
import type {MapControlProps} from 'react-leaflet'



L.Control.Watermark = L.Control.extend({
  onAdd: function(map) {
    let div = L.DomUtil.create('div','');
    const jsx = (
      <div>
        <Button circular icon>
          <Icon name='location arrow'/>
        </Button>
        <Button circular icon>
          <Icon name='expand'/>
        </Button>
      </div>
    );
    ReactDOM.render(jsx,div);
    return div;
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
