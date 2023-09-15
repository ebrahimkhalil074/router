import { useEffect, useState } from "react";
import Course from "./Course";
const Cards = ({handelTitle}) => {
const [courses,setCourses] = useState([])

useEffect(()=>{
fetch("data.json")
.then(res => res.json())
.then(data => setCourses(data))
},[])
    return (
        <div className="w-2/3  bg-gray-300 grid md:grid-cols-2  lg:grid-cols-3 gap-2 rounded-xl">
         {
            courses.map((course,idx)=><Course key={idx} course={course} handelTitle={handelTitle}></Course>)
         }   
        </div>
    );
};

export default Cards;