import React, {Component} from 'react'
import { Ros, Topic } from 'roslib'
import PublisherCard from './PublisherCard'

type Props = {
  onRequestClose?: () => void,
  ros: Ros,
  topic: string,
  type: string,
}

type State = {
  autoscroll: boolean,
  index: number,
  message: Message,
  messageCount: number,
}

class PublisherCard extends Component<Props,State> {
  publisher = new Topic({
    ros: this.props.ros,
    name: this.props.topic,
    messageType: this.props.type,
  })

  state = {
    autoscroll: true,
    index: -1,
    message: {},
    messageCount: 0,
  }

  componentDidMount = () => {
  }
  componentWillUnmount = () => {
  }

  publish = (messsage: Message) => {
    this.publisher.publish((message));
  }


  render() {

    return (
        <PublisherCard
          name={this.props.topic + "Publisher"}
          state={state}
          onRequestPublish={this.publish}
          message={this.state.message} />
    );
  };
}
export default Publisher
