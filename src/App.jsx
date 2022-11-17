import { useState } from 'react';
import './App.css';

function App() {
  
  const questionsList = [
    {
      q: 'Quien es el mejor trabajador de AAFY',
      a1: 'Vane',
      a2: 'Euli',
      a3: 'Diana',
      ans: 2,
    },
    {
      q: 'Cuántos litros de sangre tiene una persona adulta',
      a1: 'Tiene entre 4 y 6 litros',
      a2: 'Tiene entre 2 y 4 litros',
      a3: 'Tiene 7 litros',
      ans: 1,
    },
    {
      q: 'Quién es el autor de la frase "Pienso, luego existo"',
      a1: 'Platón',
      a2: 'Sócrates',
      a3: 'Descartes',
      ans: 3,
    },
    {
      q: 'Cuál es el país más grande y el más pequeño del mundo',
      a1: 'Rusia y Vaticano',
      a2: 'China y Nauru',
      a3: 'Canadá y Mónaco',
      ans: 1,
    },
    {
      q: 'Cuál es el libro más vendido en el mundo después de la Biblia',
      a1: 'El Principito',
      a2: 'Don Quijote de la Mancha',
      a3: 'El Señor de los Anillos',
      ans: 2,
    },
    {
      q: 'Cuántos decimales tiene el número pi π',
      a1: 'Mil',
      a2: 'Infinitos',
      a3: 'Ochenta y tres',
      ans: 2,
    },
    {
      q: 'La sal común está formada por dos elementos, cuáles son',
      a1: 'Sodio y cloro',
      a2: 'Sodio y potasio',
      a3: 'Sodio y carbono',
      ans: 1,
    },
    {
      q: 'Cuántos jugadores por equipo participan en un partido de voleibol',
      a1: '6 jugadores',
      a2: '4 jugadores',
      a3: '5 jugadores',
      ans: 1,
    },
    {
      q: 'Cuánto tiempo tarda la luz del Sol en llegar a la Tierra',
      a1: '54 segundos',
      a2: '12 minutos',
      a3: '8 minutos',
      ans: 3,
    },
    {
      q: 'Cuál es la montaña más alta del continente americano',
      a1: 'Monte Everest',
      a2: 'Pico Neblina',
      a3: 'Aconcagua',
      ans: 3,
    },
  ];
  // https://www.todamateria.com/preguntas-de-cultura-general/

  const [countWin, setCountWin] = useState(0);
  const [countLose, setCountLose] = useState(0);
  const [numero, setNumero] = useState(0)

  const win = () => {
    setCountWin(countWin + 1)
  }
  const lose = () => {
    setCountLose(countLose + 1)
  }
  const cambioNumero = () =>  {
    setNumero(Math.floor(Math.random()*questionsList.length))
  }

  const boton1 = () =>{
    cambioNumero();

    //questionsList.ans = 1 ? win() : lose()

  }
  const boton2 = () =>{
    cambioNumero();

  }
  const boton3 = () =>{
    cambioNumero();

  }

  return (
    <div className="App">
      <div className="Counter">
        <h1>JCoello Trivial</h1>
        <h1>
          <span style={{ color: 'blue' }}>{countWin}</span>
          {' - '}
          <span style={{ color: 'red' }}>{countLose}</span>
        </h1>
      </div>

      <section className="Questions">
        <div className="Question">
          <h3>¿{questionsList[numero].q}?</h3>
        </div>
        <button className="Answer" onClick={boton1}>{questionsList[numero].a1}</button>
        <button className="Answer" onClick={boton2}>{questionsList[numero].a2}</button>
        <button className="Answer" onClick={boton3}>{questionsList[numero].a3}</button>
      </section>
    </div>
  );
}

export default App;
