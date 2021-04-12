import React from 'react'
import "./style.scss"

const section = ({sections, currentSection, dataInput, setInput, nextStep, backStep, formId, title, fields}) => {


    const buttons = (id) => {
        for( let i = 0; i< sections.length; i++){
            if(id === 1) return <button className="section__form__content__buttons__btn" onClick={(e) => nextStep(e)}>Next</button>
            if(id === sections.length) return <button className="section__form__content__buttons__btn" onClick={(e) => backStep(e)}>Back</button>
            else{
                return (
                    <>
                        <button className="section__form__content__buttons__btn" onClick={(e) => backStep(e)}>Back</button>
                        <button className="section__form__content__buttons__btn" onClick={(e) => nextStep(e)}>Next</button>
                    </>
                )
            }
        }

    }

    return (
        <div className="section">
            <h2 className="section__title">step: {formId} {title}</h2>
            <div className="section__form">
                <form className="section__form__content">
                    <div className="section__form__content__input">
                    {
                        fields.map(field => (
                            <input onChange={(e) => setInput(e)} value={dataInput[field.title]} name={field.title} key={field.id} className="section__form__content__input__item" type={field.type} placeholder={field.title} />
                        ))
                    }
                    </div>
                    <div className="section__form__content__buttons">
                        {buttons(formId)}
                    </div>
                </form>

            </div>
        </div>
    )
}

export default section
