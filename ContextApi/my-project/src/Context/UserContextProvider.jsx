import React from 'react'
import UserContext from './USerContext'
 const UserContextProvider = ({children}) => {
    const [user,setUSer] = React.useState(null);
  return (
        <UserContext.Provider value={{user,setUSer}}>
            {children}
        </UserContext.Provider>
  )
}

export default UserContextProvider
