import gameOfLife from "./index.js"

test("Input [[0]] returns [[0]]", () =>{
  expect(gameOfLife([[0]])).toEqual([[0]])
})

test("Input [[1]] returns [[0]]", () =>{
  expect(gameOfLife([[1]])).toEqual([[0]])
})