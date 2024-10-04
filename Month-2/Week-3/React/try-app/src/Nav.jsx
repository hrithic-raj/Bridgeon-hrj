import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/input'>Input</Link></li>
            <li><Link to='/reducer'>useReducer</Link></li>
            <li><Link to='/ls'>Localstorage</Link></li>
            <li><Link to='/js'>Json</Link></li>
        </ul>
    </div>
  )
}

export default Nav