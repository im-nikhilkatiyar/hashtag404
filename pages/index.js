import Head from 'next/head';
import Navbar from "../src/layouts/Navbar";
import Testimonial from '../src/layouts/Testimonial';
import BotttomBanner from '../src/layouts/BotttomBanner';
import Footer from '../src/layouts/Footer';
import { Container } from '@mui/system';
import Conversation from '../src/layouts/Conversation';
import Containerbox from '../src/layouts/Container';
import Header from "../src/layouts/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>
      <Navbar/>
      <Header/>
      <Containerbox/>
      <Conversation/>
      <div>
        {/* <Testimonial/>
        <BotttomBanner /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
