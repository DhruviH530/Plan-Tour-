import React, { useState } from "react";
// import React from 'react';
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours ,setTours] = useState(data);

  function removeTour(id){
    // filter kriyu id sathe k 4 remove kru to baki re .aevi rite 
        const newTour = tours.filter(tour =>tour.id !== id); 
        setTours(newTour);
  }


  if(tours.length === 0){
    return(
        <div className="refresh">
          <h2>No Tours Left</h2>
          {/* jyare badha not interset thai jay tyre ek button avse jeni pr click 
          krine badhu data aai jay to setTours ae and data avi jay aetle je 8 line ma tour ma data instilize kriyu  */}
          <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
        </div>
    );
  }



  return (
    <div className="App">
     <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
};

export default App;
