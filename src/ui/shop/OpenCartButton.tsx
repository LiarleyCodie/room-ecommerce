import iconShoppingCartWhite from "../../assets/icon-shopping-cart-white.svg"
import OpenCartButtonStyles from "./OpenCart.module.css"

interface IOpenCartButtonProps {
  amountOfItemsInCart: number
  handleOpenShoppingModal: () => void
}

function OpenCartButton({ amountOfItemsInCart, handleOpenShoppingModal }: IOpenCartButtonProps) {
  return (
    <button
      data-count={amountOfItemsInCart}
      className={`duration-300" fixed bottom-0 right-0 mb-2 mr-2 flex h-16 w-16 items-center justify-center rounded-full bg-orange-800 drop-shadow-md hover:bg-orange-600 md:mb-8 md:mr-8 ${amountOfItemsInCart && OpenCartButtonStyles.itemsAmountIndicator}`}
      onClick={handleOpenShoppingModal}
    >
      <img
        src={iconShoppingCartWhite}
        className="w-7"
        alt="shoping cart icon white"
      />
    </button>
  )
}

export default OpenCartButton
