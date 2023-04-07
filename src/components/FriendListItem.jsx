import PropTypes from 'prop-types';

const FriendListItem = ({id, avatar, name, isOnline}) => {
    return(
        <li className="item" id={id}>
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id :PropTypes.number.isRequired
  };

  export default FriendListItem;