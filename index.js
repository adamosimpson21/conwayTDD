const gameOfLife = board => {
  if(board.length ===2){
    let aliveCells = 0
    board.forEach(row => row.forEach(cell => cell && ++aliveCells))
    if(aliveCells <=2){
      return [[0,0], [0,0]]
    } else if(aliveCells ===3){
      return [[1,1],[1,1]]
    } else {
      return board;
    }
  }
  return [[0]];
}

const constructBoard = number =>{
  if(number > 1){
    return [[0,0], [0,0]];
  }
  return [[0]];
}

export {gameOfLife, constructBoard};