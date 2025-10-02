import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AlertProvider } from "../src/Components/Alert.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { SignIn, SignUp,Profile,EditProfile } from "../src/Pages/Index.js"

createRoot(document.getElementById('root')).render(
  <AlertProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />  
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Edit' element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  </AlertProvider>
)
