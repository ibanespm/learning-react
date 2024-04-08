import React from 'react'
import ReactDOM from 'react-dom/client'
import {Greeting, UserCard} from './Greeting'
import Products from './Products'

const root = ReactDOM.createRoot(document.getElementById('root'))


// function Greeting(){
//         return<div>
//             <h1>HELLO WORLD - THIS IS A COMPONET</h1>
//             <p>lorem 123</p>
//         </div>
// }


root.render(<>
    <Greeting />
    <Greeting />

    <UserCard />
    <Products />

</>)

// root.render(
//     <div>
//         <Greeting />
//     </div>
