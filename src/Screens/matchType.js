import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import InternationalMatches from './MatchType/InternationalMatches';
import LeagueMatches from './MatchType/LeagueMatches';
import DomesticMatches from './MatchType/DomesticMatches';
import WomenMatches from './MatchType/WomenMatches';



const MatchType= () => {
  return (
    
      <div>
        
<BrowserRouter>
        <Routes>
          <Route path="/international" component={<InternationalMatches/>} />
          <Route path="/league" component={<LeagueMatches/>} />
          <Route path="/domestic" component={<DomesticMatches/>} />
          <Route path="/women" component={<WomenMatches/>} />
          </Routes>
          </BrowserRouter>
        
      </div>

  );
};

export default MatchType;
