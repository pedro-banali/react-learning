import React from 'react';

const LabelContext  = React.createContext({
    header: "Parent Accountant"
});

export const LabelConsumer = LabelContext.Consumer;

export class LabelProvider extends React.Component{
    state = {
        header: "Parent Accountant"
    }

    render(){
        return(
            <LabelContext.Provider value={{
               header: this.state.header 
            }}>
                {this.props.children}
            </LabelContext.Provider>
        );
    }
}