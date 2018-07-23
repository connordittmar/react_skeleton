import React, {Component} from 'react'
import { Ros, Topic } from 'roslib'
import {Image} from 'semantic-ui-react'

class CameraListener extends Component<Props,State> {
  subscriber = new Topic({
    ros: new Ros({
      url: "ws://192.168.1.40:8080"
    }),
    name: '/camera/image/compressed',
    messageType: 'sensor_msgs/CompressedImage'
  })

  state = {
    index: -1,
    message: {},
    imagedata: null,
    messageCount: 0,
  }

  componentDidMount = () => {
    this.subscribe();
  }
  componentWillUnmount = () => {
    this.subscriber.unsubscribe();
  }

  subscribe = () => {
    this.subscriber.subscribe((message: Message) => {
      this.setState(prevState => ({
        message: message,
        messageCount: prevState.messageCount += 1,
        imagedata: "data:/image/jpg;base64," + message.data,
      }));
    });
  }

  render() {
    return (
      <div>
        <Image size='medium' src={this.state.imagedata}/>
      </div>
    )
  };
}
export default CameraListener
