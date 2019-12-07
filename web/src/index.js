import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrappedNormalLoginForm from './NormalLoginForm';
import Logo from './Logo';
import * as serviceWorker from './serviceWorker';

let value = false;
function Clicked (){
    value = true;
}
ReactDOM.render(<Logo handleSend={Clicked()}/>, document.getElementById('Logo'));
ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('Log'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

