import React, {Component} from 'react'
import { Container, Menu, Radio, Icon} from 'semantic-ui-react'
import TelemetryStatusListener from '../bin/listeners/TelemetryStatusListener'
import AltitudeListener from '../bin/listeners/AltitudeListener'

class TopJudgesBar extends Component {
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
            <Menu.Item><AltitudeListener url={this.props.url}/></Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item><TelemetryStatusListener /></Menu.Item>
              <Menu.Item>Network Status: {this.state.network.isConnected? 'Connected' : 'OFF'}</Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
  };
}
export default TopJudgesBar
