import Head from "next/head";
import { withRouter } from "next/router";

import "./index.scss";

import { getLocale } from "../extra/i18n";
import LanguageSwitcher from "../components/LanguageSwitcher/";
import Renderer from "../components/Renderer/";

const Home = ({
  router: {
    query: {
      lang = "hk",
    }
  }
}) => {

  return (
    <div id="app">
      <Head>
        <title>{ getLocale(lang, "_name") }</title>
        <meta name="description" content={ getLocale(lang, "whatever") } />
        <meta name="author" content={ getLocale(lang, "whatever") } />
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
        <meta property="og:url" content="https://hkacgmemes.github.io/gif-switch-meme-gen/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ getLocale(lang, "_name") } />
        <meta property="og:description" content={ getLocale(lang, "whatever") } />
        <meta property="og:image" content="./preview.jpg" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <LanguageSwitcher />
      <Renderer />
      <p>
        <span>
          p.s.:&nbsp;
          { 
            getLocale(lang, "urHead", [
              <a href="https://www.facebook.com/photo?fbid=135406044710731&set=a.112000770384592" target="_blank">
                { getLocale(lang, "acgIsNotFuckPolitics") }
              </a>
            ])
          }
        </span>
      </p>
      <p>
        <span>
          { getLocale(lang, "createdBy") }<br/>
          {
            getLocale(lang, "withIdeasFrom", [
              <a href="https://github.com/shawtim" target="_blank">ShawTim</a>,
              <a href="https://shawtim.github.io/mr-hong-is-so-right/" target="_blank">
                { getLocale(lang, "mrHonTool") }
              </a>,
            ])
          }
        </span>
      </p>
    </div>
  );
};

export default withRouter(Home);
