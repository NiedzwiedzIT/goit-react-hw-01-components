import user from '../data/user.json';
import stats from '../data/stats.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import PageTitle from './PageTitle/PageTitle';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import { Container } from './Container.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle title="User profile" />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={stats} />

      <Friends friends={friends} />

      <TransactionHistory
        type="Type"
        amount="Amount"
        currency="Currency"
        transactions={transactions}
      />
    </Container>
  );
};
