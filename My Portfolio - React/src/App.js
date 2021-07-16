import { useState, useEffect } from 'react';
import './App.css';

import ScaleLoader from "react-spinners/ScaleLoader";
import mylogo from "./images/my-logo.png"

import {
  MyNavbar,
  Header,
  AboutMySelf,
  WorkedExperience,
  SkillsList,
  ProjectBuilt,
  ContactMe,
  Footer
} from './components'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="bg-color">
      {
        loading ?
          <div className="loading-screen">
            <ScaleLoader
              color={"#216869"}
              loading={loading}
              size={10}
            />
            <h2><img src={mylogo} alt="" /></h2>
          </div>
          :
          <>
            <MyNavbar />
            <Header />
            <AboutMySelf />
            <WorkedExperience />
            <SkillsList />
            <ProjectBuilt />
            <ContactMe />
            <Footer />
          </>
      }
    </div>
  );
}

export default App;
