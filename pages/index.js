import Head from 'next/head';
import Navbar from "../src/layouts/Navbar";
import Testimonial from '../src/layouts/Testimonial';
import BotttomBanner from '../src/layouts/BotttomBanner';
import Footer from '../src/layouts/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>
      <Navbar/>
      <div>
        <Testimonial/>
        <BotttomBanner />
      </div>
      <Footer />
    </div>
  );
};
