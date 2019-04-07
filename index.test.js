import {gameOfLife, constructBoard, oneOrZero, getNumNeighbors, countAllNeighbors, new2DArray, tickBoard} from "./index.js"

test("Input [[0]] returns [[0]]", () =>{
  expect(gameOfLife([[0]])).toEqual([[0]])
})

test("Input [[1]] returns [[0]]", () =>{
  expect(gameOfLife([[1]])).toEqual([[0]])
})

test("Input [[0, 0], [0, 0]] returns [[0, 0], [0, 0]]", () =>{
  expect(gameOfLife([[0, 0], [0, 0]])).toEqual([[0, 0], [0, 0]])
})

test("Input [[1, 1], [1, 1]] returns [[1, 1], [1, 1]]", () =>{
  expect(gameOfLife([[1, 1], [1, 1]])).toEqual([[1, 1], [1, 1]])
})

test("Input [[1, 0], [0, 1]] returns [[0, 0], [0, 0]]", () =>{
  expect(gameOfLife([[1, 0], [0, 1]])).toEqual([[0, 0], [0, 0]])
})

test("Input [[1, 0], [1, 1]] returns [[1, 1], [1, 1]]", () =>{
  expect(gameOfLife([[1, 0], [1, 1]])).toEqual([[1, 1], [1, 1]])
})

test("Input [[1, 1], [1, 0]] returns [[1, 1], [1, 1]]", () =>{
  expect(gameOfLife([[1, 1], [1, 0]])).toEqual([[1, 1], [1, 1]])
})

test("Input [[0, 1], [1, 1]] returns [[1, 1], [1, 1]]", () =>{
  expect(gameOfLife([[0, 1], [1, 1]])).toEqual([[1, 1], [1, 1]])
})

test("Input [[0, 0], [0, 1]] returns [[0, 0], [0, 0]]", () =>{
  expect(gameOfLife([[0, 0], [0, 1]])).toEqual([[0, 0], [0, 0]])
})

test("Input [[0, 1], [0, 0]] returns [[0, 0], [0, 0]]", () =>{
  expect(gameOfLife([[0, 1], [0, 0]])).toEqual([[0, 0], [0, 0]])
})

test("OneOrZero returns 1 or 0", ()=> {
  const result = oneOrZero();
  let flag = false;
  if(result ===1 || result ===0){
    flag=true;
  }
  expect(flag).toBe(true);
})

// ConstructBoard tests begin here

test("Construct Board returns 2D array", () => {
  expect(constructBoard(1)[0]).toBeInstanceOf(Array);
})

test("Construct Board does not return 3D array", () => {
  expect(constructBoard(1)[0][0]).not.toBeInstanceOf(Array);
})

test("Construct Board(1) returns 2D array with length 1", () => {
  expect(constructBoard(1)[0].length).toBe(1);
})

test("Construct Board(2) returns 2D array with length 2", () => {
  expect(constructBoard(2)[0].length).toBe(2);
})

test("Construct Board returns some alive and some dead cells", () => {
  let aliveCells = 0;
  constructBoard(10).forEach(row => row.forEach(cell => cell && ++aliveCells));
  const passes = (aliveCells >=40 && aliveCells <= 60);
  expect(passes).toBe(true);
})

const mockboard = [
  [0, 1, 1, 0],
  [0, 0, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1]
]

// mockboard after 1 tick
const tickboard = [
  [0, 1, 1, 1],
  [0, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1]
]

// testing getNumNeighbors
test("getNumNeighbors return a number", () => {
  expect(typeof getNumNeighbors(0, 0, mockboard)).toBe("number");
})

test("getNumNeighbors(1,1) returns 5", () => {
  expect(getNumNeighbors(1, 1, mockboard)).toBe(5);
})

test("getNumNeighbors(2,2) returns 6", () => {
  expect(getNumNeighbors(2, 2, mockboard)).toBe(6);
})

test("getNumNeighbors(0,0) returns 1", () => {
  expect(getNumNeighbors(0, 0, mockboard)).toBe(1);
})

test("getNumNeighbors(3,0) returns 2", () => {
  expect(getNumNeighbors(3, 0, mockboard)).toBe(2);
})

// count all neighbors tests

test("countAllNeighbors returns a 2D array", () => {
  expect(typeof countAllNeighbors(mockboard)[0][0]).toBe("number")
})

test("countAllNeighbors returns a 2D array of the same size", () => {
  expect(countAllNeighbors(mockboard).length).toBe(4)
})

test("countAllNeighbors returns cells with a value over 1 v1", () => {
  let max = 0;
  const numNeighborBoard = countAllNeighbors(mockboard);
  numNeighborBoard.forEach(row => row.forEach(cell => (cell>max) && (max = cell)))
  expect(max).toBe(6)
})

test("countAllNeighbors returns cells with a value over 1 v2", () => {
  let maxInRow = [];
  countAllNeighbors(mockboard).forEach(row => maxInRow.push(Math.max(...row)));
  expect(Math.max(...maxInRow)).toBe(6)
})

test("countAllNeighbors returns cells with a value over 1 v2", () => {
  let maxInRow = [];
  countAllNeighbors(mockboard).forEach(row => maxInRow.push(Math.max(...row)));
  expect(Math.max(...maxInRow)).toBe(6)
})

test("countAllNeighbors[1][3] returns 4", () => {
  expect(countAllNeighbors(mockboard)[1][3]).toBe(4)
})

test("countAllNeighbors[0][0] returns 1", () => {
  expect(countAllNeighbors(mockboard)[0][0]).toBe(1)
})

test("countAllNeighbors[3][3] returns 3", () => {
  expect(countAllNeighbors(mockboard)[3][3]).toBe(3)
})

test("new2DArray returns an array", () => {
  expect(typeof new2DArray(5)==="object").toBe(true);
})

test("new2DArray(num) returns an array with the same length", () => {
  expect(new2DArray(5).length).toBe(5);
})

test("new2DArray(num) returns an inner array with the same length", () => {
  expect(new2DArray(6)[4].length).toBe(6);
})

test("new2DArray(num) returns a cell of null", () => {
  expect(new2DArray(6)[4][4]).toBe(null);
})

test("new2DArray(num, val) returns a cell of val", () => {
  expect(new2DArray(6, 5)[4][4]).toBe(5);
})

// tick board

test("tickBoard returns 2D array", () => {
  expect(typeof tickBoard(mockboard)[1][1]).toBe("number")
})

test("tickBoard returns a different array", () => {
  expect(tickBoard(mockboard)).not.toEqual(mockboard)
})

test("tickBoard returns mockboard after 1 tick", () => {
  expect(tickBoard(mockboard)).toEqual(tickboard)
})