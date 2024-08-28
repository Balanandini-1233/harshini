import React from 'react';

const Chessboard = () => {
  const createBoard = () => {
    let board = [];
    for (let i = 0; i < 8; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push((i + j) % 2 === 0 ? 'white' : 'black');
      }
      board.push(row);
    }
    return board;
  };

  const board = createBoard();

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className={`square ${color}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Chessboard;
