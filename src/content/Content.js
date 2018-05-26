import React, { Component } from 'react';
import './content.scss'
import { ExpenseConsumer } from '../contexts/ExpenseContext';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "test",
            type: "credito"
        };
    }

    render() {
        return (
            <ExpenseConsumer>
                {(context) =>
                    <form className="formContent" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="value" > Value:</label>
                        <input id="value" name="value" type="number" ref={r => this.valueRef = r} />
                        <label htmlFor="type"> Type: </label>
                        <input id="type" name="type" ref={r => this.typeRef = r} />
                        <input type="submit" onClick={() => context.loadData(this.valueRef.value, this.typeRef.value)} value="Add" />
                    </form>
                }
            </ExpenseConsumer>
        );
    }
}