import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendsListItem from 'components/FriendsListItem/FriendsListItem';

export default function FriendsList(props) {
  const friends = props.friends;
  const friendslist = friends.map(friend => (
    <FriendsListItem
      key={friend.id}
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
  return <ul className={css.friendslist}>{friendslist}</ul>;
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
