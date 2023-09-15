
import { FaBookmark,FaDollarSign } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
const Course = ({course,handelTitle}) => {
    // console.log(course);
   const{img,credit,price, title,id,dics
   } =course
    return (
        
            <div className="card  bg-base-100 shadow-xl flex">
  <figure className="px-5 pt-5">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{title}</h2>
    <p>{dics}</p>
    <div className='flex  gap-4 '>
    <div className='flex text-center items-center gap-2'>
<h3 className='text-1xl font-semibold'> <FaDollarSign></FaDollarSign> </h3>
<p className='text-1xl font-semibold'>Price: {price} </p>
</div>
<div className='flex text-center items-center gap-2'>
<p className='text-1xl font-semibold'> <FaBookmark/> </p>
<p className='text-1xl font-semibold'>Credit: {credit}hr </p>
</div>

  </div>
       <button onClick={()=>handelTitle(course,credit)} className="btn btn-primary w-full">Select</button> <ToastContainer/>
  </div>
</div>
        
    );
};

export default Course;