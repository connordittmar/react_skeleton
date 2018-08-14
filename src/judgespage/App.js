// Example Javascript for testing purposes
import React, {Component} from 'react'
import TopJudgesBar from './TopJudgesBar'
import JudgePanel from './JudgePanel'
class App extends Component {

  render() {
    return (
      <div>
        <TopJudgesBar url={this.props.url} />
        <JudgePanel />
      </div>
    )
  };
}
export default App
