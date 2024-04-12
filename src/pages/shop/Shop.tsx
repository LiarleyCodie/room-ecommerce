import iconSearch from "../../assets/icon-search.svg"
import iconShoppingCart from "../../assets/icon-shopping-cart.svg"
import iconX from "../../assets/icon-shopping-cart-x.svg"

import { useState, useCallback } from "react"
import OpenCartButton from "../../ui/shop/OpenCartButton"
import ShoppingCartModal from "../../ui/shop/ShoppingCartModal"

export interface IShopItems {
  id: string
  title: string
  price: number
  imageSrc?: string
  isInTheCart: boolean
}

function Shop() {
  const [shopItems, setShopItems] = useState<Map<string, IShopItems>>(
    function () {
      const initialItems = new Map<string, IShopItems>()

      for (let i = 0; i < 8; i++) {
        const item = {
          id: (i + 1).toString(),
          title: "Vitra Organic Chair Organic Chair",
          price: 236.99,
          imageSrc: "/vitra-organic-chair.png",
          isInTheCart: false,
        }
        initialItems.set((i + 1).toString(), item)
      }

      return initialItems
    },
  )
  const [itemsInCart, setItemsInCart] = useState<Map<string, IShopItems>>(
    new Map(),
  )
  const [isShoppingModalVisible, setIsShoppingModalVisible] = useState(false)

  const handleAddItemToCart = useCallback(
    (itemId: string) => {
      setShopItems((prevItems) => {
        const updatedItems = new Map(prevItems)
        let item: IShopItems | undefined | null = updatedItems.get(itemId)
        if (item) {
          updatedItems.set(itemId, { ...item, isInTheCart: true })
        }

        setItemsInCart((prevCartItems) => {
          const updatedCartItems = new Map(prevCartItems)

          if (item) {
            updatedCartItems.set(itemId, item)
          }

          item = null

          return updatedCartItems
        })

        return updatedItems
      })
    },
    [setShopItems, setItemsInCart],
  )

  const handleRemoveItemFromCart = useCallback(
    (itemId: string) => {
      setShopItems((prevItems) => {
        const updatedItems = new Map(prevItems)

        let item: IShopItems | undefined | null = updatedItems.get(itemId)
        if (item) {
          updatedItems.set(itemId, { ...item, isInTheCart: false })
        }

        setItemsInCart((prevCartItems) => {
          const updatedCartItems = new Map(prevCartItems)

          if (item) {
            updatedCartItems.delete(itemId)
          }

          item = null

          return updatedCartItems
        })

        return updatedItems
      })

      console.log("hello")
    },
    [setShopItems, setItemsInCart],
  )

  const handleOpenShoppingModal = () => {
    setIsShoppingModalVisible(true)
  }
  const handleCloseShoppingModal = () => {
    setIsShoppingModalVisible(false)
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
          {Array.from(shopItems.entries()).map(([key, item]) => (
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

                {item.isInTheCart ? (
                  <button
                    className="group flex items-center justify-center gap-2 border bg-stone-800 py-1 text-stone-200   hover:bg-stone-600"
                    onClick={() => handleRemoveItemFromCart(item.id)}
                  >
                    Remove from Cart{" "}
                    <img
                      src={iconX}
                      className="pointer-events-none opacity-50 group-hover:opacity-75"
                      alt="cart icon"
                    />
                  </button>
                ) : (
                  <button
                    className="group flex items-center justify-center gap-2 border border-black/50 py-1 text-black/50 hover:border-stone-300 hover:bg-stone-300 hover:text-black/75"
                    onClick={() => handleAddItemToCart(item.id)}
                  >
                    Add to Cart{" "}
                    <img
                      src={iconShoppingCart}
                      className="pointer-events-none opacity-50 group-hover:opacity-75"
                      alt="cart icon"
                    />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {isShoppingModalVisible && (
          <ShoppingCartModal
            handleOpenShoppingModal={handleCloseShoppingModal}
            itemsInCartData={itemsInCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        )}

        <OpenCartButton
          amountOfItemsInCart={itemsInCart.size}
          handleOpenShoppingModal={handleOpenShoppingModal}
        />
      </section>
    </main>
  )
}

export default Shop
