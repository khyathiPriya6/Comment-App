import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLikeButton, deleteComment} = props
  const {id, name, comment, liked, className, date} = commentDetails

  const clickLikeBtn = () => {
    toggleLikeButton(id)
  }

  const clickDelete = () => {
    deleteComment(id)
  }

  const likeParaStyle = liked ? 'liked-para' : 'like-para'

  const imgUrl = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  console.log(date)

  return (
    <li className="list-style">
      <div className="comment-section">
        <div className={className}>
          <p className="profile-icon-name">{name[0]}</p>
        </div>
        <div className="comment-details">
          <p className="name-style">{name}</p>

          <p className="comment-style">{comment}</p>
        </div>
      </div>
      <div className="like-del-container">
        <button type="submit" className="img-btn-style" onClick={clickLikeBtn}>
          <img src={imgUrl} className="like-btn-style" alt="like-icon" />
          <p className={likeParaStyle}>Like</p>
        </button>
        <button type="submit" className="img-btn-style" onClick={clickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="del-btn"
            alt="delete"
            testid="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
