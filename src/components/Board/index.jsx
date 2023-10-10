import React, { useState, useRef } from "react";
import { resetDeck } from "../../utils/deckFunctions";
import { initialCards } from "../../data/cards";

import styles from "./Board.module.css";

import Popover from "../Popover";
import Header from "../Header";
import Footer from "../Footer";
import Card from "../Card";

export const Board = () => {
	const [cards, setCards] = useState(() => resetDeck(initialCards));
	const [matches, setMatches] = useState(0);
	const [steps, setSteps] = useState(0);
	const [onPause, setOnPause] = useState(false);

	const resetCards = () => {
		setCards(() => resetDeck(initialCards));
		setSteps(() => 0);
		setMatches(() => 0);
		first.current = null;
		second.current = null;
		unflip.current = false;
	};

	const unflipCards = () => {
		first.current.flipped = false;
		second.current.flipped = false;
		first.current = null;
		second.current = null;
	};
	const isMatchingCards = (firstCard, secondCard) => {
		return firstCard && secondCard && firstCard.value === secondCard.value;
	};
	const handleClick = (id) => {
		if (!!onPause) return;

		const currentCards = cards;

		let newState = currentCards?.map((card) => {
			if (card.id !== id || card.matched) return card;

			if (card.id === id) {
				card.flipped = true;
				if (!first.current) {
					first.current = card;
					setSteps((s) => s + 1);
				} else if (!second.current && first.current.id !== id) {
					second.current = card;
					setSteps((s) => s + 1);
				}

				return card;
			}
		});

		if (isMatchingCards(first?.current, second?.current)) {
			first.current.matched = true;
			second.current.matched = true;
			setMatches((m) => m + 2);

			let currentCards = cards;
			let newCards = currentCards?.map((card) => {
				if (
					card.id === first.current.id ||
					card.id === second.current.id
				) {
					card.matched = true;
				}
				return card;
			});
			first.current = null;
			second.current = null;

			setCards(() => newCards);
		}
		if (
			first.current &&
			second.current &&
			first.current.value !== second.current.value
		) {
			setOnPause(() => true);
			setTimeout(() => {
				let currentCards = cards;
				let newCards = currentCards?.map((card) => {
					if (
						card.id === first.current.id ||
						card.id === second.current.id
					) {
						card.flipped = false;
					}
					return card;
				});

				setCards(() => newCards);
				setOnPause(() => false);

				unflipCards();
			}, 1000);
		}

		setCards(() => newState);
	};

	const first = useRef(null);
	const second = useRef(null);
	const unflip = useRef(false);

	return (
		<>
			{matches === cards.length && (
				<Popover onClick={resetCards} steps={steps} />
			)}
			<Header matches={matches} steps={steps} totalCards={cards.length} />
			<div className={styles.board} id="table">
				{cards?.map((e) => (
					<Card
						value={e.value}
						alt={e.alt}
						id={e.id}
						isFlipped={e.flipped}
						wasMatched={e.matched}
						handleClick={handleClick}
						key={e.id}
					/>
				))}
			</div>
			<Footer onClick={resetCards} />
		</>
	);
};
