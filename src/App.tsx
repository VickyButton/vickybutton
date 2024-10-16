import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import MobileContextProvider from './context/MobileContext'
import ThemeContextProvider from './context/ThemeContext'
import Home from './pages/Home/Home'

function App() {
  return (
    <MobileContextProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </MobileContextProvider>
  )
}

export default App
