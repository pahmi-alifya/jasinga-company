"use client"

import React from "react"
import { useProduct } from "@/app/hooks/useProduct"
import { CardContent } from "./CardContent"

export function ProductSection() {
  const { isLoading, data: products } = useProduct()

  if (isLoading) return

  return (
    <div className="relative mt-36 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl mt-10 lg:mt-20 tracking-wide">
          Our
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
            {" "}
            Pruducts
          </span>
        </h2>
        <p className="mt-10 text-lg text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor
          doloremque maiores in impedit hic error libero numquam cumque nulla.
          Nesciunt labore itaque quasi, quam voluptates consequuntur soluta modi
          sequi?
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 lg:mt-20 justify-around gap-5">
        {products?.map((product, index) => (
          <CardContent
            product={product}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
