import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export default function FriendsListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span
        className={
          isOnline
            ? `${css.status} ${css.stgreen}`
            : `${css.status} ${css.stred}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
