import './Logo.css';
import React from 'react';
import $ from 'jquery'
import img1Url from "./assest/Logo1.png"
import img2Url from "./assest/Logo2.png"


class Logo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // class: true,
            class1:"logo1",
            class2:"logo2",
            classdad:"logo"
        };
    }
    render(){
        return(
            <div className={this.state.classdad} >
            <img className={this.state.class1} src={img1Url} draggable="false"/>
            <img className={this.state.class2} src={img2Url} draggable="false" onClick={()=>this.clicked()}/>
            </div>
        )
    }
    clicked(){
        this.setState({class1: "logo3",class2: "logo4",classdad: "logo-update"});
        this.props.Clicked();
    }
}


export default Logo;