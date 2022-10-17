import BestSeller from "../../components/BookCard/BestSeller"
import FeatureThisWeek from "../../components/BookCard/FeatureThisWeek"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import NewLetter from "../../components/NewLetter/NewLetter"

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <BestSeller/>
      <FeatureThisWeek/>
      <NewLetter/>
      <Footer/>
    </div>
  )
}

export default Home