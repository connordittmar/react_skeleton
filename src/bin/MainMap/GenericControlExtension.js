import {Control, DomUtil} from 'leaflet'
import ReactDOM from 'react-dom'
type Props = {
  children: React.Element<any>,
}

class GenericControlExtension extends Control<Props> {
  onAdd (props: Props) {
   let div = DomUtil.create('div','');
   const jsx = (props.children);
   ReactDOM.render(jsx,div);
   return div;
  }

  onRemove () {
  }
}

export default GenericControlExtension
