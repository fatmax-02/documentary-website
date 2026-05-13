import React from 'react';
import Location from './Location';

const Home = () => {
  return (
    <div class='home'>
      <div class='headerContainer'>
        <h1>Documentary</h1><br/> 
        <p>A source for thought-provoking insights.</p>
        <button>See More</button>
        <Location />
      </div>
    </div>
  )
}

export default Home
