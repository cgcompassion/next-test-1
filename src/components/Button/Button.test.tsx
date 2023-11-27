import { render, screen } from "@testing-library/react"
import { Button } from "./Button"
import { it, describe } from "bun:test"

describe("Button", () => {
  it("should display button text", () => {
    render(<Button href="https://www.google.com">Hello World</Button>)
    screen.debug()
    screen.getByText(/Hello World/i)
  })
})
