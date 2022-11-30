import Banner from "../../components/Banner/Banner"
import BestSeller from "../../components/Book/BestSeller"
import FeatureThisWeek from "../../components/FeatureThisWeek/FeatureThisWeek"
import LatestBook from "../../components/LatestBook/LatestBook"

const Home = () => {
  return (
    <div className="home">
      <Banner/>
      <BestSeller/>
      <FeatureThisWeek/>
      <LatestBook/>
    </div>
  )
}

export default Home