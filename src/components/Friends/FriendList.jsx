import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import './Friend.css';

const FriendList = ({friends}) => {
    return(
    <ul className="friend-list">
    {
      friends.map((friendsItem) => (
        <FriendListItem
        key={friendsItem.id}
        id={friendsItem.id}
        avatar={friendsItem.avatar}
        name={friendsItem.name}
        isOnline={friendsItem.isOnline}
        />
      ))
    },
    </ul>)
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  })).isRequired,
  };


export default FriendList;