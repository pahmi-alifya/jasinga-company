import React from "react"
import Image from "next/image"

export type Product = {
  id: string
  name: string
  image?: string
}

type CardContentProps = {
  product: Product
  handleShowModal: (product: Product) => void
}

export function CardContent({ product, handleShowModal }: CardContentProps) {
  return (
    <div
      className="w-full"
      onClick={() => handleShowModal(product)}
    >
      <div className="relative bg-gray-900 shadow-sm border border-gray-800 rounded-lg ransform transition-transform duration-300 hover:scale-105 cursor-pointer">
        <div className="relative lg:h-56 md:h-44 h-30 m-2.5 overflow-hidden rounded-md">
          <Image
            src={product?.image || "/next.svg"}
            alt={"images"}
            placeholder="blur"
            height={500}
            width={500}
            priority
            blurDataURL="/next.svg"
          />
        </div>
        <div className="p-4 h-full">
          <h6 className="mb-2 text-slate-100 text-base font-semibold truncate">
            {product.id}. {product.name || "-"}
          </h6>
          <p className="text-slate-300 leading-normal font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            velit mollitia qui magni excepturi reprehenderit magnam aspernatur
            quasi quas itaque, repellat explicabo!
          </p>
        </div>
      </div>
    </div>
  )
}
