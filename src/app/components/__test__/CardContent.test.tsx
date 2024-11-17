import { describe, expect, it, vi } from "vitest"
import { render } from "@testing-library/react"
import { CardContent, Product } from "../CardContent"

const mockProduct: Product = {
  id: "1",
  name: "Test Product",
  image: "/test-image.jpg",
}
const handleShowModal = vi.fn()

describe("CardContent Component", () => {
  it("renders product name and image", () => {
    const { getByText } = render(
      <CardContent
        product={mockProduct}
        handleShowModal={handleShowModal}
      />
    )

    expect(getByText("1. Test Product")).toBeInTheDocument()
  })
})
