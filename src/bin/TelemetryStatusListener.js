import React, {Component} from 'react'
import { Ros, Topic } from 'roslib'

class TelemetryStatusListener extends Component<Props,State> {
  subscriber = new Topic({
    ros: new Ros({
      url: "ws://localhost:8080"
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

  formatItem = (item: float) => {
    if (item != null) {
      return item.toFixed(2)
    }
    else {
      return item
    }
  }

  render() {
    return (
      <div>
        <p> Telemetry: {this.formatItem(this.state.rate)} hz</p>
      </div>
    )
  };
}
export default TelemetryStatusListener
