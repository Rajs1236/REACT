import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
function myapp(){
    return (
        <div><h1>CUSTOM APP</h1></div>
    )
}
//virtual dom bna rha h
const Reactelement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit  google'
}

const anotherelement = (<a href='https://google.com' target='blank'>visit google</a>)
const anotherUser=" chai aur react"
const reactElement=React.createElement(
    'a',
    {href:"https://google.com",target:'_blank'},
    'click me',
    anotherUser
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    reactElement
 
);
