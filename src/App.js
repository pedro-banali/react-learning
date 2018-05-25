import React, { Component } from 'react';
import './App.scss';
import {ThemeProvider, ThemeConsumer} from './contexts/ThemeContext';
import {Header} from './header/Header';
import {Content} from './content/Content'
class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeConsumer>
          {( { themeColor } ) => (
            <div>
              <Header />
              <Content />
            </div>
          )}

        </ThemeConsumer>
      </ThemeProvider>
    );
  }
}

export default App;
