import React, { useRef } from 'react';
import Navbar from './Navbar';
import About from './About';
import Skills from './skill';

import ContactForm from './contact';

function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  
  const section4Ref = useRef(null);

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        scrollHandler={scrollHandler}
        sectionRefs={{
          section1: section1Ref,
          section2: section2Ref,
          
          section4: section4Ref,
        }}
      />
      <div ref={section1Ref}>
        <About />
      </div>
      <div ref={section2Ref}>
        <Skills />
      </div>
      
      <div ref={section4Ref}>
        <ContactForm />
      </div>
    </>
  );
}

export default App;




