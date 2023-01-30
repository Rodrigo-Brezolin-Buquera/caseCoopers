import { doc, updateDoc,collection } from "firebase/firestore/lite"
import { database } from "./config"

export const updateTask = async (userId, taskId, task, setLoading) => { 
    try {

        setLoading(true)
        const taskCollection = collection(database, userId)
        const docRef = doc(taskCollection, taskId)
        await updateDoc(docRef, {name: task.name, done: task.done})
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao editar tarefa, tente novamente")
    }

}