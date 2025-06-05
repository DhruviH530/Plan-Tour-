import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards  from "./components/Cards";
// step 2
import { apiUrl , filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";



const App = () => {
  // variable create kriyu  step 8
  const [courses , setCourses] = useState(null);
  //  step 11 jya sudhi data na aave tya sudhi loading valu mate variable bnaviyu
  const [loading , setLoading] = useState(true);
  // step 22 category set krva mate last filetr ma button pr click kro to category ave 
  // jyare pehla select krisu to all hovu joiae to filter data ma pehlu aetle [o]index valu
  // and filter ma use thase line 63 ma then filetr.js m 
    const [category , setcategory] = useState(filterData[0].title);
  



  // step 7 useeffect use krva async function bnavo fetch krva ( error try  catch )

    async function fetchData() {
      // step 12 jya sudhi responce aave che tya sudhi loading ne tru kri do 
      setLoading(true);
      try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        // output ma value api responce hoy ae
        //  step 9 and data copy kri do outpu.data  
        setCourses(output.data);
          // if error aavti to toast create krisu aena mate catch ma 
      }
      catch(error){ 
          toast.error("network me problem "); 
      }
      // step 13 response aavi jay to loading false 
      setLoading(false);
    }
// step 10 function call   (aa variation 2 che jema first render thayre thay [] che aetle )
// useeffect thi call kriyu fetch data 
    useEffect(()=>{
      fetchData();
    },[])


  return (
      <div className="min-h-screen flex flex-col bg-bgDark2">

    <div>
      <NavBar/>

    </div>

    <div className="bg-bgDark2  ">
       {/* step 3 as prop sent kriyu step 4 filter js ma  */}
    <div>
  
      <Filter filterData ={filterData} 
        category={category}
        setcategory={setcategory} />
     
    </div>

    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
   {/* step 14 if loading true hoy to spinner btavanu and false hoy cards btavana */}

   {/* step 16 cards ma data pass krisu course no je je line 14 ma che  */}
      {
        
        loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) 
      }
    
    </div>

    </div>


      </div>
  );
};

export default App;
