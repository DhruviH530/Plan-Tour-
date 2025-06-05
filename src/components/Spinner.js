import React from 'react'
import "./Spinner.css";

 const Spinner = () => {
  return (
    // Step 15 div thi gol image na dniche p thi loading 
    <div className='flex flex-col items-center space-y-2 '>
    <div className='spinner'></div>
    <p className='text-bg-bgDark text-lg font-semibold'>Loading....</p>

    </div>
  )
}

export default Spinner;