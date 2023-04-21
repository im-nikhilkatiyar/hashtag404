import Head from 'next/head';
import Navbar from "../src/layouts/Navbar/Navbar";
import Testimonial from '../src/layouts/Testimonial';
import BotttomBanner from '../src/layouts/BotttomBanner';
import Footer from '../src/layouts/Footer/Footer';
import Containerbox from '../src/layouts/Navbar/Containerbox';
import Header from "../src/layouts/Navbar/Header";
import Bottomstyle from '../src/layouts/Navbar/Bottomstyle';
import Hello from './say_hello';
import Men_navbar from '../src/layouts/mentorship/Men_navbar';
import Men_header from '../src/layouts/mentorship/Men_header';
import Men_containerbox from '../src/layouts/mentorship/Men_containerbox';
import Men_bottomstyle from '../src/layouts/mentorship/Men_bottomstyle';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>
      <Navbar />
      <Header />
      <Containerbox />
      <Bottomstyle />
      <Testimonial />
      <BotttomBanner />
      <Footer />
    </div>
  );
};
