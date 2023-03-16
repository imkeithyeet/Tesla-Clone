import Head from 'next/head';
import HomeScreen from '../../components/HomeScreen';
import Header from '../../components/HomeScreen/Header';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Tesla Website Clone</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header/>
      <HomeScreen/>
    </div>
  );
}
