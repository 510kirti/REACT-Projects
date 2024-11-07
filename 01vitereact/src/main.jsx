import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myApp(){
    return(
        <div>
            <h1>custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: "Click me to open google"
// }

const anotherElement = (
    <a href='https://google.com' target="_blank"> visit google</a>
)

const anotherUser = " chai aur react";

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    "click me to visit google", 
    anotherUser,
    anotherElement
)

createRoot(document.getElementById('root')).render(
  
    // <App />
    reactElement
)
