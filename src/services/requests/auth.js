import { auth } from "./config"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const login = async (form, setLoading) => {
    try {
        setLoading(true)
        await signInWithEmailAndPassword(auth, form.email, form.password)
        setLoading(false)

    } catch (err) {
        console.log(err)
        alert("Erro no login, tente novamente")
        setLoading(false)
    }
}

export const logout = async (setLoading) => {
    try {
        setLoading(true)
        await signOut(auth)
        setLoading(false)

    } catch (err) {
        console.log(err)
        setLoading(false)
    }
}

export const isLogged =  async(setStatus) => {
  return onAuthStateChanged(auth, (user)=>{
       if(user){
        setStatus({loggedIn: true})
       } else {
        setStatus({loggedIn: false})
       }
    })
}