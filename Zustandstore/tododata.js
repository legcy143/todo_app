import {create} from "zustand"
import axios from "axios"

const baseurl = 'http://localhost:5000/api'

let authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjNjMzc2MDZhODJmNjIzM2QzYThhZDIyIn0sImlhdCI6MTY3Mzk1NzExOSwiZXhwIjoxNjc0MDQzNTE5fQ.psK5FnLETLFbDXmTOLroEbVmdT9nNm1M9hW3r7blDcY"

let config = {
    headers:{
        ContentType: "application/json",
        "auth-token": authtoken
    }
  }

const useTodo = create((set)=>({
    todos:[],

    fetchtodosapi : () => {
        let fetchdata = async()=>{
    axios.get(`${baseurl}/todo/fetchtodos` , config).then((e)=>{
        console.log(e)
        set(()=>({
            todos:e.data.todos.reverse()
        }))
    })
        }
        fetchdata()
    },

    // create todo api 
    createtodoapi : (value) => {
      let createtodo = async()=>{

        axios.post(`http://localhost:5000/api/todo/createtodo` ,  {
            headers:{
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjNjMzc2MDZhODJmNjIzM2QzYThhZDIyIn0sImlhdCI6MTY3Mzk1NzExOSwiZXhwIjoxNjc0MDQzNTE5fQ.psK5FnLETLFbDXmTOLroEbVmdT9nNm1M9hW3r7blDcY'
            }},
         value).then((e)=>{
            console.log("create todo = >",e)
        })

      }
      
      createtodo()
    },

    // deltetodo  api 
    deletetodoapi : (id) => {console.log("delete todo id =>" , value)}

}))

export default useTodo;