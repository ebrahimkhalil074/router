
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Cart from './components/Cart'
import Heder from './components/heder'

function App() {
  const [titles,setTitles]=useState([])
  const [hour,setCredit] = useState(0)
  const [remening,setRemening] = useState(0)
 let remeningo =20
  const handelTitle =(course,credit)=>{
  const isExist =titles.find((item)=> item.id===course.id)
if (isExist) {
  return alert('tui acos')
} else {
  const newTitle=[...titles,course]
  setTitles(newTitle) 
}
const newHour= hour + credit ;
if(newHour <= 20){
setCredit(newHour)

const nuwremening = remeningo -newHour
setRemening(nuwremening)
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
