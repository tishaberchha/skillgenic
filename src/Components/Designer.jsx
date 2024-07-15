import React from 'react'
import Details from './Details';
import Different from './Different';
const Designer = () => {
  return (
    <div>
      <div className="w-full h-3/4">
           <Details/>
              <Different/>
              <Details />
              <Details/>
       
      </div>
    </div>
  );
}

export default Designer
