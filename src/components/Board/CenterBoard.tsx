import "./centerBoard.css";
const CenterBoard = () => {
  return (
    // <div className="center-board">
    //     <div className="triangle red"></div>
    //     <div className="triangle green"></div>
    //     <div className="triangle yellow"></div>
    //     <div className="triangle blue"></div>
    // </div>
    <div className="center">
      {/* Aquí puedes añadir la lógica y los elementos visuales que representen la parte central */}
      <div className="center-star">
        {/* Ejemplo de un área central */}
        <div className="star-part top" />
        <div className="star-part right" />
        <div className="star-part bottom" />
        <div className="star-part left" />
        <div className="star-center" />
      </div>
    </div>
  );
};

export default CenterBoard;
