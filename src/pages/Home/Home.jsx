import BestSeller from "../../components/BookCard/BestSeller"
import FeatureThisWeek from "../../components/FeatureThisWeek/FeatureThisWeek"
import Footer from "../../components/Footer/Footer"
import LatestBook from "../../components/LatestBook/LatestBook"
import Navbar from "../../components/Navbar/Navbar"
import NewLetter from "../../components/NewLetter/NewLetter"

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <BestSeller/>
      <FeatureThisWeek/>
      <LatestBook/>
      <NewLetter/>
      <Footer/>
    </div>
  )
}

export default Home