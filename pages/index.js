import Head from 'next/head';
// import Hashtaghome from "../components/hashtaghome";
// import '../styles/404.css';

import Hashtaghome2 from "../components/hashtaghome2";
// import { Container } from '@mui/system';

// import Container from '../components/container';
// import Bluebar from '../components/Bluebar';
// import Interested from '../components/Interested';
// import Header from '../components/header';
// import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>
      
      {/* <Carousel/> */}
      {/* <Column /> */}
      {/* <LandingPageContainer /> */}

      {/* <Arr /> */}
     
   

      {/* <Hashtaghome/> */}
      <Hashtaghome2/>
      {/* <Navbar/> */}

{/* >>>>>>>>>>   Responsive     >>>>>>>> */}
      
        {/* <Header/> */}
      {/* <Interested/> */}
      {/* <Bluebar/> */}
      {/* <Container/> */}
      {/* <Footer /> */}
    </div>
  );
}
