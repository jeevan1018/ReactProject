import React from 'react'
import { Link } from 'react-router-dom'
import "./MatchType.css"

const MatchTypeNav = () => {
  return (
    <div>
      
      <nav className="matchNav">
          <ul className="matchUl">
            <li className='matchLi'>
              <Link className='anchor' to={"/international"}><h3>International</h3></Link>
            </li>
            <li className='matchLi'>
              <Link className='anchor' to={"/league"}><h3>League</h3></Link>
            </li>
            
            <li className='matchLi'>
              <Link className='anchor' to={"/women"}><h3>Women</h3></Link>
            </li>
          </ul>
        </nav>
        
        
    </div>
  )
}

export default MatchTypeNav
