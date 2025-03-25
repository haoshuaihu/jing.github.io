import React from 'react';

interface GameStatusProps {
  isXNext: boolean;
  winner: null | 'X' | 'O';
  isDraw: boolean;
}

const GameStatus: React.FC<GameStatusProps> = ({ isXNext, winner, isDraw }) => {
  let status;
  
  if (winner) {
    status = `胜利者: ${winner}`;
  } else if (isDraw) {
    status = '游戏平局!';
  } else {
    status = `下一步: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="mb-4 text-xl font-semibold">
      {status}
    </div>
  );
};

export default GameStatus; 