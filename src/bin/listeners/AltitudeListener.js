import React, {Component} from 'react'
import { Ros, Topic } from 'roslib'

class AltitudeListener extends Component<Props,State> {
  subscriber = new Topic({
    ros: new Ros({
      url: this.props.url
    }),
    name: '/mavros/global_position/rel_alt',
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
        altitude: message.data,
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
        <p> Altitude MSL: {this.formatItem(this.state.altitude)}</p>
      </div>
    )
  };
}
export default AltitudeListener
