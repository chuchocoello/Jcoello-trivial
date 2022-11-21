const Questions = ({shufflequestionsList, numero, boton1, boton2, boton3}) => {
  
  return (
    <section className="Questions">
        <div className="Question">
          <h3>¿{shufflequestionsList[numero].q}?</h3>
        </div>
        <button className="Answer a" onClick={boton1}>{shufflequestionsList[numero].a1}</button>
        <button className="Answer b" onClick={boton2}>{shufflequestionsList[numero].a2}</button>
        <button className="Answer c" onClick={boton3}>{shufflequestionsList[numero].a3}</button>
      </section>
  )
}

export default Questions