/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'


export const Context = createContext(null)


const Provider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isHide, setIsHide] = useState(true);


  const contextInfo = {
    user,
    setUser,
    loading,
    setLoading,
    isHide, 
    setIsHide
  }

  return (
    <Context.Provider value={contextInfo}>
        {children}
     </Context.Provider>
  )
}

export default Provider