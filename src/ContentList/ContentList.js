import React, { Component } from 'react';
import { ExpenseConsumer } from '../Contexts/ExpenseContext';
import './contentlist.scss'

export class ContentList extends Component {
    state = {};
    reduceExpenses = (expenses) =>{
        return expenses.reduce(
            (a, b) => { 
                return  a.value + b.value; 
            }, 0);

    }
    render() {
        return (
            <ExpenseConsumer>
                {(context) =>
                    <div>
                        <ul className="content-list" >
                            {context.state.expenses.map((expense) => {
                                return <li className={expense.value > 0 ? "income" : "debts"} key={expense.id}>{expense.value} - {expense.type}</li>
                            })}
                        </ul>
                        <div>
                            { context.state.expenses.reduce((a, b) =>   a + b.value, 0)}
                        </div>
                    </div>
                }
            </ExpenseConsumer>
        );
    }
}

