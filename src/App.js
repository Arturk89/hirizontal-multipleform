import React, { useEffect, useRef, useState } from 'react';
import Section from './components/section/section';
import { formDetails } from './data/formdata';
import './app.scss';

function App() {

  const [sections, setSection] = useState([])
  const [currentSection, setCurrentSection] = useState(0)
  const [progressNumber, setProgressNumber] = useState(0)
  const [dataInput, setDataInput] = useState({});

  const progress = useRef();
  const progressTitle = useRef();

  // const isIntoView = (element) => {
  //   const rect = element.getBoundingClientRect();
  //   const elemTop = rect.top;
  //   const elemBottom = rect.bottom;

  //   const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  //   return isVisible;

  // }

  const setInput = (e) => {
    const { name, value } = e.target;
    setDataInput({...dataInput, [name]: value});

  }
  const nextStep = (e) => {
    e.preventDefault();
    if(currentSection === sections.length - 1){
      return;
    }
    setCurrentSection(currentSection + 1);
  }
  const backStep = (e) => {
    e.preventDefault();
    if(currentSection === 0){
      return;
    }
    setCurrentSection(currentSection - 1);
  }

  const getCurrentProgress = () => {
    if(currentSection === 0){
      return 33;
    }
    if(currentSection === sections.length - 1) return 100;
    const currentProgress = (currentSection + 1) * sections.length * 10;
    return currentProgress
  }

  useEffect(() => {
    if(sections.length > 0){
      sections[currentSection].scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
    }

    // progressTitle.current.textContent = getCurrentProgress() + "%";
    // progressTitle.current.style.width = getCurrentProgress() + "px";

  }, [currentSection])

  

useEffect(() => {
  const sectionArr = ([...document.querySelectorAll('.app__content')])
  setSection(sectionArr);
  const fields = [];
  formDetails.map(item => item.fields.map(itemChild => fields.push(itemChild.title)));

  for(const prop of fields){
    dataInput[prop] = ""
    setDataInput({...dataInput, [prop]: ""})
  }


},[])

  return (
    <div className="app">
      {
        formDetails.map(form => (
          <div key={form.id} className="app__content">
            <Section 
              dataInput={dataInput} 
              setInput={setInput} 
              nextStep={nextStep} 
              backStep={backStep} 
              formId={form.id} 
              title={form.title} 
              fields={form.fields} 
              currentSection={currentSection}
              sections={sections}
            />
          </div>
        ))
      }
      <div ref={progress} className="app__progress">
        <div ref={progressTitle} className="app__progress__body">
          <p>{progressNumber} %</p>
        </div>
      </div>
    </div>
  );
}

export default App;
