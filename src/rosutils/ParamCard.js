import React, {Component} from 'react'
import { Card, Button, Input} from 'semantic-ui-react'
import { Ros, Param } from 'roslib'

type Props = {
  onRequestClose?: () => void,
  ros: Ros,
  param: String,
}


class ParamCard extends Component<Props,State> {
  constructor(props) {
    super(props);
    this.handleField = this.handleField.bind(this);
    this.state = {
      value: "",
    };
  }
  paramhandle = new Param({
    ros: this.props.ros,
    name: this.props.param,
  })


  componentDidMount = () => {
  }
  componentWillUnmount = () => {
  }

  setparam () {
    if (this.state.value == 'true') {
      this.paramhandle.set(true);
    }
    else {
      this.paramhandle.set(false);
    }
  }

  getparam () {
    this.paramhandle.get((value) => {
        this.setState(value: value);
    });
  }

  handleField (e) {
    this.setState({value: e.target.value});
  }


  render() {
    const paramvalue = this.state.value;
    return (

      <Card>
        <Card.Content>
            <Card.Header>Param: {this.props.param} : {paramvalue}</Card.Header>
            <Input  value={paramvalue} placeholder='...' onChange={this.handleField} />
            <div/>
            <Button onClick={() => this.setparam()}>Set</Button>
            <Button onClick={() => this.getparam()}>Get</Button>
        </Card.Content>
      </Card>
    );
  };
}
export default ParamCard
