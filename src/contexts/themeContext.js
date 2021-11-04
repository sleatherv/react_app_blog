import React, { useState } from 'react'

//this context = global state
const ThemeContext = React.createContext();


const ThemeProvider = ({ children }) => {
  const [theme, changeTheme] = useState({
    align: 'center',
    fontSize: 20,
  });

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };