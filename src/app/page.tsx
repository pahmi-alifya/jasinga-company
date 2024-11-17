import { HeroSection, Navbar, ProductSection } from "@/app/components"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ProductSection />
      </div>
    </>
  )
}
