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
import Men_testimonial from '../src/layouts/mentorship/Men_testimonial';
import Men_BottomBanner from '../src/layouts/mentorship/Men_BottomBanner';
import Men_Footer from '../src/layouts/mentorship/Men_Footer';
import Men_Benefits from '../src/layouts/mentorship/Men_Benefits';
import Men_mentoring_style from '../src/layouts/mentorship/Men_mentoring_style';
import Men_4_container from '../src/layouts/mentorship/Men_4_container';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home-Hashtag404</title>
                <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
                <meta name="keywords" content="test1, test2, ssr, nextjs" />
            </Head>
            <Men_navbar />
            <Men_header />
            <Men_containerbox />
            <Men_bottomstyle />
            <Men_Benefits />
            <Men_mentoring_style />
            <Men_4_container />
            <Men_testimonial />
            <Men_BottomBanner />
            <Men_Footer />
        </div>
    );
};
