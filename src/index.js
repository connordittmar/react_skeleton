// Example Javascript for testing purposes
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Table, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Button } from 'semantic-ui-react';
class Updater extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        pos_x:[],
        pos_y:[],
        heading:[],
        timestamp:[]
    };
  }

  componentDidMount() {
    // Is there a React-y way to avoid rebinding `this`? fat arrow?
    this.timerID = setInterval(
        () => this.tick(),
        100
    );

  }

  componentWillUnmount() {
    this.serverRequest.abort();
    clearInterval(this.timerID);
  }

  tick() {
      this.setState({
          date: new Date()
      });
      var _this=this;
      // axios is a node requests handler, you could use whatever you want here.
      this.serverRequest =
        axios.get('http://192.168.1.6:8000/hooks' )
          .then(function(result) {
              console.log(result)
            _this.setState({
              pos_x: result.data["0"].fields.pos_x,
              pos_y: result.data["0"].fields.pos_y,
              heading: result.data["0"].fields.heading,
              timestamp: result.data["0"].fields.timestamp,
            });
          })
  }

  render() {
    return (
      <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src='./bill.png'
              style={{ marginRight: '1.5em' }}
            />
            Home
          </Menu.Item>

          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>Image Processing</Dropdown.Item>
              <Dropdown.Item>Logs</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as='a' header>Status: time is {this.state.date.toLocaleTimeString()}</Menu.Item>
        </Container>
      </Menu>
        <Container style={{ padding: '5em 0em' }}>
          <Header as='h2'>Telemetry Stream</Header>
            <Segment attached='top'>ASV Tracking.</Segment>
              <Table attached='bottom'>
                <Table.Header>
                  <Table.HeaderCell>Telemetry Stream</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Position X (meters)</Table.Cell>
                    <Table.Cell>{this.state.pos_x}</Table.Cell>
                    <Table.Cell>Position Y (meters)</Table.Cell>
                    <Table.Cell>{this.state.pos_y}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Heading (degrees)</Table.Cell>
                    <Table.Cell>{this.state.heading}</Table.Cell>
                    <Table.Cell>Timestamp</Table.Cell>
                    <Table.Cell>{this.state.timestamp}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Container>
          </div>
    );
  }
}
ReactDOM.render(
  <Updater />,
  document.getElementById("root")
);
