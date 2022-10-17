import BestSeller from "../../components/BookCard/BestSeller"
import FeatureThisWeek from "../../components/BookCard/FeatureThisWeek"
import Navbar from "../../components/Navbar/Navbar"

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <BestSeller/>
      <FeatureThisWeek/>
    </div>
  )
}

export default Home