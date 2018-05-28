import React, {Component} from 'react';
import {LabelProvider, LabelConsumer} from '../Contexts/LabelContext'
import './header.scss' 

export class Header extends Component{
    render(){
    return(
            <LabelProvider>
                <LabelConsumer>
                    {( { header } ) => (
                        <div className="header">
                            <div className="title">{ header }</div>
                        </div>
                    )}  
                </LabelConsumer>
            </LabelProvider>
        );
    }
}