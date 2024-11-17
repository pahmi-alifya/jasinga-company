import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { ProductDetail } from "../ProductDetail"

const mockData = {
  id: "1",
  name: "Test Product",
  image: "/test-image.jpg",
}

describe("ProductDetail", () => {
  it("should render the product details when isOpen is true", () => {
    render(
      <ProductDetail
        isOpen={true}
        closeModal={() => {}}
        data={mockData}
      />
    )
    expect(screen.getByText("1. Test Product")).toBeInTheDocument()
    expect(screen.getByRole("img")).toBeInTheDocument()
    // expect(screen.getByText("X")).toBeInTheDocument()
  })

  it("should not render the product details when isOpen is false", () => {
    render(
      <ProductDetail
        isOpen={false}
        closeModal={() => {}}
        data={mockData}
      />
    )
    expect(screen.queryByText("1. Test Product")).not.toBeInTheDocument()
  })

  it("should call closeModal function when close button is clicked", () => {
    const closeModal = vi.fn()
    render(
      <ProductDetail
        isOpen={true}
        closeModal={closeModal}
        data={mockData}
      />
    )

    const closeButton = screen.getByRole("button")
    fireEvent.click(closeButton)
    expect(closeModal).toHaveBeenCalledTimes(1)
  })

  it("should open image in a new tab when clicked", () => {
    const open = vi.spyOn(window, "open")
    render(
      <ProductDetail
        isOpen={true}
        closeModal={() => {}}
        data={mockData}
      />
    )
    const image = screen.getByRole("img")
    fireEvent.click(image)
    expect(open).toHaveBeenCalled()
  })
})
