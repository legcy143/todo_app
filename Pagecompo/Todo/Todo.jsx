import React, { useEffect } from 'react'
import {Inputtodo , Todos} from './Todocompo'
import style from "./styles/todo.module.scss"
import useTodo from '../../Zustandstore/tododata'

const Todo = () => {
  const todos = useTodo((state)=>state.todos)
  
  const fetchtodosapi = useTodo((state)=>state.fetchtodosapi)
  useEffect(() => {
    fetchtodosapi()
  }, [])
  return (
    <main className={style.todo_main_container}>
        <Inputtodo/>
        {/* {
          todos.map((e)=>{
            return(
              <>
             <Todos key={e.id} tittle={e.tittle} description={e.description}/>
              </>
            )
          })
        } */}
        <Todos/>
    </main>
  )
}

export default Todo