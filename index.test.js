import gameOfLife from "./index.js"

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
