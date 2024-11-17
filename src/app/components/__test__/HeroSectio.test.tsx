import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { HeroSection } from "../HeroSection"

describe("HeroSection Component", () => {
  it("renders the main heading", () => {
    render(<HeroSection />)
    const heading = screen.getByRole("heading", {
      name: /All the products you need/i,
    }) // Case-insensitive
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("All the products you need")
  })

  it("renders the highlighted span within the heading", () => {
    render(<HeroSection />)
    const highlightedSpan = screen.getByText("are available with us!")
    expect(highlightedSpan).toBeInTheDocument()
    expect(highlightedSpan).toHaveClass(
      "bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text"
    )
  })

  it("renders the paragraph text", () => {
    render(<HeroSection />)
    const paragraph = screen.getByText(/Lorem ipsum dolor sit amet/i) // Case-insensitive partial match
    expect(paragraph).toBeInTheDocument()
  })

  it('renders the "Register Now" link', () => {
    render(<HeroSection />)
    const linkElement = screen.getByRole("link", { name: /Register Now/i }) // Use getByRole for better robustness
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute("href", "#") // Check the href attribute
    expect(linkElement).toHaveClass(
      "bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
    )
  })
})
