import PropTypes from 'prop-types';
import {
  FriendItem,
  Status,
  Avatar,
  FriendName,
} from './FriendsListItem.styled';

export default function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
