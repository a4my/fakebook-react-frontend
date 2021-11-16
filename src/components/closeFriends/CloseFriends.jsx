import './closeFriends.css'

export default function CloseFriends({ user }) {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFiendName">{user.username}</span>
    </li>
  )
}
