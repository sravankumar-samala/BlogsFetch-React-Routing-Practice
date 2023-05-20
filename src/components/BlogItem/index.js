// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

// const blogData = {
//   author: 'Dan Abramov,',
//   avatarUrl: 'https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg',
//   id: 1,
//   imageUrl: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
//   title: 'React v16.9.0 and the Roadmap Update',
//   topic: 'React.js',
// }

const BlogItem = props => {
  const {blogObject} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogObject

  return (
    <Link to={`/blogs/${id}`}>
      <li className="blog-list-item">
        <div className="blog-image">
          <img src={imageUrl} alt={`item${id}`} />
        </div>
        <div className="blog-item-details">
          <p className="blog-topic">{topic}</p>
          <h2 className="blog-title">{title}</h2>
          <div className="author-details">
            <img src={avatarUrl} alt={`avatar ${id}`} />
            <p className="blog-author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
