import React from 'react';
import User from '../Profile/UserData';
import styles from '../Profile/Profile.module.css';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

const Profile = props => (
  <div className={styles.profile}>
    <div className={styles.hometasktitle}> hw-1.1</div>
    <div className={styles.description}>
      <img src={User.avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{User.name}</p>
      <p className={styles.tag}>{User.tag}</p>
      <p className={styles.location}>{User.location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.statsItem}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{User.stats.followers}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{User.stats.views}</span>
      </li>
      <li className={styles.statsItem}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{User.stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
