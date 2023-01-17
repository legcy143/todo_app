import {create} from "zustand"
import axios from "axios"

const baseurl = 'http://localhost:5000/api'

let authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjNjMzc2MDZhODJmNjIzM2QzYThhZDIyIn0sImlhdCI6MTY3Mzk2OTEzOSwiZXhwIjoxNjc0MDU1NTM5fQ.el3nir7I0kCODUtceVZ-9ZlLgUeLJv8A7QKd3hjrGw4"

let config = {
    headers:{
        'Content-Type': 'application/json',
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

        axios.post(`${baseurl}/todo/createtodo` ,value ,config).then((e)=>{
            console.log("create todo = >",e)
            window.location.reload()
        })

      }
      
      createtodo()
    },

    // deltetodo  api 
    deletetodoapi : (id) => { 
        try {
            console.log(id)
            
                let createtodo = async()=>{
        
                axios.delete(`http://localhost:5000/api/todo/deletetodo/${id}` ,config).then((e)=>{
                    console.log("create todo = >",e.data)
                    window.location.reload()
                })
        
              }
              
              createtodo()
        } catch (error) {
            console.log(error)
        }
    }

}))

export default useTodo;