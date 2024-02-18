import { ha } from "../src/index"

describe("dummy test", () => {
  it("works if true is trhty", () => {
    expect(true).toBeTruthy()
  })
})

describe("another", () => {
  expect(ha(121)).toBeTruthy()
})
