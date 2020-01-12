import React, { Fragment } from 'react';
import Profile from './components/Profile/Profile';
import Stats from './components/Stat/Stats';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/Transaction';
import user from './components/Profile/userData';
import transactions from './components/TransactionHistory/transactions.json';
import friends from './components/FriendList/friends.json';
import statsData from './components/Stat/statsData';

const App = () => (
  <Fragment>
    <Profile user={user} />
    <Stats items={statsData} />
    <FriendList items={friends} />
    <TransactionHistory items={transactions} />,
  </Fragment>
);

export default App;
