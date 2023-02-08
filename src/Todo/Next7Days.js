import React from 'react'
import ListRender from './ListRender'

export default function Next7Days(props) {
    const date = new Date()
    const filteredList = props.list.filter((task)=>{
        const diffTime = task.date - date
        const diffDays = Math.ceil((diffTime)/(1000*60*60*24))
        if(diffDays >= 0 && diffDays < 8) {
            return true;
        }
        return false;
    })
  return (
    <div>
      <div>
        <h3><em><u>Tasks for Next 7 Days </u></em> :-</h3>
      </div>
      <ListRender list={filteredList}/>
    </div>
  )
}
