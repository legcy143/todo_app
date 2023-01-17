import React , {Fragment} from 'react';
import Navbar from '../Component/Navbar/Navbar';
import styles from '../styles/Home.module.scss'
import Todo from '../Pagecompo/Todo/Todo';
import useTest from '../Zustandstore/test';

export default function Home() {
  const counter = useTest((state) => state.counter)
  const inc2 = useTest((state) => state.inc)
  return (
    <Fragment>
      <Navbar/>
      <Todo />
      <div>
        prince {counter}
        <button onClick={()=>inc2()}>increare</button>
      </div>
    </Fragment>
  )
}
