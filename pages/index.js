import Head from 'next/head';
import Navbar from "../src/layouts/Navbar/Navbar";
import Testimonial from '../src/layouts/Testimonial';
import BotttomBanner from '../src/layouts/BotttomBanner';
import Footer from '../src/layouts/Footer/Footer';
import Containerbox from '../src/layouts/Navbar/Containerbox';
import Header from "../src/layouts/Navbar/Header";
import Bottomstyle from '../src/layouts/Navbar/Bottomstyle';

export default function Home() {
  return (
    <div>
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
