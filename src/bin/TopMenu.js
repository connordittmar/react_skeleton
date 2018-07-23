import React, {Component} from 'react'
import { Container, Menu, Radio, Icon} from 'semantic-ui-react'
import TelemetryStatusListener from './TelemetryStatusListener'

class TopMenu extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item name='telemetry' />
            <Menu.Item name='imaging'/>
            <Menu.Item name='network'/>
            <Menu.Menu position='right'>
              <Menu.Item><TelemetryStatusListener /></Menu.Item>
              <Menu.Item color='green'>Network Status: Connected</Menu.Item>
              <Menu.Item icon='cog'/>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  };
}
export default TopMenu
