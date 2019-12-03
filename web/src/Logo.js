import './Logo.css';
import React from 'react';
import $ from 'jquery'
import img1Url from "./assest/Logo1.png"
import img2Url from "./assest/Logo2.png"


class Logo extends React.Component{
    render(){
        return(
            <div className="logo" >
            <img className="logo1" src={img1Url} draggable="false"/>
            <img className="logo2" src={img2Url} draggable="false"/>
            </div>
        )
    }
}
$(document).ready(function(){
$(".logo2").click(function(){
    //给要启用动画的标签绑定设置好的css动画        
    $(".logo1").attr("class","logo3");
    $(".logo2").attr("class","logo4");
    //$("logo-for-kmbbs1").style.display;
});
});

export default Logo;