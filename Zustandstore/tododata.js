import {create} from "zustand"
import axios from "axios"

// const instance = axios.create({
//     baseURL: '/http://localhost:5000/api',
//     timeout: 1000,
//     headers: {'Authorization': 'Bearer '+token}
//   });

const useTodo = create((set)=>({
    todos:[{
        id:1,
        tittle:"welcome to todo",
        description:"add your today work"
    },
    {
        id:2,
        tittle:"welcome to todo",
        description:"add your today work"
    }],
    authtoken:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjNjMzc2MDZhODJmNjIzM2QzYThhZDIyIn0sImlhdCI6MTY3Mzk1MjU0NSwiZXhwIjoxNjc0MDM4OTQ1fQ.Q0hBZsjcuxaNkgZACKSmDCjn43h6bGUCh62UcmCNfDE`,

    fetchtodosapi : () => {
        let fetchdata = async()=>{
           let res = await axios.get("http://localhost:5000/api/todo/fetchtodos")
           console.log("res => " , res.data)
        }
        fetchdata()
    },
    createtodoapi : (value) => {console.log("create todo data => " , value)},
    deletetodoapi : (id) => {console.log("delete todo id =>" , value)}

}))

export default useTodo;