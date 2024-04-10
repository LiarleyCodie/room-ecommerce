import { Link } from "react-router-dom"
import iconArrow from "../../assets/icon-arrow.svg"
import iconAngleLeft from "../../assets/icon-angle-left.svg"
import iconAngleRight from "../../assets/icon-angle-right.svg"
import { useState } from "react"

function Home() {
  const texts = [
    {
      title: "Discover innovative ways to decorate",
      description: `We provide unmatched quality, comfort, and style for property owners across the country. 
      Our experts combine form and function in bringing your vision to life. Create a room in your 
      own style with our collection and make your property a reflection of you and what you love.`,
    },
    {
      title: "We are available all across the globe",
      description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we're in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
      title: "Manufactured with the best materials",
      description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
    },
  ]
  const [currentImageId, setCurrentImageId] = useState(1)
  const [currentDescriptionId, setCurrentDescriptionId] = useState(0)

  function goToNextImage() {
    setCurrentImageId(currentImageId + 1)
    if (currentImageId >= 3) setCurrentImageId(1)
  }

  function backToPreviousImage() {
    setCurrentImageId(currentImageId - 1)
    if (currentImageId <= 1) setCurrentImageId(3)
  }

  function goToNextDescription() {
    setCurrentDescriptionId(currentDescriptionId + 1)
    if (currentDescriptionId >= texts.length - 1) setCurrentDescriptionId(0)
  }

  function backToPreviousDescription() {
    setCurrentDescriptionId(currentDescriptionId - 1)
    if (currentDescriptionId <= 0) setCurrentDescriptionId(texts.length - 1)
  }

  return (
    <main className="h-screen grid-cols-[1fr_1.15fr] grid-rows-[1.4fr_1fr] lg:grid">
        <header className="flex items-center justify-center">
          <picture className="h-full w-full">
            <source
              className="h-full w-full object-cover"
              media="(min-width: 768px)"
              srcSet={`/desktop-image-hero-${currentImageId}.jpg`}
              draggable={false}
            />
            <img
              className="h-full w-full object-cover"
              src={`/mobile-image-hero-${currentImageId}.jpg`}
              alt="image"
              draggable={false}
            />
          </picture>
        </header>
        <section className="relative flex flex-col justify-center gap-6 bg-white px-8 py-20 lg:px-16">
          <h1 className="text-4xl font-bold leading-none lg:text-[2rem]">
            {texts[currentDescriptionId].title}
          </h1>
          <p className="font-semibold leading-6 text-stone-400 lg:text-sm lg:font-bold lg:leading-7">
            {texts[currentDescriptionId].description}
          </p>
          <Link
            to="/shop"
            className="group flex items-center py-2 text-base font-semibold tracking-[.5rem] transition-opacity hover:opacity-50 lg:text-base lg:tracking-[.75rem]"
          >
            SHOP NOW{" "}
            <img
              className="ml-5 w-12 transition-transform group-hover:translate-x-3 lg:w-12"
              src={iconArrow}
              alt="arrow left"
            />
          </Link>

          {/* Section Navbuttons */}
          <div className="absolute -top-14 right-0 flex gap-2 bg-black lg:bottom-0 lg:left-0 lg:right-auto lg:top-auto">
            <button
              onClick={() => {
                backToPreviousImage()
                backToPreviousDescription()
              }}
              className="flex h-14 w-14 items-center justify-center transition-colors hover:bg-stone-700 lg:h-12 lg:w-12"
            >
              <img
                className="flex w-3 lg:mb-[-0.25rem] lg:w-2"
                src={iconAngleLeft}
                alt="arrow left"
                draggable={false}
              />
            </button>

            <button
              onClick={() => {
                goToNextImage()
                goToNextDescription()
              }}
              className="flex h-14 w-14 items-center justify-center transition-colors hover:bg-stone-700 lg:h-12 lg:w-12"
            >
              <img
                className="flex w-3 lg:mb-[-0.25rem] lg:w-2"
                src={iconAngleRight}
                alt="arrow right"
                draggable={false}
              />
            </button>
          </div>
        </section>
      <footer className="col-span-2 flex flex-col lg:flex-row">
        <div className="flex-1 ">
          <img
            className="h-full w-full object-cover"
            src="/image-about-dark.jpg"
            alt="about dark"
          />
        </div>
        <div className="flex flex-1  flex-grow-[1.25] flex-col justify-center gap-4 bg-white px-8 py-10 lg:px-16">
          <h2 className="text-base font-bold uppercase tracking-[.2rem] lg:text-xl lg:tracking-[.35rem] ">
            About our furniture
          </h2>
          <p className="text-sm font-bold leading-6 text-stone-400 lg:leading-8">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className="flex-1 ">
          <img
            className="h-full w-full object-cover"
            src="/image-about-light.jpg"
            alt="about light"
          />
        </div>
      </footer>
    </main>
  )
}

export default Home
