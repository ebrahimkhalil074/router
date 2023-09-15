import Title from "./Title";
const Cart = ({titles}) => {
    console.log(titles);
    
    return (
        <div className="w-1/3 px-6 border-2 border-red-200">
           <h1 className="font-bold text-2xl">Course Name</h1> 

           {
            titles.map((name,idx)=><Title name={name} key={idx} idx={idx}></Title>)
           }
        </div>
    );
};

export default Cart 