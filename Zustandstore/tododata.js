import { create } from "zustand"
import axios from "axios"

const baseurl = 'http://localhost:5000/api'

let authtoken = "";
if (typeof window !== 'undefined') {
    authtoken = localStorage.getItem("auth-token")
}

let config = {
    headers: {
        'Content-Type': 'application/json',
        "auth-token": authtoken
    }
}

const useTodo = create((set) => ({
    todos: [],
    fetchtodosapi: async() => {

        let fetchdata = async () => {
            try {
                axios.get(`${baseurl}/todo/fetchtodos`, config).then((e) => {
                    // console.log("\n\n e response " , e.status ,"\n")
                    if(e.data.status == "sucess"){
                        set(() => ({
                            todos: e.data.todos.reverse()
                        }))
                    }
                }).catch((err)=>{
                    // if(err.response.status == 401){
                    //     console.log("in valid token" )
                    // }
                })
            } catch (error) {
                console.warn(error)
            }
        }
        fetchdata()
    },

    // create todo api 
    createtodoapi: (value) => {
        let createtodo = async () => {
            axios.post(`${baseurl}/todo/createtodo`, value, config).then((e) => {
                console.log("create todo = >", e)
                window.location.reload()
            }).catch((err)=>{
                if(err.response.status == 401){
                    console.log("in valid token not create todo" )
                }
            })

        }

        createtodo()
    },

    // deltetodo  api 
    deletetodoapi: (id) => {
        try {
            console.log(id)

            let createtodo = async () => {

                axios.delete(`http://localhost:5000/api/todo/deletetodo/${id}`, config).then((e) => {
                    console.log("create todo = >", e.data)
                    window.location.reload()
                })
                .catch((err)=>{
                    console.log(err)
                    if(err.response.status == 401){
                        console.log("in valid token not delte todo" )
                    }
                })

            }

            createtodo()
        } catch (error) {
            console.log(error)
        }
    }

}))

export default useTodo;