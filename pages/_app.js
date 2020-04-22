import "reset-css";
import randomBackgroundImage from "../extra/randomBackgroundImage";

function MyApp({ Component, pageProps }) {
	randomBackgroundImage();
  	return <Component {...pageProps} />;
}

export default MyApp
