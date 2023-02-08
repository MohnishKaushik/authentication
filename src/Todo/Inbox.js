import React, { useRef, useState } from 'react'

export default function Inbox(props) {
  const today = new Date();
  const numberOfDaysToAdd = 3;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  const defaultValue = new Date(date).toISOString().split('T')[0]

  const [newTask, setNewTask] = useState(false)
  const titleRef = useRef()
  const calenderRef = useRef()
  const newtaskHandler = () => {
    setNewTask(true)
  }
  const addHandler = (e) => {
    e.preventDefault();
    if (titleRef.current.value === "") {
      window.alert("Task can not be empty");
      return;
    }
    const newObj = {
      number: props.list.length + 1,
      title: titleRef.current.value,
      date: new Date(calenderRef.current.value)
    }
    props.append(newObj)
    setNewTask(false)
  }
  const cancelHandler = () => {
    setNewTask(false)
  }

  
  return (
    <div>
      <div>
        <h3 className='fw-bold'><u><em>INBOX</em></u> - <u><em>My Tasks</em></u></h3>
      {!newTask && (
        <button className='new btn btn-primary btn-lg' onClick={newtaskHandler}>+Add New Todo</button>
      )}
      </div>
      
      {newTask && (
        <form className='newtask-box container'>
          <input type="text" ref={titleRef} autoFocus="on" className='form-control'/>
          <div>
          <input type="date" ref={calenderRef} defaultValue={defaultValue} className='my-1'/>
          </div>
          <div>
          <button className='new btn btn-success btn-lg col-3' onClick={addHandler}>Add Task</button>
          <button className='new btn btn-info btn-lg col-3 m-1' onClick={cancelHandler}>Cancle</button>
          </div>
        </form>
      )}
      <div> 
        {props.list.map((list) => {
          return (
            <div className="box" key={list.number}>
              {list.title} ({list.date.toLocaleDateString()})
              <button className='btn btn-danger btn-lg m-1'>Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  )
      }
