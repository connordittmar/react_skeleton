import React, {Component} from 'react'
import { Ros, Topic } from 'roslib'
import SubscriberCard from './SubscriberCard'

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

class Subscriber extends Component<Props,State> {
  subscriber = new Topic({
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
      }));
    });
  }


  render() {
    let state = "Red"
    if (this.state.messageCount > 0) {
      if (this.state.message) state = "Green"
      else state = "Amber"
    }
    return (
        <SubscriberCard
          name={this.props.topic + " (" + this.state.messageCount + ")"}
          state={state}
          onRequestClose={this.props.onRequestClose}
          message={this.state.message} />
    );
  };
}
export default Subscriber
