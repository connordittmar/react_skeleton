import React, {Component} from 'react'
import { Container, Segment, Grid, Header } from 'semantic-ui-react'
import MainMap from '../bin/MainMap/MainMap'

class JudgePanel extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: '4em'}}>
              <MainMap/>
        </Container>
      </div>
    )
  };
}
export default JudgePanel
