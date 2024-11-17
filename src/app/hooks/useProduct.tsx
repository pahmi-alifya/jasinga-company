"use client"
import { useState, useEffect } from "react"
import { Product } from "../components/CardContent"

type Image = {
  id: string[]
  image: string
}

export const useProduct = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState<Error | null>(null)
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, imagesResponse] = await Promise.all([
          fetch("https://www.giovankov.com/api/product.json"),
          fetch("https://www.giovankov.com/api/image.json"),
        ])

        if (!productsResponse.ok || !imagesResponse.ok) {
          throw new Error(
            `HTTP error! Product status: ${productsResponse.status}, Image status: ${imagesResponse.status}`
          )
        }

        const productsData = await productsResponse.json()
        const imagesData = await imagesResponse.json()

        const combinedData = productsData.data.map((product: Product) => {
          const image = imagesData.data.find((img: Image) =>
            img.id.includes(product.id)
          )?.image
          return { ...product, image }
        })
        setData(combinedData)
      } catch (error: any) {
        setIsError(error)
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { isLoading, isError, data }
}
