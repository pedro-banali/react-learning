import React, {Component} from 'react';
import './content.scss'
import { ExpenseProvider, ExpenseConsumer } from '../contexts/ExpenseContext';

export class Content extends Component{
    render(){
        return (
            <ExpenseProvider>
                <ExpenseConsumer>
                {({loadSomething}) =>
                    <div className="center">
                        <form className="formContent">
                            <label htmlFor="value"> Value:</label>
                            <input  id="value"/>
                            <label htmlFor="type"> Type: </label>
                            <input  id="type"/>

                            <input type="submit" onClick={loadSomething} value="Add" />
                        </form>        
                    </div>
                }
                </ExpenseConsumer>
            </ExpenseProvider>
        );
    }
}