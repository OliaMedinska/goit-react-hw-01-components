
import PropTypes from 'prop-types';
import './Friend.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    const statusClassNames = isOnline ? 'status status-online' : 'status';
    return(
        <li className="item">
            <span className={statusClassNames}>{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

  export default FriendListItem;