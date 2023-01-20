import type { NextPage } from "next";
import Head from "next/head";
import SideBarHeader from "../components/SideBarHeader";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>WM Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/fonts/Lato-Regular.ttf" />
        <link href="/fonts/CourierPrime-Regular.ttf" />
      </Head>
      <div className="bg-brand-bg-dark flex justify-center font-lato">
        <main className="max-w-1440 py-5 flex">
          <SideBar />
          <MainContent />
        </main>
      </div>
    </div>
  );
};

export default Home;
