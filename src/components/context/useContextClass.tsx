import React, { createContext, useState, ReactNode } from "react";

//giving a type to our data
interface ContentType {
  themevalue: string;
  ToggleTheme: () => void;
}
const contextValue = createContext<ContentType | undefined>(undefined)
const UseContextClass: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themevalue, setThemeValue] = useState<string>("light");
 
  const ToggleTheme = () => {
    // toggle the theme
    setThemeValue(prevValue => prevValue === "light" ? "dark" : "light")
  }

  return (
    <contextValue.Provider value={{themevalue, ToggleTheme}}>
    {children}
    </contextValue.Provider>
  )
}
export {UseContextClass, contextValue};