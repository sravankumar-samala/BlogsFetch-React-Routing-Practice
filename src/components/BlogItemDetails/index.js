// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: {},
  }

  componentDidMount = () => {
    this.getBlogDetailsData()
  }

  getBlogDetailsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const responseData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await responseData.json()

    const updatedBlogDetails = {
      id: jsonData.id,
      author: jsonData.author,
      avatarUrl: jsonData.avatar_url,
      imageUrl: jsonData.image_url,
      content: jsonData.content,
      title: jsonData.title,
      topic: jsonData.topic,
    }

    this.setState({blogDetails: updatedBlogDetails})
    console.log(updatedBlogDetails)
  }

  render() {
    const {blogDetails} = this.state
    const {content, avatarUrl, imageUrl, title, author} = blogDetails

    return (
      <>
        {Object.keys(blogDetails).length === 0 ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="blog-info">
            <h2 className="blog-details-title">{title}</h2>
            <div className="author-details">
              <img className="author-pic" src={avatarUrl} alt={author} />
              <p className="details-author-name">{author}</p>
            </div>
            <div className="blog-img-container">
              <img className="blog-image" src={imageUrl} alt={title} />
            </div>
            <p className="blog-content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
