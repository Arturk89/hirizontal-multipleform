import React from 'react'
import "./style.scss"

const section = ({nextStep, backStep, formId, title, fields}) => {
    return (
        <div className="section">
            <h2 className="section__title">step: {formId} {title}</h2>
            <div className="section__form">
                <form>
                    {
                        fields.map(field => (
                            <input className="section__form__input" type={field.type} placeholder={field.title} />
                        ))
                    }
                    <div className="section__form__buttons">
                        <button className="section__form__buttons__btn" onClick={(e) => backStep(e)}>Wróć</button>
                        <button className="section__form__buttons__btn" onClick={(e) => nextStep(e)}>Dalej</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default section
