import React from 'react'
// step 4 props pass kriu
 const Filter = (props) => {
    // step 5 
    let filterData = props.filterData; 
    // je app.js ma props kriyu ae ahiya define thse and button pr event listnere lgavnu 
    let category = props.category;
    let setcategory = props.setcategory;
  // filterhandler function define kriyyu 
  // and je pan button pr click kriye ae category change thai jay aetle ke 
  // development pr kris to development category aavse 


    function filterHandler(title){
        setcategory(title);
    }


  return (
   
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
    
  {/* filetr data pr maping krisu step 6 */}
   {/* k filter data pr map krisu aetle data che aema  button ma text  thase and nam lkhva mate
     aema title che to aema title ( 5 button mate )   */}
         {
            filterData.map((data) =>(
               <button className={` text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2
              trasition-all duration-300 
              ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}
              `}
                key={data.id}
                // filterhandler nam nu function and aenu title aavse 
                onClick={() => filterHandler(data.title)}
                >{data.title} </button> 
            ))
        }
    </div>
  )
}

export default Filter;