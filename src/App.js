import React from "react";
import LoginPage from "./pages/LoginPage/login.page.js";
import RegisterPage from "./pages/RegisterPage/register.page.js";
import GlobalStyle from "./styles/GlobalStyles.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>      
    </BrowserRouter>
    
    
  );
}

export default App;
