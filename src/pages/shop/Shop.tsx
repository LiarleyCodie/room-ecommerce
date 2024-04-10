import iconSearch from "../../assets/icon-search.svg"
import iconShoppingCart from "../../assets/icon-shopping-cart.svg"
import iconShoppingCartWhite from "../../assets/icon-shopping-cart-white.svg"

import { MouseEvent } from "react"

import OpenCartButtonStyles from "./OpenCart.module.css"

interface IShopItems {
  id: number
  title: string
  price: number
  imageSrc: string
}

const shopItemsGrid = new Map<string, IShopItems>()

for (let i = 0; i < 8; i++) {
  const item = {
    id: i + 1,
    title: "Vitra Organic Chair Organic Chair",
    price: 236.99,
    imageSrc: "/vitra-organic-chair.png",
  }
  // shopItemsGrid.push(item)
  shopItemsGrid.set((i + 1).toString(), item)
}

function Shop() {
  const amountOfItemsInCart = 2
  function handleAddItemToCart(e: MouseEvent) {
    if (e.target) {
      const target = e.target as HTMLButtonElement

      const itemId = target?.parentElement?.parentElement?.getAttribute('itemid')
      console.log(itemId);
      
    }
  }

  return (
    <main>
      <header className="flex h-96 w-full flex-col items-center justify-center bg-mobile-shop-header bg-cover bg-center bg-no-repeat px-8 lg:bg-desktop-shop-header">
        <h1 className="mt-16 text-center text-2xl text-stone-300 lg:mt-16">
          We have what you need to make your environment more pleasant.
        </h1>
        <div className="mt-12 flex w-full max-w-2xl rounded-full border outline outline-4 outline-white/0 duration-300 focus-within:outline-white/30 lg:mt-20">
          <input
            type="text"
            className="flex-1 rounded-full bg-transparent py-2 pl-4 pr-2 text-white outline-none lg:pl-6"
            placeholder="Search for chairs, tables and much more... "
          />
          <button className="flex w-full min-w-12 max-w-20 items-center justify-center rounded-r-full bg-white pr-1">
            <img src={iconSearch} alt="search" className="w-5" />
          </button>
        </div>
      </header>

      <section className="flex justify-center px-16 py-20">
        <div className="flex w-56 flex-wrap gap-8 md:w-[30rem] lg:w-[46rem] 2xl:w-[62rem]">
          {/* Product Card */}
          {Array.from(shopItemsGrid.entries()).map(([key, item]) => (
            <div
              key={key}
              itemID={item.id.toString()}
              className="flex w-56 flex-col items-center gap-2"
            >
              <div className="flex h-56 w-56 items-center justify-center bg-stone-200">
                <img
                  src={item.imageSrc}
                  alt="vitra organic chair"
                  draggable={false}
                />
              </div>
              <div className="flex w-full flex-col px-2 text-center">
                <p className="break-words font-medium">{item.title}</p>
                <p className="my-2 text-2xl font-bold text-orange-800">
                  $ {item.price}
                </p>
                <button
                  className="group flex items-center justify-center gap-2 border border-black/50 py-1 text-black/50 hover:border-stone-300 hover:bg-stone-300 hover:text-black/75"
                  onClick={handleAddItemToCart}
                >
                  Add to Cart{" "}
                  <img
                    src={iconShoppingCart}
                    className="pointer-events-none opacity-50 group-hover:opacity-75"
                    alt="cart icon"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Open Cart */}
        <button
          data-count={amountOfItemsInCart}
          className={`duration-300" fixed bottom-0 right-0 mb-2 mr-2 flex h-16 w-16 items-center justify-center rounded-full bg-orange-800 shadow-lg hover:bg-orange-600 md:mb-8 md:mr-8 ${amountOfItemsInCart && OpenCartButtonStyles.itemsAmountIndicator}`}
        >
          <img
            src={iconShoppingCartWhite}
            className="w-7"
            alt="shoping cart icon white"
          />
        </button>
      </section>
    </main>
  )
}

export default Shop
