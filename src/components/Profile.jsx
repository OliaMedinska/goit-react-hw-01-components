import PropTypes from 'prop-types';
import { Label } from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes } }) => {
 //   const {followers, views, likes } = stats;
    return (
        <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={username}
      class="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="">
  <li>
      <Label>Followers</Label>
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