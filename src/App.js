import "./App.css";

import MyNavbar from "./components/MyNavbar/MyNavbar";
import Particles from "react-particles-js";
import MyMessage from "./components/MyMessage/MyMessage";
import SlideBackground from "./components/SlideBackground/SlideBackground";
import AboutMe from "./components/AboutMe/AboutMe";
import MySkills from "./components/MySkills/MySkills";
import MyExperience from "./components/MyExperience/MyExperience";
import MyProjects from "./components/MyProjects/MyProjects";
import ContactMe from "./components/ContactMe/ContactMe";
import MyFooter from "./components/MyFooter/MyFooter";

export default function App() {
  return (
    <div className="App">
      <Particles
        className="particles App-Particles"
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <MyNavbar />
      <MyMessage />
      <SlideBackground />
      <AboutMe />
      <MySkills />
      <MyExperience />
      <MyProjects />
      <ContactMe />
      <MyFooter />
    </div>
  );
}
