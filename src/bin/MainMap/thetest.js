import L from 'leaflet'
import {Container,Menu} from 'semantic-ui-react'

const themenu = () => (
  <div>
    <Container>
      <Menu>
        <Menu.Item>Test</Menu.Item>
      </Menu>
    </Container>
  </div>
)

L.Control.Watermark = L.Control.extend({
  onAdd: function(map) {
    return themenu;
  }
  ,
  onRemove: function(map) {

  }
});

L.Control.watermark = function(opts) {
  return new L.Control.Watermark(opts);
}

export default L.Control.Watermark
