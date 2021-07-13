import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

import Header from '../components/header';
import Skill from '../components/skill';
// import Project from '../components/project';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Main from '../components/main';
import Promotion from '../components/promotion';

const Home = () => {
  const elRef = useRef();

  return (
    <>
      <Header top={elRef} />
      <Main />
      <Skill />
      <Promotion elRef={elRef} />
      {/* <Project elRef={elRef} /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
