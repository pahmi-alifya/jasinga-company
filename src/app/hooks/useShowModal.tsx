"use client"

import { useState } from "react"
import { Product } from "../components/CardContent"

export const useShowModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState<Product>()

  const handleShowModal = (product: Product) => {
    setShowModal(true)

    setData(product)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return {
    showModal,
    handleShowModal,
    handleCloseModal,
    data,
  }
}
