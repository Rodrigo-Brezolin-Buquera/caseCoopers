import { getDocs } from "firebase/firestore/lite"
import { database } from "./config"

export const getAllTasks = async (userId, setTasks) => {
    try {
        const collection = collection(database, userId)
        const res = await getDocs(eventsCollection)
        const tasksList = res.docs.map((doc) => { return { ...doc.data(), id: doc.id } })
        setTasks(tasksList)
    } catch (err) {
        console.log(err)
        alert("Erro ao acessar tarefas, tente novamente")
    }

}