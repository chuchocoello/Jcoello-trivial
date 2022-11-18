import { useState } from 'react';
import './App.css';

function App() {
  
  const questionsList = [
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
    {
      q: 'A quién se le atribuye la frase "Solo sé que no sé nada"',
      a1: 'Salomón',
      a2: 'Aristóteles',
      a3: 'Sócrates',
      ans: 3,
    },
    {
      q: 'En qué país de África el español es la lengua oficial',
      a1: 'Guinea ecuatorial',
      a2: 'Costa de Marfil',
      a3: 'Cabo Verde',
      ans: 1,
    },
    {
      q: 'Cuál es la conjugación del verbo "caber" en la primera persona del singular del presente indicativo',
      a1: 'Yo quepo',
      a2: 'Yo cabo',
      a3: 'Nosotros quepamos',
      ans: 1,
    },
    {
      q: 'Cuál fue el recurso utilizado inicialmente por el ser humano para explicar el origen de las cosas',
      a1: 'La astronomía',
      a2: 'La mitología',
      a3: 'La filosofía',
      ans: 2,
    },
    {
      q: 'Cuáles son los dioses griegos correspondientes a los dioses romanos Júpiter y Plutón',
      a1: 'Ares y Hermes',
      a2: 'Zeus y Ares',
      a3: 'Zeus y Hades',
      ans: 3,
    },
    {
      q: 'Cuál es el animal terrestre más grande en la actualidad',
      a1: 'Elefante africano',
      a2: 'Ballena azul',
      a3: 'Jirafa',
      ans: 1,
    },
    {
      q: 'Cuál es el tema del famoso discurso "I have a dream" de Martin Luther King',
      a1: 'La Justicia para los menos favorecidos',
      a2: 'La igualdad de las razas',
      a3: 'La intolerancia religiosa',
      ans: 2,
    },
    {
      q: 'Qué líder mundial quedó conocida como "La Dama de Hierro"',
      a1: 'Hillary Clinton',
      a2: 'Christine Lagarde',
      a3: 'Margaret Thatcher',
      ans: 3,
    },
    {
      q: 'Cuáles son los nombres de los tres reyes magos',
      a1: 'Gaspar, Melchor y Baltazar',
      a2: 'Gaspar, Nicolas y Melchor',
      a3: 'Abraham, Gaspar y Baltazar',
      ans: 1,
    },
    {
      q: 'Cuál es la religión monoteísta que cuenta con el mayor número de adeptos en el mundo',
      a1: 'Judaísmo',
      a2: 'Cristianismo',
      a3: 'Islamismo',
      ans: 2,
    },
    {
      q: 'Quién fue el primer hombre en pisar la Luna',
      a1: 'Charles Conrad',
      a2: 'Michael Collins',
      a3: 'Neil Armstrong',
      ans: 3,
    },
    {
      q: 'Cuál es el tipo sanguíneo considerado como "donante universal',
      a1: 'Tipo O',
      a2: 'Tipo AB',
      a3: 'Tipo A',
      ans: 1,
    },
    {
      q: 'Cuál es la capital de Australia',
      a1: 'Sydney',
      a2: 'Canberra',
      a3: 'Melbourne',
      ans: 2,
    },
    {
      q: 'Según la leyenda de la fundación de Roma, ¿quién amamantó a los gemelos Rómulo y Remo',
      a1: 'Una oveja',
      a2: 'Una cabra',
      a3: 'Una loba',
      ans: 3,
    },
    {
      q: 'Con qué países tiene frontera Ecuador',
      a1: 'Colombia y Perú',
      a2: 'Perú y Bolivia',
      a3: 'Colombia y Venezuela',
      ans: 1,
    },
    {
      q: 'Qué animal gluglutea',
      a1: 'La cacatúa',
      a2: 'El pavo',
      a3: 'La guacamaya',
      ans: 2,
    },
    {
      q: 'Cuál es el mayor archipiélago de la Tierra',
      a1: 'Filipinas',
      a2: 'Bahamas',
      a3: 'Indonesia',
      ans: 3,
    },
    {
      q: 'Qué sustancia es absorbida por las plantas y expirada por los animales',
      a1: 'Dióxido de carbono',
      a2: 'Oxígeno',
      a3: 'Nitrógeno',
      ans: 1,
    },
    {
      q: 'En qué océano queda Madagascar',
      a1: 'Océano Atlántico',
      a2: 'Océano Índico',
      a3: 'Océano Antártico',
      ans: 2,
    },
    {
      q: 'De qué grupo era vocalista Jim Morrison',
      a1: 'The Police',
      a2: 'Pink Floyd',
      a3: 'The Doors',
      ans: 3,
    },
    {
      q: 'Por qué película recibió un premio Oscar Leonardo DiCaprio',
      a1: 'The revenant (2015)',
      a2: 'El Lobo de Wall Street (2013)',
      a3: 'Titanic (1997)',
      ans: 1,
    },
    {
      q: 'Cuándo se inició la Primera Guerra Mundial',
      a1: '28 de junio 1919',
      a2: '28 de julio de 1914',
      a3: '11 de noviembre 1918',
      ans: 2,
    },
    {
      q: 'El Sol está compuesto principalmente por',
      a1: 'Fotones y neutrones',
      a2: 'Luz y energía',
      a3: 'Hidrógeno y helio',
      ans: 3,
    },
    {
      q: 'Cuál es el planeta más grande del sistema solar',
      a1: 'Júpiter',
      a2: 'Neptuno',
      a3: 'Saturno',
      ans: 1,
    },
    {
      q: 'La crisis económica que se originó por la caída de la bolsa de valores Wall Street en 1929 se conoce como',
      a1: 'La Gran Recesión',
      a2: 'La Gran Depresión',
      a3: 'La Gran Retención',
      ans: 2,
    },
    {
      q: 'Quién es la primera persona en ganar dos premios Nobel',
      a1: 'Albert Einstein',
      a2: 'Nicolas Copérnico',
      a3: 'Marie Curie',
      ans: 3,
    },
    {
      q: 'Dónde se encuentra Machu Picchu',
      a1: 'Perú',
      a2: 'Venezuela',
      a3: 'Ecuador',
      ans: 1,
    },
    {
      q: 'Dónde se encuentra el lago Titicaca',
      a1: 'África',
      a2: 'América del Sur',
      a3: 'Centroamérica',
      ans: 2,
    },
    {
      q: 'El álbum musical "Like a Prayer" pertenece a',
      a1: 'Britney Spears',
      a2: 'Lady Gaga',
      a3: 'Madonna',
      ans: 3,
    },
    {
      q: 'Dónde se inventó la pólvora',
      a1: 'China',
      a2: 'Inglaterra',
      a3: 'España',
      ans: 1,
    },
    {
      q: 'La moneda oficial de Japón es',
      a1: 'Yuan',
      a2: 'Yen',
      a3: 'dinar',
      ans: 2,
    },
    {
      q: 'El país ganador de la Copa Mundial de Fútbol del 2010 fue',
      a1: 'Alemania',
      a2: 'Brasil',
      a3: 'España',
      ans: 3,
    },
  ];
  // https://www.todamateria.com/preguntas-de-cultura-general/

  const [countWin, setCountWin] = useState(0);
  const [countLose, setCountLose] = useState(0);
  const [numero, setNumero] = useState(0)

{let winner = countWin > 21 ? true : false
 let losser = countLose > 21 ? true : false}

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
    questionsList[numero].ans == 1 ? win() : lose()
  }
  const boton2 = () =>{
    cambioNumero();
    questionsList[numero].ans == 2 ? win() : lose()
  }
  const boton3 = () =>{
    cambioNumero();
    questionsList[numero].ans == 3 ? win() : lose()
  }

  return (
    <div className="App">
      <div className="Counter">
        <h1>JCoello Trivial {questionsList.length}</h1>
        {
        <h1>
          <span style={{ color: 'blue' }}>{countWin}</span>
          {' - '}
          <span style={{ color: 'red' }}>{countLose}</span>
        </h1>
        }
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
