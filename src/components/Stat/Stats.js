import React from 'react';
import StatsData from './StatsData';
import styles from './Stats.module.css';

const get_random_color = () => {
	function c() {
		var hex = Math.floor(Math.random() * 256).toString(16);
		return ('0' + String(hex)).substr(-2); // pad with zero
	}
	return '#' + c() + c() + c();
};

const Stats = (props) => (
	<div className={styles.statsContainer}>
		<div className={styles.hometasktitle}> hw-1.2</div>
		<section className={styles.statsSection}>
			<h2 className={styles.title}>Upload stats</h2>

			<ul className={styles.statlist}>
				{StatsData.map((el) => {
					return (
						<li
							className={styles.item}
							key={el.id}
							style={{
								backgroundColor: get_random_color(),
							}}>
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
