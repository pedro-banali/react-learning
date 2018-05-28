import React, { Component } from 'react';
import './App.scss';
import {ThemeProvider, ThemeConsumer} from './Contexts/ThemeContext';
import {Header} from './Header/Header';
import {Content} from './Content/Content';
import {ExpenseProvider} from './Contexts/ExpenseContext';
import {ContentList} from './ContentList/ContentList';

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
