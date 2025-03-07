import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Section from './components/Section';
import FluidCursor from './components/FluidCursor'; // 💧 Import FluidCursor

function App() {
  return (
    <div className="bg-white text-black relative">
      <FluidCursor /> {/* 💧 Add FluidCursor here */}

      {/* Header Section */}
      <Section id="header">
        <Header />
      </Section>

      {/* About Section */}
      <Section id="about">
        <About />
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <Experience />
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <Projects />
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <Skills />
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
}

export default App;
