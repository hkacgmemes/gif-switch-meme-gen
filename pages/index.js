import Head from 'next/head'
import { withRouter } from 'next/router';

import "./index.scss";

import Locales from "../extra/i18n";
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
        <title>{ Locales(lang)._name }</title>
        <meta name="description" content={ Locales(lang).whatever } />
        <meta name="author" content={ Locales(lang).whatever } />
        <link rel="shortcut icon" type="image/png" href="./favicon.png" />
        <meta property="og:url" content="https://hkacgmemes.github.io/gif-switch-meme-gen/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ Locales(lang)._name } />
        <meta property="og:description" content={ Locales(lang).whatever } />
        <meta property="og:image" content="./preview.jpg" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <LanguageSwitcher />
      <Renderer />
      <p>
        <span>
          p.s.:&nbsp;
          <a href="https://www.facebook.com/photo?fbid=135406044710731&set=a.112000770384592" target="_blank">
            { Locales(lang).acgIsNotFuckPolitics }
          </a>
          { Locales(lang).urHead }
        </span>
      </p>
      <p>
        <span>
          { Locales(lang).createdBy }<br/>
          { Locales(lang).withIdeasFrom }&nbsp;
          <a href="https://github.com/shawtim" target="_blank">ShawTim's</a>
          &nbsp;
          <a href="https://shawtim.github.io/mr-hong-is-so-right/" target="_blank">
            { Locales(lang).mrHonTool }
          </a>
        </span>
      </p>
    </div>
  );
};

export default withRouter(Home);
