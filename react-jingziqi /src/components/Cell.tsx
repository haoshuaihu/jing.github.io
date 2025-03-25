import React from 'react';

interface CellProps {
  value: null | 'X' | 'O';
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  const cellClass = value 
    ? `cell ${value.toLowerCase()}` 
    : 'cell';

  return (
    <button 
      className={cellClass}
      onClick={onClick}
      aria-label={value ? `Cell marked with ${value}` : 'Empty cell'}
    >
      {value}
    </button>
  );
};

export default Cell; 