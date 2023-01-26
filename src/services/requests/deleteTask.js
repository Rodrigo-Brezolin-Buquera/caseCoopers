import { doc, deleteDoc } from "firebase/firestore/lite"
import { database } from "./config"

export const deleteTask = async (userId, taskId, setLoading) => { 
    try {
        setLoading(true)
        const collection = collection(database, userId)
        const docRef = doc(collection, taskId)
        await deleteDoc(docRef)
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao deletar tarefa, tente novamente")
    }

}