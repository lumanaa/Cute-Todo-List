import React, { useEffect, useState } from 'react';
import './App.scss';
import './index.css';
import { Todo } from './components/Todo';


function App() {
  const [theme, setTheme] = useState('light');
 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  


  return (
    <div className="App">
     
      <Todo toggleTheme={toggleTheme} theme={theme}/>
    </div>
  );
}

export default App;
