import React, {Component} from 'react'
import { Ros, Topic } from 'roslib'

class TelemetryStatusListener extends Component<Props,State> {
  subscriber = new Topic({
    ros: new Ros({
      url: "ws://192.168.1.10:8080"
    }),
    name: '/connections/judges/hz',
    messageType: 'std_msgs/Float64'
  })

  state = {
    index: -1,
    message: {},
    rate: null,
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
        rate: message.data,
      }));
    });
  }


  render() {
    return (
      <div>
        <p> Telemetry: {this.state.rate} </p>
      </div>
    )
  };
}
export default TelemetryStatusListener
