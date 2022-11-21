const Final = ({ countWin, countLose, reinicio }) => {
  return (
    <section className="Final">
      {countWin > countLose ? (
        <div className="result-win">
          <h1>Ganaste</h1>
          <button className="reinicio" onClick={reinicio}>
            Reiniciar
            </button>
        </div>
      ) : (
        <div className="result-lose">
          <h1>Perdiste</h1>
          <button  className="reinicio" onClick={reinicio}>
            Reiniciar
          </button>
        </div>
      )}
    </section>
  );
};

export default Final;
