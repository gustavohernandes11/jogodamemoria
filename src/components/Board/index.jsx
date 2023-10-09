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

	function resetCards() {
		setCards(() => resetDeck(initialCards));
		setSteps(() => 0);
		setMatches(() => 0);
		first.current = null;
		second.current = null;
		unflip.current = false;
	}

	function unflipcards() {
		first.current.flipped = false;
		second.current.flipped = false;
		first.current = null;
		second.current = null;
	}

	function handleClick(id) {
		const newCards = cards;
		const newState = newCards?.map((card) => {
			// if select the same card
			if (card.id !== id) {
				return card;
			}
			// if the card is alread flipped
			if (card.flipped) {
				return card;
			}

			// verify
			if (unflip && first.current && second.current) {
				if (first.current.value === second.current.value) {
					first.current = null;
					second.current = null;
				} else {
					unflipcards();
				}
				unflip.current = false;
			}

			if (first.current && second.current) {
				unflip.current = true;
			}

			// set the selected card in first or second
			if (card.id === id) {
				setSteps((s) => s + 1);
				if (!first.current) {
					first.current = card;
					card.flipped = true;
					return card;
				} else if (!second.current) {
					second.current = card;
					card.flipped = true;
					if (first.current.value === second.current.value) {
						setMatches((m) => m + 2);
					}
					return card;
				}
			}
		});
		setCards(() => newState);
	}

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
				{cards?.map((e, i) => (
					<Card
						value={e.value}
						alt={e.alt}
						id={e.id}
						isFlipped={e.flipped}
						handleClick={handleClick}
						key={i}
					/>
				))}
			</div>
			<Footer onClick={resetCards} />
		</>
	);
};
