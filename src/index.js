// Example Javascript for testing purposes
import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Button } from 'semantic-ui-react';

function clock() {
  const element = (
    <div>
      <h1>Welcome</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(clock, 1000);
