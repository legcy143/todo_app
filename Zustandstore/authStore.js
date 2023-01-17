import {create} from "zustand"
import axios from "axios"
let serverurl = "http://localhost:5000" ; 

const useAuth = create((set)=>({
    authentication : {},
    authtoken: {},
    res : {},
    testapi : ()=>{
        axios.get(`http://localhost:5000`).then((e)=>{
            set(()=>{
                res:e.data
            })
        })
    },
    fetchuser : () =>{console.log("fetching ..")},

    loginapi : (values) => {
            const loginpost = async()=>{
                try {
                    const res = await axios.post(`${serverurl}/api/auth/login` , values);
                    console.log(res.data)
                } catch (error) {
                    console.warn(error)
                }
            };
            loginpost()
    },

    signupapi : (values) => {
        const signuppost = async()=>{
            try {
                const res = await axios.post(`${serverurl}/api/auth/signup` , values);
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        signuppost()
        },
}))

export default useAuth;