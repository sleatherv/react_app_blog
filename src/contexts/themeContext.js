import React from 'react'

//this context = global state
const ThemeContext = React.createContext();


const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ name: 'Sleather' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };