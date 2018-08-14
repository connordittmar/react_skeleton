// Example Javascript for testing purposes
import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import 'leaflet/dist/leaflet.css';
import App from './App'

render(<App url="ws://192.168.1.40:8080" /> , document.getElementById('root'))
