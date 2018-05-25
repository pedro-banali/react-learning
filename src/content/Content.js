import React, {Component} from 'react';
import './content.scss'
export class Content extends Component{
    render(){
        return (
            <div className="center">
                <label> Value:
                    <input />
                </label>
                <label> Type:
                    <input />
                </label>
            </div>
        );
    }
}