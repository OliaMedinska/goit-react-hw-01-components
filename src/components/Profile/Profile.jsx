
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes } }) => {
 //   const {followers, views, likes } = stats;
    return (
  <div className="profile">
    <div className="description">
    <div className="img-decor">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
    </div>
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
<div className="list-decor">
  <ul className="list">
  <li>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
  </div>
  </div>
</div>
    )
 };


  Profile.propTypes = {
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar:PropTypes.string.isRequired,
    stats : PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
      }).isRequired,
    };

    export default Profile;