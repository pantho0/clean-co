import { Outlet } from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout"

function App() {


  return (
    <>
      <MainLayout>
        <Outlet/>
      </MainLayout>
    </>
  )
}

export default App
