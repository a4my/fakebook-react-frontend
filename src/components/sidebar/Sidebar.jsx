import './sidebar.css'
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School
} from '@material-ui/icons'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/1.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Elon Musk</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Thomas Pesquet</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/3.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Paul Watson</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/4.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Bill Gates</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/5.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Greta Thunberg</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/6.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Sid Meier</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/7.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">David Attenborough</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/8.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Barack Obama</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/9.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Leonardo Dicaprio</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/10.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Luc Besson</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/11.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Bernad Werber</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/12.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFiendName">Lady Gaga</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
