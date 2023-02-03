import { getDocs,collection } from "firebase/firestore/lite"
import { database } from "./config"

export const getAllTasks = async (userId, setTasks) => {
    try {
        const taskCollection = collection(database, userId)
        const res = await getDocs(taskCollection)
        const tasksList = res.docs.map((doc) => { return { ...doc.data(), id: doc.id } })
        setTasks(tasksList)
    } catch (err) {
        console.log(err)
    }

}