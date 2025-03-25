import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import GameStatus from './GameStatus';
import Confetti from 'react-confetti';

// 定义井字棋的棋盘类型
type BoardState = (null | 'X' | 'O')[];

const Board: React.FC = () => {
  // 棋盘状态
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  // 当前玩家
  const [isXNext, setIsXNext] = useState<boolean>(true);
  // 游戏结束状态
  const [gameOver, setGameOver] = useState<boolean>(false);
  // 胜利者
  const [winner, setWinner] = useState<null | 'X' | 'O'>(null);
  // 窗口尺寸
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  });

  // 检查窗口大小变化
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // 计算胜利条件
  const calculateWinner = (squares: BoardState): null | 'X' | 'O' => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // 水平行
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // 垂直列
      [0, 4, 8], [2, 4, 6]             // 对角线
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a] as 'X' | 'O';
      }
    }
    return null;
  };

  // 检查是否平局
  const isDraw = (squares: BoardState): boolean => {
    return squares.every(square => square !== null) && !calculateWinner(squares);
  };

  // 点击格子的处理函数
  const handleClick = (index: number) => {
    // 如果游戏结束或者格子已有棋子，直接返回
    if (gameOver || board[index]) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    
    // 检查是否有胜利者
    const gameWinner = calculateWinner(newBoard);
    
    if (gameWinner) {
      setGameOver(true);
      setWinner(gameWinner);
    } else if (isDraw(newBoard)) {
      setGameOver(true);
    } else {
      setIsXNext(!isXNext);
    }
  };

  // 重置游戏
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {winner && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      
      <h1 className="text-4xl font-bold mb-6">井字棋游戏</h1>
      
      <GameStatus 
        isXNext={isXNext} 
        winner={winner} 
        isDraw={isDraw(board)}
      />

      <div className="board-container p-4 bg-opacity-10 bg-white rounded-lg shadow-lg">
        <div className="board">
          {board.map((value, index) => (
            <Cell 
              key={index} 
              value={value} 
              onClick={() => handleClick(index)} 
            />
          ))}
        </div>
      </div>

      <button
        onClick={resetGame}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        重新开始
      </button>
    </div>
  );
};

export default Board; 