import { doc, updateDoc,collection } from "firebase/firestore/lite"
import { database } from "./config"

export const updateTask = async (userId, taskId, doneStatus, setLoading) => { 
    try {
        setLoading(true)
        const taskCollection = collection(database, userId)
        const docRef = doc(taskCollection, taskId)
        await updateDoc(docRef, { done: doneStatus})
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao editar tarefa, tente novamente")
    }

}