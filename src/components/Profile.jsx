import PropTypes from 'prop-types';
import { Label } from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes } }) => {
 //   const {followers, views, likes } = stats;
    return (
        <div className="profile">
  <div class="description">
    <img
      src={avatar}
      alt={username}
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="">
  <li>
      <Label>Followers</Label>
      <span class="quantity">{followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{likes}</span>
    </li>
  </ul>
</div>
    )
 };
//dokończyć li tu z map, możliwe stworzyć osobny plik


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