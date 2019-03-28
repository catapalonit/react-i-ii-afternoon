  import React from 'react';
  
  
    var displayCharacters = this.state.characters.map(element=>{
      return( <div>
      <h1>{element.name.first} {element.name.last}</h1>
      <h2>From: {element.city}, {element.country}</h2>
      <h2>Job Title: {element.title}</h2>
      <h2>Employer: {element.employer}</h2>
      <br></br>
      <h2>Favorite Movies:</h2>
        <ol>1. {element.favoriteMovies[0]}</ol>
        <ol>2. {element.favoriteMovies[1]}</ol>
        <ol>3. {element.favoriteMovies[2]}</ol>
        </div>
      )
    })


    export default displayCharacters;
