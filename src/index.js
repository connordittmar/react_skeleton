// Example Javascript for testing purposes
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Ros, Topic } from 'roslib';
import 'semantic-ui-css/semantic.min.css';
import { Container, Table, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Button } from 'semantic-ui-react';

class PGCamera extends React.Component<Props,State> {
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
                          <Table.Cell></Table.Cell>
                          <Table.Cell>Position Y (meters)</Table.Cell>
                          <Table.Cell></Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Heading (degrees)</Table.Cell>
                          <Table.Cell></Table.Cell>
                          <Table.Cell>Timestamp</Table.Cell>
                          <Table.Cell></Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Container>
                  <Image size='medium' src={this.state.imagedata}/>
                </div>
        )
    }
}

ReactDOM.render(
  <PGCamera />,
  document.getElementById("root")
);
