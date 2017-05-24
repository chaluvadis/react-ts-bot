import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Container from './Components/Container/Container';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Container />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
