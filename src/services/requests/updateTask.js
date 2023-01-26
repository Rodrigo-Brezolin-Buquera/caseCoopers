import { doc, updateDoc } from "firebase/firestore/lite"
import { database } from "./config"

export const updateTask = async (userId, taskId, task, setLoading) => { 
    try {
        setLoading(true)
        const collection = collection(database, userId)
        const docRef = doc(collection, taskId)
        await updateDoc(docRef, {name: task.name, done: task.status})
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao editar tarefa, tente novamente")
    }

}