import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {prevCommentList: [], name: '', comment: '', className: '', date: ''}

  toggleLikeButton = id => {
    this.setState(prevState => ({
      prevCommentList: prevState.prevCommentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, liked: !eachComment.liked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      prevCommentList: prevState.prevCommentList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const iconColour = `profile-icon ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      liked: false,
      className: iconColour,
      date: new Date(),
    }
    this.setState(prevState => ({
      prevCommentList: [...prevState.prevCommentList, newComment],
      name: '',
      comment: '',
    }))
  }

  changeInComment = event => {
    this.setState({comment: event.target.value})
  }

  changeInName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, comment, prevCommentList} = this.state
    return (
      <div className="app-container">
        <div className="comment-input-container">
          <form className="form-style" onSubmit={this.addComment}>
            <h1 className="comment-heading">Comments</h1>
            <p className="comment-para">Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              className="name-input"
              value={name}
              onChange={this.changeInName}
            />
            <textarea
              className="comment-input"
              placeholder="Your Comment"
              rows="9"
              cols="30"
              value={comment}
              onChange={this.changeInComment}
            />
            <div>
              <button
                type="submit"
                className="add-comment-button"
                onClick={this.addComment}
              >
                Add Comment
              </button>
            </div>
          </form>
          <div className="comment-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comment-img"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div className="comment-count-container">
          <button className="count-comment-button" type="submit">
            {prevCommentList.length}
          </button>
          <p className="comment-para">Comment</p>
        </div>
        <ul>
          {prevCommentList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              toggleLikeButton={this.toggleLikeButton}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
