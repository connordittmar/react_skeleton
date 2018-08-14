import React, {Component} from 'react'
import { Ros, Topic } from 'roslib'

class BatteryListener extends Component<Props,State> {
  subscriber = new Topic({
    ros: new Ros({
      url: this.props.url
    }),
    name: '/mavros/battery',
    messageType: 'sensor_msgs/BatteryState'
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
        charge: message.percentage,
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
        <p>Battery: {this.formatItem(this.state.charge)*100}%</p>
      </div>
    )
  };
}
export default BatteryListener
