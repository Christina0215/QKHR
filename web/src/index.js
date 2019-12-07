import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrappedNormalLoginForm from './NormalLoginForm';
import Logo from './Logo';
import * as serviceWorker from './serviceWorker';

class Log extends React.Component{
    constructor(props){
        super(props);
        this.state = {Clicked:false};
    }
    Click=()=>{
        this.setState({Clicked:true});
    }
    render(){
        return(
            <div>
            <Logo Clicked={this.Click}/><WrappedNormalLoginForm Clicked = {this.state.Clicked}/>
            </div>
        );
    }
}
ReactDOM.render(<Log/>, document.getElementById('Logo'));
// ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('Log'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

