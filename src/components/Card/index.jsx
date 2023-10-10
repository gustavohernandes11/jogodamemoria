import Symbol from "./Symbol";
import styles from "./Card.module.css";

export default function Card({
	isFlipped = false,
	wasMatched = false,
	value,
	id,
	alt,
	handleClick,
}) {
	function handleClickFn(id) {
		if (handleClick) {
			handleClick(id);
		}
	}
	return (
		<div
			id={id}
			className={`${styles.card} ${
				!isFlipped === true ? styles.isFlipped : ""
			}`}
			onClick={() => handleClickFn(id)}
		>
			<div className={styles.innerCard}>
				<div
					className={`${styles.cardBack} ${
						wasMatched === true ? styles.wasMatch : ""
					}`}
				/>
				<div
					className={`${styles.cardFront} ${
						wasMatched === true ? styles.wasMatch : ""
					}`}
				>
					<Symbol value={value} alt={alt} />
				</div>
			</div>
		</div>
	);
}
