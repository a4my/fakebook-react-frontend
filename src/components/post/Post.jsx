import './post.css'
import { MoreVert } from '@material-ui/icons'

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
            <span className="postUsername">Elon Musk</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Hey! It's my first post, to the Moon!!
          </span>
          <img className="postImg" src="assets/post/1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">32M people like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9K comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
