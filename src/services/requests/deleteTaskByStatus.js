import { doc, deleteDoc,collection } from "firebase/firestore/lite"
import { database } from "./config"

export const deleteTask = async (userId, taskId, status, setLoading) => { 
    try {
        setLoading(true)
        const taskCollection = collection(database, userId)
        const docRef = doc(taskCollection, taskId)
        await deleteDoc(docRef).where({done: status})
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao deletar tarefa, tente novamente")
    }

}