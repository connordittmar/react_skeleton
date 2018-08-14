import React, {Component} from 'react'
import { Ros, Topic } from 'roslib'
import {Image, Card} from 'semantic-ui-react'

class CameraListener extends Component<Props,State> {
  subscriber = new Topic({
    ros: new Ros({
      url: this.props.url
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
        <Card>
          <Image size='medium' src={this.state.imagedata}/>
          <Card.Content><Card.Meta>Point Grey Feed</Card.Meta></Card.Content>
        </Card>
      </div>
    )
  };
}
export default CameraListener
