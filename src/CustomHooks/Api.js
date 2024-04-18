
  export const MatchesList = {
    url: "https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent",
    headers: {
      "X-RapidAPI-Key": "f18702b8b8mshfe59bfd0f20b993p1cc1eajsnb6b6c2d6e22b",
      "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",    }
  };
  
  export const SchedulesList={
    url: 'https://cricbuzz-cricket.p.rapidapi.com/schedule/v1/international',
    headers: {
      'X-RapidAPI-Key': 'f18702b8b8mshfe59bfd0f20b993p1cc1eajsnb6b6c2d6e22b',
      
    }
  };
  

  export const SeriseList={
    url: 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/international',
    headers: {
      'X-RapidAPI-Key': 'f18702b8b8mshfe59bfd0f20b993p1cc1eajsnb6b6c2d6e22b',
      
    }
  };
  
  export const TeamList={
    method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international',
    headers: {
      'X-RapidAPI-Key': 'f18702b8b8mshfe59bfd0f20b993p1cc1eajsnb6b6c2d6e22b',
    
    }
  };
  
  export const VenueList={
    url: 'https://cricbuzz-cricket.p.rapidapi.com/venues/v1/45',
    headers: {
      'X-RapidAPI-Key': 'f18702b8b8mshfe59bfd0f20b993p1cc1eajsnb6b6c2d6e22b',
      
    }
  };
  

  export const PlayerList={
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/trending',
    headers: {
      'X-RapidAPI-Key': 'f18702b8b8mshfe59bfd0f20b993p1cc1eajsnb6b6c2d6e22b',
    
    }
  };
  

  export const StatsList={
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen',
    params: {formatType: 'test'},
    headers: {
      'X-RapidAPI-Key': 'f18702b8b8mshfe59bfd0f20b993p1cc1eajsnb6b6c2d6e22b',
      
    }
  };
  