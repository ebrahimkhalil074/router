
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Cart from './components/Cart'
import Heder from './components/heder'

function App() {
  const [titles,setTitles]=useState([])

const handelTitle =(course)=>{
const newTitle=[...titles,course]
setTitles(newTitle)
}
  return (
    <>
    <Heder></Heder>
    <div className='flex justify-between mt-5 gap-2'>
<Cards handelTitle={handelTitle}></Cards>
<Cart titles={titles}></Cart>
    </div>
    </>
  )
}

export default App
