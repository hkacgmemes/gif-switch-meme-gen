import "reset-css";
import rndBg from "../extra/rndBg";

function MyApp({ Component, pageProps }) {
	rndBg();
  	return <Component {...pageProps} />;
}

export default MyApp
