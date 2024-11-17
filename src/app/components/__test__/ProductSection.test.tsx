import { render, screen } from "@testing-library/react"

import { describe, expect, it, vi } from "vitest"
import { ProductSection } from "../ProductSection"
import { useProduct } from "@/app/hooks/useProduct"
import { useShowModal } from "@/app/hooks/useShowModal"
import { beforeEach } from "node:test"

vi.mock("@/app/hooks/useProduct")
vi.mock("@/app/hooks/useShowModal")

describe("ProductSection", () => {
  vi.mocked(useProduct).mockReturnValue({
    isLoading: false,
    isError: null,
    data: [{ id: "1", name: "test", image: "/test.jpg" }],
  })
  vi.mocked(useShowModal).mockReturnValue({
    showModal: false,
    data: { id: "1", name: "test", image: "/test.jpg" },
    handleShowModal: vi.fn(),
    handleCloseModal: vi.fn(),
  })
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should render ProductSection component", () => {
    render(<ProductSection />)
    expect(screen.getByText("Our")).toBeInTheDocument()
    expect(screen.getByText("Pruducts")).toBeInTheDocument()
  })

  it("should isLoading must be false and show the content", () => {
    render(<ProductSection />)
    expect(screen.getByText("1. test")).toBeInTheDocument()
  })

  it("should isLoading must be true and show the shimmer", () => {
    vi.mocked(useProduct, { partial: true }).mockReturnValue({
      isLoading: true,
    })
    render(<ProductSection />)
    const shimmerCards = screen.queryAllByTestId("shimmer")
    expect(shimmerCards).toHaveLength(8)
  })
})
