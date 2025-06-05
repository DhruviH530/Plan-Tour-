<<<<<<< HEAD
import React from 'react'
import { FcLike , FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';


// step20 props pass krisu
 const Card = (props) => {
 let course = props.course;
    // cards che pachi ahiya  je starting ma empty che 
    let likedCourses = props.likedCourses;
    let setLikeCourses = props.setLikeCourses;
    // as function clickhandler
    function clickHandler () {
        // logic of clickhandler.
       if (likedCourses.includes(course.id)) {
 
            // koi pehle thi like che pehle thi 
            setLikeCourses((prev)=> prev.filter((cid)=>(cid !== course.id) ) );
            toast.warning("Liked Removed")
        }
        else{
            // pehle thi like nathi to to insert krvanu che like course ma '
         if(likedCourses.length === 0 ){
            setLikeCourses([course.id]);

         }
         else{
            // pehle thi insert hoy to 
            setLikeCourses((prev) => [...prev, course.id]);
         }
         toast.success("Liked successfully");
       
    }

 }

  return (
    // step 21 img icon descripstion lakhisu 
    <div className='w-[300px] bg-bgDark text-white bg-opacity-80 rounded-md overflow-hidden'>

        <div className='relative'>
           <img src={course.image.url} alt="course" />

         <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
         grid place-items-center'>
         {/* last button pr click krisu and uper definr krisu */}
            <button onClick={clickHandler}>
               {

                likedCourses.includes(course.id) ?
                            (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
               }
            </button>
              </div>
         </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'> {course.title}</p>
            <p className='mt-2 text-white'>
            {/* half j text show thay che aetle khali sub string j show thay che  */}
               {
                  course.description.length >100 ?
                   (course.description.substr(0,100)) + "..." : (course.description)
               }
            </p>
        </div>
    </div>
  )
}

export default Card


=======
import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  //   readmore thi description ni value
  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">

      <img src={image} alt={name} className="image" />

      <div className="tour-info">
            <div className="tour-details">

            <h4 className="tour-price">₹{price}</h4>
             <h4 className="tour-name">{name}</h4>
          </div>

          <div className="description">{description}
                {/* jetli showkrvanu che ae ani pr depende che 
                 */}

                 <span className="read-more" onClick={readmoreHandler}>
                  {/* logic ahiya k readmore pr click thay to showless thai jay and shoeless thay to read more fari aavi jay  */}
                  {readmore ? "Show Less" : "Read More"}
                     </span>
                    {/* readmore pr click kriye to show less thai jatu tu  */}
            </div>
      </div>
      {/* pachi but bnayu jenathi click kro to tour remove that and aa remove tour che app.js ma 10 line pr*/}
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}


export default Card;
>>>>>>> 0d724c905e9f06018547c00c37a6a4197c585379
