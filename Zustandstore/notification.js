import {create} from "zustand"

const useNotification = create(()=>({
    notification : [
        {
            id:1,
            message:"welcome to legcy todo web app",
            datetime : "thursday 23 sep"
        }
    ],
    notificationapi : ()=>{
        console.log("notification api")
    }
}))