'use client';

import React, { useContext, useState, useEffect, createContext, Dispatch, SetStateAction } from "react";


interface ThemeContextType {
  checked: boolean | undefined;
  setChecked?: Dispatch<SetStateAction<boolean>>;
};


const ThemContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({children}: {children:React.ReactNode}) => {
  const [checked, setChecked] = useState<boolean | undefined>();

  useEffect(() => {
   if(localStorage.getItem('theme') === 'light') {
    setChecked(false);
   } 
   
   if (localStorage.getItem('theme') === 'dark') {
    setChecked(true);
   }
  }, [])

  useEffect(() => {
    if(checked !== undefined) {
      localStorage.setItem('theme', checked ? 'dark': 'light')
    }
    () => localStorage.removeItem('theme');
  }, [checked])

  useEffect(() => {
    document.body.dataset.theme = checked ? 'dark' : 'light';
  }, [checked])


  return (
    <ThemContext.Provider value={{checked, setChecked}}>
      {children}
    </ThemContext.Provider>
  )

  
};

export const useThemeContext = () => useContext(ThemContext)

export default ThemeProvider;