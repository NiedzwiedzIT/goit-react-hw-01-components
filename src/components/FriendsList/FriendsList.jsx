import PropTypes from 'prop-types';
import { FriendsList } from './FriendList.styled';
import FriendsListItem from 'components/FriendsListItem/FriendsListItem';

export default function Friends(props) {
  const friends = props.friends;
  const friendslist = friends.map(friend => (
    <FriendsListItem
      key={friend.id}
      isOnline={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
  return <FriendsList>{friendslist}</FriendsList>;
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
