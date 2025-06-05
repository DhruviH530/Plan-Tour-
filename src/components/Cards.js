import React, { useState } from 'react';
import Card from './Card';


// step17 props thi pass kriyu
const Cards = (props) => {
    let courses = props.courses;
    // category app.js ma card ma props pass kriya pchi line 19 ma aavse 
    let category = props.category;
    
    // like kriye toast valu starting ma koi course like nathi
    const [likedCourses , setLikeCourses] = useState([]);

    // step 18 function create krine je course no object che and aema array che aene acces krva mate
    // objectni value aena pr foreach lgavishu and je bussin, deveopp, desing ma aaisu and aeni ander na cards aetle aray nikalva fari
    // foreach loop lgaisu and push kri daisu

    function getCourses() {
        if(category === "All"){
                  let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            });
        });
        return allCourses;
        }
      else{
        // khali specife categrory no data array ma define krisu
        return courses[category];
      }
    }

    return (
        // step 19 k je getcourses che ae mare card ma joiae che and ae badha card ma aave aetle maping krisu
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
         {/* corse mate propes pass krsiu km k ek card ma ek course aavse aetle  */}
            {
                
                getCourses().map((course) => {
                  return <Card key={course.id} course={course} likedCourses={likedCourses} setLikeCourses={setLikeCourses}/>
                })
            }
        </div>
    )
}

export default Cards;
