import { useState } from 'react';
import './App.css';
import questionsList from "./data/questionsList.js";
import Questions from "./components/Questions.jsx";
import Final from "./components/Final.jsx";

function App() {

  //Estados: ganadas, perdidas y el numero de la pregunta
  const [countWin, setCountWin] = useState(0);
  const [countLose, setCountLose] = useState(0);
  const [numero, setNumero] = useState(0)

  //funsiones para agregar ala cuenta de ganados, perdidos, numeros aleatorios y reinicio
  const win = () => {
    setCountWin(countWin + 1)
  }
  const lose = () => {
    setCountLose(countLose + 1)
  }
  const cambioNumero = () =>  {
    setNumero(numero+1)
  }
  const reinicio = () => {
    setNumero(0)
    setCountLose(0)
    setCountWin(0)
  }
  // const shuffleArray = array => {
  //   for (let i = array.length -1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * ( i + 1 ));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // };
  const shuffleArray = array =>{
    let shuffledArray = []
    let usedIndexes = []
    let i = 0
    while (i < array.length ){
        let randomNumber = Math.floor(Math.random()*array.length)
        if(!usedIndexes.includes(randomNumber)){
            shuffledArray.push(array[randomNumber])
            usedIndexes.push(randomNumber)
            i++
        }
    }
    return shuffledArray
}

  //funciones para las acciones de los botones de las respuestas 1, 2 y 3
  const boton1 = () =>{
    cambioNumero();
    questionsList[numero].ans === 1 ? win() : lose()
  }
  const boton2 = () =>{
    cambioNumero();
    questionsList[numero].ans === 2 ? win() : lose()
  }
  const boton3 = () =>{
    cambioNumero();
    questionsList[numero].ans === 3 ? win() : lose()
  }

// Revolvemos el Array  de preguntas aleatoreamente
  const shufflequestionsList = shuffleArray(questionsList)

  return (
    <div className="App">
      <div className="Counter">
        <h1>Trivias by JCoello</h1>
        {<h1>&#10003; {countWin}{' - '}{countLose} &#10007;</h1>}
      </div>
      {
        numero < shufflequestionsList.length ?
        <Questions numero = {numero} shufflequestionsList = {shufflequestionsList} boton1 = {boton1} boton2 = {boton2} boton3 = {boton3}/> :
        <Final countWin = {countWin} countLose = {countLose} reinicio={reinicio}/>
      }
    </div>
  );
}

export default App;
