import React, { useState, createContext } from 'react'
// create context
export const MenuContext = createContext('')

const MenuProvider = ({children}) => {
  // sidebar state
  const [isOpenLeft, setIsOpenLeft] = useState(false)

  const handleClose = () => {
    setIsOpenLeft(false)
  }

  return <MenuContext.Provider value={{ isOpenLeft, setIsOpenLeft, handleClose}}>{children}</MenuContext.Provider>
}

export default MenuProvider
