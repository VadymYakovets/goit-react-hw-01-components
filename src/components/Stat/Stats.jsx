import React from 'react';
import styles from './Stats.module.css';
import GetRandomColor from './GetRandomColor';

const Stats = ({ items }) => (
  <div className={styles.statsContainer}>
    <div className={styles.hometasktitle}> hw-1.2</div>
    <section className={styles.statsSection}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statlist}>
        {items.map(el => {
          return (
            <li
              className={styles.item}
              key={el.id}
              style={{
                backgroundColor: GetRandomColor(),
              }}
            >
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  </div>
);

export default Stats;
