import React, {Component} from 'react';

const ExpenseContext = React.createContext({
    expense: {},
    expenses:[],
    loading: false
});

export const ExpenseConsumer = ExpenseContext.Consumer;

export class ExpenseProvider extends Component {

    state = {
        expenses:[],
        loading: false,
    }

    loadData = (value, type ) =>  { 
        var expenses = this.state.expenses;
        expenses.push({id: (expenses.length + 1), value: parseFloat(value, 10), type: type});
        this.setState({ expenses: expenses });
        console.log(expenses);
    } 

    render(){
        return(
            <ExpenseContext.Provider value={{
                state: this.state, loadData: this.loadData
            }}>
                {this.props.children}
            </ExpenseContext.Provider>
        );
    }
}