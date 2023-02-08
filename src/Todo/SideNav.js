import React from 'react'
import styles from "../Todo/Sidenav.module.css"
export default function SideNav(props) {
  return (
    <div  style={{border:"2px solid black",height:"55vh"}} className={styles.nav}>
    <div><h2 className='text-center fw-bold'><u><em>My Todo-s</em></u></h2></div>
      <ul className='side-nav' >
        <div onClick={() => { props.change("INBOX") }} className={styles.div}>
          <h4 className='fw-bold text-center'><em><u>INBOX</u></em></h4>
        </div>
        <div onClick={() => { props.change("TODAY") }} className={styles.div}>
          <h4 className='fw-bold text-center'><em><u>TODAY</u></em></h4>
        </div>
        <div onClick={() => { props.change("NEXT") }} className={styles.div}>
          <h4 className='fw-bold text-center'><em><u>NEXT 7 DAYS</u></em></h4>
        </div>
      </ul>
      
    </div>
  )
}
