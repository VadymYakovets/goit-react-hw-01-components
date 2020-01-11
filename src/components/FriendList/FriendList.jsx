import React from 'react';
import friends from './friends.json';
import styles from './FriendList.module.css';

const FriendList = props => (
  <div className={styles.friensList}>
    <div className={styles.hometasktitle}>hw-1.3</div>
    <div className={styles.friendsWrapper}>
      <ul>
        {friends.map(el => {
          return (
            <li className={styles.item} key={el.id}>
              <span
                className={el.isOnline ? styles.greenCircle : styles.redCircle}
              ></span>
              <img src={el.avatar} alt="icon" className={styles.avatar} />
              <p className={styles.name}>{el.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default FriendList;
