import React, {Component} from 'react'
import {Image} from 'semantic-ui-react'

class WebCam extends Component<Props,State> {
  sourceurl = 'http://192.168.1.80/mjpg/video.mjpg';

  render() {
    return (
      <div>
        <Image size='medium' src={this.sourceurl}/>
      </div>
    )
  };
}
export default WebCam
