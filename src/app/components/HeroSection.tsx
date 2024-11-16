import Link from "next/link"
import React from "react"

export function HeroSection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 mx-10">
      <h1 className="text-4xl sm:text-6xl lg:test-7xl text-center tracking-wide">
        All the products you need <br />
        <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
          {" "}
          are available with us!
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolor
        doloremque maiores in impedit hic error libero numquam cumque nulla.
        Nesciunt labore itaque quasi, quam voluptates consequuntur soluta modi
        sequi?
      </p>
      <div className="flex justify-center my-10">
        <Link
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
        >
          Register Now
        </Link>
      </div>
    </div>
  )
}
