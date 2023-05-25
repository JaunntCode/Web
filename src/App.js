
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
// import Section2 from './components/Section2';
import Section2 from './components/Section2';
import GroupPlan from './components/GroupPlan';
import ShareExperience from './components/ShareExperience';
import AboutUs from './components/AboutUs';
// import ImageSlider from './components/ImageSlider';
// import Navbar from './components/Navbar';
//import Practice from './components/Practice';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section2 />
      <GroupPlan/>
      <ShareExperience/>
     
      <AboutUs/>
      <Form/>
      {/* <Practice /> */}
      {/* <Navbar /> */}
      {/* <ImageSlider /> */}
      
    </div>
  );
}

export default App;
