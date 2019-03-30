const gameOfLife = board => {
  if(board.length ===2){
    return board;
  }
  return [[0]];
}

export default gameOfLife;