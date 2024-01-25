import "./App.css"
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <h1>Home page</h1>
            </Layout>
          }
        />
        <Route path="/search" element={<>Search Page</>} />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
