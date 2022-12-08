import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Head from "next/head";
import Description from "../components/Description";
import Progects from "../components/Progects";

const Home: NextPage = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={!darkTheme ? "wrapper" : "wrapper dark-theme"}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
      </Head>
      <Header 
        darkThemeBtn={darkTheme}
        setDarkThemeBtn={setDarkTheme}
      />
      <Description
        darkThemeBtn={darkTheme}
      />
      <Progects
        darkThemeBtn={darkTheme}
      />
      <Contacts
        darkThemeBtn={darkTheme}
      />
      <Footer
        darkThemeBtn={darkTheme}
      />
    </div>
  )
}

export default Home;