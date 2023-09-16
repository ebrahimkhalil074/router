
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Cart from './components/Cart'
import Heder from './components/heder'

function App() {
  const [titles,setTitles]=useState([])
  const [hour,setCredit] = useState(0)
  const [remening,setRemening] = useState(20)
 let remeningo =20
  const handelTitle =(course,credit)=>{
  const isExist =titles.find((item)=> item.id===course.id)
if (isExist) {
  return (toast.warning('Warning Notification !', {
    position: toast.POSITION.TOP_LEFT
  }))

}else{
  const newTitle=[...titles,course]
  setTitles(newTitle) 
}
const newHour= hour + credit ;
if(newHour <= 20){
setCredit(newHour)

const nuwremening = remeningo -newHour
setRemening(nuwremening)
 }else{
   return toast.warning('Warning Notification !', {
    position: toast.POSITION.TOP_RIGHT
  });
 }

} 




  return (
    <>
    <Heder></Heder>
    <div className='flex justify-between mt-5 gap-2'>
<Cards handelTitle={handelTitle}></Cards>
<Cart titles={titles} hour={hour} remening={remening}></Cart>
    </div>
    </>
  )
}

export default App
