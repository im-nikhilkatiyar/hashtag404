/* Reusable function-utility*/
/*asset-image*/
/* comp nm ucase */ 
/*styles-css */
import Head from 'next/head';
// import LandingPageContainer from '../src/layouts/LandingPage/LandingPageContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>
      {/* <LandingPageContainer /> */}
      Hello
    </div>
  );
}