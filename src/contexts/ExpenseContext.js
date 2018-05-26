import React, {Component} from 'react';

const ExpenseContext = React.createContext({
    expenses:[],
    loading: false
});

export const ExpenseConsumer = ExpenseContext.Consumer;

export class ExpenseProvider extends Component {
    state = {
        expenses:[],
        loading: false
    }
    
    loadData = async => { 
        this.setState({loading: true});
    }

    render(){
        return(
            <ExpenseContext.Provider value={{
                ...this.state
            }}>
                {this.props.children}
            </ExpenseContext.Provider>
        );
    }
}