"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { navItems } from "@/app/constants"

export function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev)
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="coatiner px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image
              className="dark:invert h-10 w-10 mr-4"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <span className="text-xl tracking-tight">Jasinga Company</span>
          </div>
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4 items-center">
            <Link
              href="#"
              className="py-2 px-3 border rounded-md"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
            >
              Create an Account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              <div
                className={`transition-transform duration-300 ease-in-out ${
                  mobileDrawerOpen ? "transform rotate-90" : ""
                }`}
              >
                {mobileDrawerOpen ? <X /> : <Menu />}
              </div>
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="py-2 px-3 border rounded-md"
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
              >
                Create an Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
