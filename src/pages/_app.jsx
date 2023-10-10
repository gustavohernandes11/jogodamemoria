import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="static/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="static/favicon-32x32.png"
				/>
				<link rel="icon" href="/favicon.ico" sizes="any" />

				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<link
					rel="shortcut icon"
					href="static/favicon.ico"
					type="image/x-icon"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<title>Memory Game</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
