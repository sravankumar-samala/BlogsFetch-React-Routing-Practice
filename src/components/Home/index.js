import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-container" data-testid="loader">
    <UserInfo />
    <div className="blog-list-container">
      <BlogList />
    </div>
  </div>
)

export default Home
