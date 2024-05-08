import React from 'react'
import { Link } from 'react-router-dom'
import "../stats/StatsNav.css"

const navPlayers = () => {
  return (
    <div className="navBarStats">
      <ul className="navList">
      <li>
      <Link className="navLink" to={"/india"}>India</Link>
      
      </li>
      <li>
      <Link className="navLink" to={"/australia"}>Australia</Link>
      </li>
      <li>
      <Link className="navLink" to={"/bangladesh"}>Bangladesh</Link>
      </li>
      <li>
      <Link className="navLink" to={"/england"}>England</Link>
      </li>
      <li>
      <Link className="navLink" to={"/afghanistan"}>Afghanistan</Link>
      
      </li>
      <li>
      <Link className="navLink" to={"/new-zealand"}>New Zealand</Link>
      </li>
      <li>
      <Link className="navLink" to={"/pakistan"}>Pakistan</Link>
      </li>
      <li>
      <Link className="navLink" to={"/south-africa"}>South Africa</Link>
      </li>
      <li>
      <Link className="navLink" to={"/sri-lanka"}>Sri lanka</Link>
      </li>
      <li>
      <Link className="navLink" to={"/west-indies"}>West Indies</Link>
    </li>
    </ul>

      
    </div>
  )
}

export default navPlayers
