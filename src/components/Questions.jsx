const Questions = ({questionsList, numero, boton1, boton2, boton3}) => {
  
  return (
    <section className="Questions">
        <div className="Question">
          <h3>¿{questionsList[numero].q}?</h3>
          <p>Preguntas restantes: {questionsList.length}</p>
        </div>
        <button className="Answer a" onClick={boton1}>{questionsList[numero].a1}</button>
        <button className="Answer b" onClick={boton2}>{questionsList[numero].a2}</button>
        <button className="Answer c" onClick={boton3}>{questionsList[numero].a3}</button>
      </section>
  )
}

export default Questions