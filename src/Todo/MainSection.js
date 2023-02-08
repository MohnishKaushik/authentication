import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'
const list = []
export default function MainSection(props) {
  const [filteredList , setFilteredList] = useState(list)
  const addToList =(obj)=> {
    list.push(obj)
    setFilteredList(list)
  } 
  return (
    <div className='main-section'>
      {props.active === "INBOX" && (<Inbox list={filteredList} append={addToList}/>)}
      {props.active === "TODAY" && <Today list={filteredList}/>}
      {props.active === "NEXT" && <Next7Days list={filteredList}/>}
    </div>
  )
}
