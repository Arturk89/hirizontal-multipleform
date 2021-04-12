import React, { useEffect, useState } from 'react';
import Section from './components/section/section';
import { formDetails } from './data/formdata';
import './app.scss';

function App() {

  const [sections, setSection] = useState([])
  const [currentSection, setCurrentSection] = useState(0)


  const isIntoView = (element) => {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;

  }

  const nextStep = (e) => {
    e.preventDefault();
    if(currentSection === sections.length - 1){
      console.log("to był ostatni krok");
      return;
    }
    setCurrentSection(currentSection + 1);
  }
  const backStep = (e) => {
    e.preventDefault();
    if(currentSection === 0){
      console.log("krok pierwszy!")
      return;
    }
    setCurrentSection(currentSection - 1);
  }

  useEffect(() => {
    console.log(sections)
    if(sections.length > 0){
 sections[currentSection].scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
    }
   
  }, [currentSection])

useEffect(() => {
  const sectionArr = ([...document.querySelectorAll('.app__content')])
  setSection(sectionArr);
  // const current = sectionArr.findIndex(isIntoView);
},[])
  return (
    <div className="app">
      {
        formDetails.map(form => (
          <div key={form.id} className="app__content">
            <Section nextStep={nextStep} backStep={backStep} formId={form.id} title={form.title} fields={form.fields} />
          </div>
        ))
      }
    </div>
  );
}

export default App;
