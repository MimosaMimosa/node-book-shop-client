import BestSeller from "../../components/BookCard/BestSeller"
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <BestSeller/>
    </div>
  )
}

export default Home