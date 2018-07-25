import React, {Component} from 'react'
import { Container, Segment, Grid, Header } from 'semantic-ui-react'
import MainMap from './MainMap/MainMap'
import CameraListener from './CameraListener'
import WebCam from './WebCam'

class TelemTable extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: '3em'}}>
          <Grid >
            <Grid.Column width={10} >
              <MainMap/>
            </Grid.Column>
            <Grid.Column width={6}>
              <Grid.Row>
                <CameraListener />
              </Grid.Row>
              <Grid.Row>
                <WebCam />
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  };
}
export default TelemTable
