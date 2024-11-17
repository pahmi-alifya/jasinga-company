import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Navbar } from "../Navbar"
import { navItems } from "../../constants"

describe("Navbar Component", () => {
  it("renders the logo and title", () => {
    render(<Navbar />)
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByText("Jasinga Company")).toBeInTheDocument()
  })

  it("renders desktop navigation links", () => {
    render(<Navbar />)
    navItems.forEach((item) => {
      const itemLinks = screen.getAllByText(item.label)
      expect(itemLinks.length).toBeGreaterThan(0)
    })
  })

  it("renders desktop Sign In and Create Account links", () => {
    render(<Navbar />)

    const elements = screen.getAllByText("Sign In")
    expect(elements.length).toBeGreaterThan(0)
    expect(screen.getByText("Create an Account")).toBeInTheDocument()
  })

  it("renders the mobile menu button", () => {
    render(<Navbar />)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()

    expect(button.querySelector("svg")).toBeInTheDocument()
  })

  it("renders mobile navigation links when the menu is open", () => {
    render(<Navbar />)
    const button = screen.getByRole("button")
    fireEvent.click(button)
    navItems.forEach((item) => {
      const itemLinks = screen.getAllByText(item.label)
      expect(itemLinks.length).toBeGreaterThan(0)
    })
  })

  it("renders mobile Sign In and Create Account links when the menu is open", () => {
    render(<Navbar />)
    const button = screen.getByRole("button")
    fireEvent.click(button)

    const signInElements = screen.getAllByText("Sign In")
    expect(signInElements.length).toBeGreaterThan(0)
    const createAccountElements = screen.getAllByText("Create an Account")
    expect(createAccountElements.length).toBeGreaterThan(0)
  })
})
