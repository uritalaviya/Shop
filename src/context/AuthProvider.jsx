import React, { createContext, useState } from 'react'


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
   
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword()
    }
   
    const authInfo = {
        user, 
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
