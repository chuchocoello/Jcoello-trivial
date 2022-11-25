import { useState } from 'react';
import './App.css';
import questionsListInit from "./data/questionsList.js";
import Questions from "./components/Questions.jsx";
import Final from "./components/Final.jsx";

function App() {
  const tamaño = 41

  //Estados: ganadas, perdidas y el numero de la pregunta
  const [countWin, setCountWin] = useState(0);
  const [countLose, setCountLose] = useState(0);
  const [numero, setNumero] = useState(Math.floor(Math.random()*10))
  const [respondidas, setRespondidas] = useState(0)
  const [terminado, setTerminado] = useState(false)
  const [questionsList, setQuestionsList] = useState(questionsListInit)

  //funsiones para agregar ala cuenta de ganados, perdidos, numeros aleatorios y reinicio
  const win = () => {
    setCountWin(countWin + 1)
  }
  const lose = () => {
    setCountLose(countLose + 1)
  }
  const cambioNumero = () =>  {
    if(questionsList.length != 1){
      const copyArrayQuestions = [...questionsList]
      copyArrayQuestions.splice(numero, 1)
      setNumero(Math.floor(Math.random()*copyArrayQuestions.length))
      setQuestionsList(copyArrayQuestions)
      setRespondidas(respondidas +1)
    }else{setTerminado(true)}
  }
  
  const reinicio = () => {
    setNumero(Math.floor(Math.random()*10))
    setCountLose(0)
    setCountWin(0)
    setTerminado(false)
    setQuestionsList(questionsListInit)
  } 

  //funciones para las acciones de los botones de las respuestas 1, 2 y 3
  const boton1 = () =>{
    questionsList[numero].ans === 1 ? win() : lose()
    cambioNumero();
  }
  const boton2 = () =>{
    questionsList[numero].ans === 2 ? win() : lose()
    cambioNumero();
  }
  const boton3 = () =>{
    questionsList[numero].ans === 3 ? win() : lose()
    cambioNumero();
  }

  return (
    <div className="App">
      <div className="Counter">
        <h1>Trivias by JCoello</h1>
        {<h1>&#10003; {countWin}{' - '}{countLose} &#10007;</h1>}
      </div>
      {
        !terminado ?
        <Questions numero = {numero} questionsList = {questionsList} boton1 = {boton1} boton2 = {boton2} boton3 = {boton3}/> :
        <Final countWin = {countWin} countLose = {countLose} reinicio={reinicio}/>
      }
    </div>
  );
}

export default App;
