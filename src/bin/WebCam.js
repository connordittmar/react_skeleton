import React, {Component} from 'react'
import {Image, Label, Card} from 'semantic-ui-react'

class WebCam extends Component<Props,State> {
  sourceurl = 'http://192.168.1.80/mjpg/video.mjpg';

  render() {
    return (
      <div>
        <Card>
          <Image src={this.sourceurl} fluid/>
          <Card.Content>
            <Card.Meta>Axis Camera Feed</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    )
  };
}
export default WebCam
