import { getDocs, collection, runTransaction, doc } from "firebase/firestore/lite"
import { database } from "./config"

export const deleteTaskByStatus = async (userId, status, setLoading) => {
    try {
        setLoading(true)
        await runTransaction(database, async (transaction) => {
            const taskCollection = collection(database, userId)

            const res = await getDocs(taskCollection)

            const toDeleteTasks = res.docs
                .map((doc) => { return { ...doc.data(), id: doc.id } })
                .filter(task => task.done === status)

            toDeleteTasks.forEach((task) => {
                const docRef = doc(taskCollection, task.id)
                transaction.delete(docRef)
            })
        })
        setLoading(false)
    } catch (err) {
        setLoading(false)
        console.log(err)
        alert("Erro ao deletar tarefa, tente novamente")
    }

}