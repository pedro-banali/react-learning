import React, { Component } from 'react';
import { ExpenseConsumer } from '../contexts/ExpenseContext';

export class ContentList extends Component {
    state = {};
    render() {
        return (
                <ExpenseConsumer>
                    {(context) => 
                        <ul>
                            {context.state.expenses.map((expense) => {
                                return <li key={expense.id}>{expense.value} - {expense.type}</li>
                            })}
                        </ul>
                    }
                </ExpenseConsumer>
        );
    }
}

