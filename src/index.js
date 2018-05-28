import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { WebGLRenderer } from 'three';

const renderer = new WebGLRenderer({antialias: true})
const rootEl = document.getElementById('root')

ReactDOM.render(<App renderer={renderer}/>, rootEl);
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      ReactDOM.render(
        <NextApp renderer={renderer} />,
        rootEl
      )
    })
}