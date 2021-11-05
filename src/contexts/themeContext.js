import React, { useState } from 'react'

//this context = global state
const ThemeContext = React.createContext();


const ThemeProvider = ({ children }) => {
  const [theme, changeTheme] = useState({
    align: 'left',
    fontSize: 20,
  });

  const increaseFont = () => changeTheme({ ...theme, fontSize: theme.fontSize + 1 })
  const decreaseFont = () => changeTheme({ ...theme, fontSize: theme.fontSize - 1 })
  const alignToLeft = () => changeTheme({ ...theme, align: 'left' })
  const alignToCenter = () => changeTheme({ ...theme, align: 'center' })
  const alignToRight = () => changeTheme({ ...theme, align: 'right' })


  return (
    <ThemeContext.Provider value={{ theme, increaseFont, decreaseFont, alignToLeft, alignToCenter, alignToRight }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };