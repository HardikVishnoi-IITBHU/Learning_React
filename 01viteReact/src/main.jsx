import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <h2>MyApp Component</h2>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Google Link'
// }

const reactElement = React.createElement(
    'a',      
    {
        href: 'https://www.google.com',
        target: '_blank',
    },
    'Google Link!'
)
    

const anotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit google</a>
)

createRoot(document.getElementById('root')).
render(

  reactElement

)
