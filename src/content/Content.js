import React, {Component} from 'react';
import './content.scss'
import { ExpenseProvider, ExpenseConsumer } from '../contexts/ExpenseContext';

export class Content extends Component{
    handleSubmit(e) {
        e.preventDefault();
    }

    render(){
        return (
            <ExpenseProvider>
                <ExpenseConsumer>
                {(context) =>
                    <div className="center">
                        <form className="formContent" onSubmit={(e) => this.handleSubmit(e)}>
                            <label htmlFor="value"> Value:</label>
                            <input  id="value"/>
                            <label htmlFor="type"> Type: </label>
                            <input  id="type"/>

                            <input type="submit" onClick={() => context.loadData("param")} value="Add" />
                        </form>        
                    </div>
                }
                </ExpenseConsumer>
            </ExpenseProvider>
        );
    }
}