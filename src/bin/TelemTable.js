import React, {Component} from 'react'
import { Container, Segment, Grid, Header } from 'semantic-ui-react'
import MainMap from './MainMap/MainMap'
import CameraListener from './CameraListener'
import WebCam from './WebCam'

class TelemTable extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: '5em 0em' }}>
          <Grid columns={2}>
            <Grid.Column width={10} >
              <MainMap />
            </Grid.Column>
            <Grid.Column width={2}>
            <CameraListener />
            <WebCam />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  };
}
export default TelemTable
