import Head from "next/head";
import React from "react";
import BackToTop from "./BackToTop";
import Header from "./Header";
import SideBar from "./SideBar";
type LayoutPageProps = {
  children?: React.ReactNode;
};
const Layout = ({ children }: LayoutPageProps) => {
  return (
    <div className="flex flex-row min-h-screen min-w-screen">
      <div className="flex flex-col w-full sm:w-1/6 md:w-1/6">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideBar />
      </div>
      <main className="flex flex-col w-full sm:w-5/6 md:w-5/6">
        <Header />
        {children}
        <BackToTop />
      </main>
    </div>
  );
};

export default Layout;
