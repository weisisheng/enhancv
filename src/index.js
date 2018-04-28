import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import { Onboarding } from './Onboarding';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Onboarding />, document.getElementById('root'));
registerServiceWorker();
