// import Footer from '@/component/footer';
import Head from 'next/head';
import Hashtaghome2 from "../components/hashtaghome2";
// import Navbar from '../components/navbar';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>
            {/* <Navbar/> */}
      {/* <Carousel/> */}
      {/* <Column /> */}
      {/* <LandingPageContainer /> */}

      {/* <Arr /> */}
      <Hashtaghome2/>
      {/* <Footer /> */}

    </div>
  );
}
