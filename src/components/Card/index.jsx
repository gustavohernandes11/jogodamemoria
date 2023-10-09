import React from "react";
import Symbol from "./Symbol";
import styles from "./Card.module.css";

export default function Card({
	isFlipped = false,
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
		<div id={id} className={styles.card} onClick={() => handleClickFn(id)}>
			{!isFlipped ? (
				<div
					className={`${styles.cardBack} ${isFlipped ?? "isFlipped"}`}
				>
					?
				</div>
			) : (
				<div
					className={`${styles.cardFront} ${
						isFlipped ?? "isFlipped"
					}`}
				>
					<Symbol value={value} alt={alt} />
				</div>
			)}
		</div>
	);
}
