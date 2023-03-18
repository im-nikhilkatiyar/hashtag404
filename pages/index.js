import Head from 'next/head';
import Hashtaghome from "../components/hashtaghome";
import '../styles/404.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Hashtag404</title>
        <meta name="description" content="Meta description for the Home page THIS IS AS HOME PAGE" />
        <meta name="keywords" content="test1, test2, ssr, nextjs" />
      </Head>

      <Hashtaghome/>
      
    </div>
  );
}
