import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

const MatchTypeNav = () => {
  return (
    <div>
      
      <nav>
          <ul>
            <li>
              <Link to="/international">International</Link>
            </li>
            <li>
              <Link to="/league">League</Link>
            </li>
            <li>
              <Link to="/domestic">Domestic</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
          </ul>
        </nav>
        
        
    </div>
  )
}

export default MatchTypeNav
