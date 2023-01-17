import React , {useState , useRef} from 'react'
import { useEffect } from 'react'
import style from "./styles/todoitem.module.scss"
import DeleteIcon from '@mui/icons-material/Delete';
// import { Checkbox } from '@mui/material';
import useTodo from "../../Zustandstore/tododata"

export const Inputtodo = () => {
    let tittleref = useRef()
    let descriptionref = useRef()

    const handlesubmit = (e)=>{
        e.preventDefault()
        let tittle = tittleref.current.value;
        let description = descriptionref.current.value;
        let data = {tittle , description}
        
        // if(tittle.length>1 && description.length>5){}

            // console.log("data => " , data )
            tittleref.current.value = ""
            descriptionref.current.value = ""
    }
  return (
  
    <>
    <form className={style.todo_input_form} onSubmit={handlesubmit}>
        <input type="text" ref={tittleref}
        placeholder='tittle'/>
        <textarea placeholder='what you have to do'  ref={descriptionref} />
        <button>+</button>
    </form>
    </>
  )
}



// todo card



export const Todos = () => {
  const todos = useTodo((state)=>state.todos)
    const [checkvalue, setcheckvalue] = useState(false)
    let checkref = useRef()
  return (
    <>
    {
      todos.map((e)=>{
        return(
          <main key={e.id} className={`${style.todo_card} ${checkvalue == true && style.workdone}`}>
        <input type="checkbox" ref={checkref}  onChange={()=>{
{checkvalue == true ?setcheckvalue(false):setcheckvalue(true)};}}/>
{
    checkvalue == true && <div className={style.delete_icon}>
        <DeleteIcon/>
    </div>
}
        <section >
            <h1>{e.tittle}</h1>
            <p>{e.description}</p>
        </section>
    </main>
        )
      })
    }
    </>
//     <main key={props.keyid} className={`${style.todo_card} ${checkvalue == true && style.workdone}`}>
//         <input type="checkbox" ref={checkref}  onChange={()=>{
// {checkvalue == true ?setcheckvalue(false):setcheckvalue(true)};}}/>
// {
//     checkvalue == true && <div className={style.delete_icon}>
//         <DeleteIcon/>
//     </div>
// }
//         <section >
//             <h1>{props.tittle}</h1>
//             <p>{props.description}</p>
//         </section>
//     </main>
  )
}

export default  {Inputtodo , Todos}