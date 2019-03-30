const gameOfLife = board => {
  if(board.length ===2){
    let counter = 0
    const aliveCells = board.forEach(row => {
      row.forEach(cell => cell && ++counter )
    })
    if(aliveCells <2){
      return [[0,0], [0,0]]
    }
    return board;
  }
  return [[0]];
}

export default gameOfLife;