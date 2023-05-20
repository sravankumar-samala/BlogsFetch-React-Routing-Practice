// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: []}

  componentDidMount = () => {
    this.getBlogsListData()
  }

  getBlogsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const dataList = await response.json()

    const updatedBlogList = dataList.map(object => ({
      id: object.id,
      author: object.author,
      avatarUrl: object.avatar_url,
      imageUrl: object.image_url,
      title: object.title,
      topic: object.topic,
    }))

    // console.log(updatedBlogList)
    this.setState({blogsList: updatedBlogList})
  }

  render() {
    const {blogsList} = this.state
    //   console.log(blogsList)
    return (
      <ul className="blog-list-container">
        {blogsList.length === 0 ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsList.map(eachObject => (
            <BlogItem key={eachObject.id} blogObject={eachObject} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
