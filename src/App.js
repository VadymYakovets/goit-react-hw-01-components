import React, { Fragment } from 'react';
import User from './components/Profile/UserData';
import Profile from './components/Profile/Profile';
import Stats from './components/Stat/Stats';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/Transaction';
import transactions from './components/TransactionHistory/transactions.json';

// import PricingPlan from './Pricing/PricingPlan';
// import pricingPlanItems from './Pricing/pricing-plan.json';

const App = () => (
  <Fragment>
    <Profile user={User} />
    <Stats />
    <FriendList />
    <TransactionHistory items={transactions} />,
  </Fragment>
);

export default App;
