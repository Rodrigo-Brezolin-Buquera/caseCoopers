import { doc, setDoc } from "firebase/firestore/lite"
import { database } from "./config"

export const createTask = async (userId, task, setLoading) => { 
    try {
        setLoading(true)
        const collection = collection(database, userId)
        const docRef = doc(collection)
        await setDoc(docRef, {name: task.name, done: task.done})
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao criar tarefa, tente novamente")
    }

}