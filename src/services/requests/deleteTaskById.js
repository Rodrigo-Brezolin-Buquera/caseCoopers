import { doc, deleteDoc,collection } from "firebase/firestore/lite"
import { database } from "./config"

export const deleteTaskById = async (userId, taskId, setLoading) => { 
    try {
        setLoading(true)
        const taskCollection = collection(database, userId)
        const docRef = doc(taskCollection, taskId)
        await deleteDoc(docRef)
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao deletar tarefa, tente novamente")
    }

}