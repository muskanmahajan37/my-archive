import './App.css';

import MyNavbar from './components/navbar/MyNavBar';
import Header from './components/content/Header';
import AboutMySelf from './components/content/AboutMySelf';
import WorkedExperience from './components/content/WorkedExperience';
import SkillsList from './components/content/SkillsList';
import ProjectBuilt from './components/content/ProjectBuilt';
import ContactMe from './components/content/ContactMe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="bg-color">
      <MyNavbar />
      <Header />
      <AboutMySelf />
      <WorkedExperience />
      <SkillsList />
      <ProjectBuilt />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
