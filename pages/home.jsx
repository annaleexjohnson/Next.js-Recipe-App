import styles from '../styles/Home.module.scss'

import Header from '../components/Header'
import Banner from '../components/Banner'
import BrowseRecipes from '../components/BrowseRecipes'
import Review from '../components/review'
import SearchMore from '../components/searchMore'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>

      <Header />
      <Banner />
      <BrowseRecipes />
      <Review />
      <SearchMore />
      <Footer />
     
    </div>
  )
}

export default Home;