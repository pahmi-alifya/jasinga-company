"use client"

import { X } from "lucide-react"
import React from "react"
import { Product } from "./CardContent"
import Image from "next/image"

type ProductDetailProps = {
  isOpen: boolean
  closeModal: () => void
  data?: Product
}

export function ProductDetail({
  isOpen,
  closeModal,
  data,
}: ProductDetailProps) {
  if (!isOpen) return

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-5">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {data?.id}. {data?.name || "-"}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent float-right text-3xl"
                onClick={closeModal}
              >
                <X />
              </button>
            </div>
            <Image
              src={data?.image || "/next.svg"}
              alt={"images"}
              placeholder="blur"
              height={500}
              width={500}
              priority
              blurDataURL="/next.svg"
              className="py-3 self-center cursor-pointer"
              onClick={() => window.open(data?.image, "_blank")}
            />
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                non adipisci architecto omnis ipsum, sequi eum quis vitae,
                repudiandae vel facere quasi sint, esse dolor eius! Laborum
                facilis corporis quod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
