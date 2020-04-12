import Head from 'next/head'

import "./index.scss";

import Renderer from "../components/Renderer/";

const Home = () => (
  <div className="app">
    <Head>
      <title>Gifbb 迫害各種遊戲生成器</title>
      <meta name="description" content="是但啦" />
      <meta name="author" content="是但啦" />
      <meta property="og:url" content="https://hkacgmemes.github.io/gif-switch-meme-gen/" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Gifbb 迫害各種遊戲生成器" />
      <meta property="og:description" content="是但啦" />
      <meta property="og:image" content="./preview.jpg" />
    </Head>
    <Renderer />
    <p>
      <span>
        p.s.: <a href="https://www.facebook.com/photo?fbid=135406044710731&set=a.112000770384592" target="_blank">ACG is not *uck 政治</a>你個頭
      </span>
    </p>
    <p>
      <span>
        created by 相馬<br/>
        with ideas from&nbsp;
        <a href="https://github.com/shawtim" target="_blank">ShawTim</a>'s <a href="https://shawtim.github.io/mr-hong-is-so-right/" target="_blank">項生鬧得好寫得好生成器</a>
      </span>
    </p>
  </div>
)

export default Home;
