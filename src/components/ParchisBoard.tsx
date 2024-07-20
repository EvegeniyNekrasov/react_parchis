import React from "react";
import "./ParchisBoard.css";

const BOARD = 9;
const RECTABGLES = 21;

const Rectangle = ({ index }) => {
    const getClassName = (index: number) => {
        switch (index) {
            case 0:
                return "top";
            case 1:
                return "right";
            case 2:
                return "right";
            case 3:
                return "left";
            default:
                return "";

        }
    }
    return (
        <div key={index} className={`${getClassName(index)}`}>

        </div>
    );

}

const ParchisBoard = () => {
    return (
        <div className="board">
            {Array(BOARD)
                .fill(0)
                .map((_, index) => (
                    <div key={index} className="cell">
                        {index === 0 || index === 2 || index === 6 || index === 8 ? (
                            <div className="startPoint">
                                <div className="circlesContainer">
                                    {Array(4).fill(0).map((_, index) => (
                                        <div className="circle">{index}</div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                        {index === 1 || index === 3 || index === 5 || index === 7 ? (
                            <div className={`rect ${index === 1 || index === 7 ? "rect-horizontal" : ""} ${index === 3 || index === 5 ? "rect-vertical" : ""}`}>
                                {Array(RECTABGLES).fill(0).map((_, index) => (
                                    <div key={index} className="rectangle">{index}</div>
                                ))}
                            </div>
                        ) : null}
                        {index === 4 ? (
                            <div className="center">
                                {Array(4).fill(0).map((_, index) => (
                                    <Rectangle index={index} />
                                ))}
                            </div>
                        ) : null}
                    </div>
                ))}
        </div>
    );
};

export default ParchisBoard;