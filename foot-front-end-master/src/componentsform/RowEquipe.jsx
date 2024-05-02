import React from 'react';

const RowEquipe = ({name, handleClick }) => {
  return (
    <button onClick={handleClick}>
      Cliquez-moi !
    </button>
  );
};

export default RowEquipe;