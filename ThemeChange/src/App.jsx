import React, { useEffect,useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

import "./index.css"
function App(){
  const [ThemeMode, setThemeMode] = useState("light");

  const LightMode=()=>{
    setThemeMode("light");

  }
  const DarkMode=()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','white');
    document.querySelector('html').classList.add(ThemeMode);
  },[ThemeMode]);

  return(
    <ThemeProvider value={{ThemeMode,LightMode,DarkMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
      </ThemeProvider>
  )
}

export default App;