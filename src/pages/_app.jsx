import "../styles/globals.css";
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
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
				<link rel="icon" type="image/png" href="/favicon.png" />
				<title>MemoryGame</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
