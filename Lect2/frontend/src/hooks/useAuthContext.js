import { AuthContext } from '../context/Authcontext' 
import { useContext } from 'react'

export const useAuthContext = () => {
    const context = useContext(AuthContext) 

    if (!context) {
        throw Error('Auth Context Error')
    }

    return context
}
