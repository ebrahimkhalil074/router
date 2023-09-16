import Title from "./Title";
const Cart = ({titles,hour,remening}) => {
    console.log(titles);
    
    return (
        <div className="w-1/3 px-6 bg-gray-200 rounded-xl">
            <div>
            <h1 className="font-bold text-2xl text-purple-700">Credit Hour Remaining : {remening}hr</h1> 
            </div>
            <h1 className="border-b-4"></h1>
           <h1 className="font-bold text-2xl">Course Name</h1> 

           {
            titles.map((name,idx)=><Title name={name} key={idx} idx={idx}></Title>)
           }
           <br />
           <h1 className="border-b-4"></h1>
           <h2 className="font-bold text-2xl">Total Credit Hour :{hour}</h2>
        </div>
    );
};

export default Cart 