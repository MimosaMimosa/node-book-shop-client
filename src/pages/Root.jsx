
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import NewLetter from "../components/NewLetter/NewLetter"

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <NewLetter/>
        <Footer/>
    </div>
  )
}

export default Root
