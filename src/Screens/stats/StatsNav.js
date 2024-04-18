import React from 'react';
import { Link } from 'react-router-dom';
import "./StatsNav.css"; 

const StatsNav = () => {
  return (
    <div className="navBarStats">
      <ul className="navList">
        <li>
          <Link className="navLink" to={"/batsRankTest"}>Batsmen Ranking Test</Link>
        </li>
        <li>
          <Link className="navLink" to={"/batsRankODI"}>Batsmen Ranking ODI</Link>
        </li>
        <li>
          <Link className="navLink" to={"/batsRankT20"}>Batsmen Ranking T20</Link>
        </li>
        <li>
          <Link className="navLink" to={"/bowlRankTest"}>Bowlers Ranking Test</Link>
        </li>
        <li>
          <Link className="navLink" to={"/bowlRankODI"}>Bowlers Ranking ODI</Link>
        </li>
        <li>
          <Link className="navLink" to={"/bowlRankT20"}>Bowlers Ranking T20</Link>
        </li>
        <li>
          <Link className="navLink" to={"/allRankTest"}>Allrounder Ranking Test</Link>
        </li>
        <li>
          <Link className="navLink" to={"/allRankODI"}>Allrounder Ranking ODI</Link>
        </li>
        <li>
          <Link className="navLink" to={"/allRankT20"}>Allrounder Ranking T20</Link>
        </li>
      </ul>
    </div>
  );
};

export default StatsNav;
