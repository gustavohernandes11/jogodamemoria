import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#000000" />
				<title>Memory Game</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
