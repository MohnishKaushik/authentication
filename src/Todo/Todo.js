import MainSection from './MainSection';

import SideNav from './SideNav';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import styles from "../Todo/Todo.module.css"

function Todo(props) {
  const [active, setActive] = useState("INBOX")
  const navigate = useNavigate()
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/")
    })
  }
  return (
    <div id='main'>
      {props.name ? (
        <div>
          <header>
            <h1 className={styles.container1}>
              Welcome {props.name}
            </h1>
            <div className={styles.container}>
              <h1 className='text-center p-4 m-0 fw-bold '> <em><u>TODO LIST</u></em> - <em><u>Organize Your Life & Work</u></em></h1>
            </div>
            <div className={styles.row}>
              <div className="col-md-3">
                <SideNav change={setActive} />
              </div>
              <div className="col-md-9 ">
                <MainSection active={active} />
              </div>
            </div>
          </header>
          <div className={styles.signout}><button onClick={handleSignout} >SignOut</button></div>
          
        </div>
      ) : "Login Again"}

    </div>
  );
}

export default Todo;
