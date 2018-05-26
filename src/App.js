import React, { Component } from 'react';
import './App.scss';
import {ThemeProvider, ThemeConsumer} from './contexts/ThemeContext';
import {Header} from './header/Header';
import {Content} from './content/Content';
import {ExpenseProvider} from './contexts/ExpenseContext';
import {ContentList} from './content/ContentList';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ExpenseProvider>        
        <ThemeConsumer>
          {( { themeColor } ) => (
            <div>
              <Header />
              <div className="center">
              <ContentList />
              <Content />
              </div>
            </div>
          )}
        </ThemeConsumer>
        </ExpenseProvider>        
      </ThemeProvider>
    );
  }
}

export default App;
