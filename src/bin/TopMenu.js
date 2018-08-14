import React, {Component} from 'react'
import { Container, Menu, Radio, Icon} from 'semantic-ui-react'
import TelemetryStatusListener from './TelemetryStatusListener'

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: {
        isConnected: true}
      };
  }

  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item href='index.html' name='Main' />
            <Menu.Menu position='right'>
              <Menu.Item><TelemetryStatusListener /></Menu.Item>
              <Menu.Item>Network Status: {this.state.network.isConnected? 'Connected' : 'OFF'}</Menu.Item>
              <Menu.Item href='settings.html' icon='cog'/>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  };
}
export default TopMenu
