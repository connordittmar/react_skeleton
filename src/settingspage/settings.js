// Example Javascript for testing purposes
import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import SettingsPanel from './SettingsPanel'

render(<SettingsPanel url="ws://192.168.1.100:8080"/> , document.getElementById('root'))
