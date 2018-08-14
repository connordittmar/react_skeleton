// Example Javascript for testing purposes
import React, {Component} from 'react'
import TopMenu from './TopMenu'
import TelemTable from './TelemTable'
class App extends Component {

  render() {
    return (
      <div>
        <TopMenu url={this.props.url}/>
        <TelemTable url={this.props.url}/>
      </div>
    )
  };
}
export default App
