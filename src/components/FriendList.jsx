import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";

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
    }
    </ul>)
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  };


export default FriendList;