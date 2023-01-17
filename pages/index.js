import React , {Fragment} from 'react';
import Navbar from '../Component/Navbar/Navbar';
import styles from '../styles/Home.module.scss'
import Todo from '../Pagecompo/Todo/Todo';

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Todo />
    </Fragment>
  )
}
