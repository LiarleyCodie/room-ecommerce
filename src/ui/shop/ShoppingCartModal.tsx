import { useEffect } from "react"
import iconClose from "../../assets/icon-close.svg"

interface IShoppingCartModalProps {
  handleOpenShoppingModal: () => void
}

function ShoppingCartModal({
  handleOpenShoppingModal,
}: IShoppingCartModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const arrLen = new Array(5)
  arrLen.fill("hi", 0, arrLen.length)

  return (
    <>
      {/* backdrop overlay */}
      <div className="fixed left-0 top-0 z-10 h-full w-full bg-orange-950/50"></div>

      <dialog
        open
        className="fixed left-1/2 top-1/2 z-10 h-[30rem] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md p-5 shadow-lg"
      >
        <button
          onClick={handleOpenShoppingModal}
          className="mb-2 ml-auto flex h-10 w-10 items-center justify-center rounded-md border border-transparent opacity-50 duration-300 hover:bg-stone-900/20 hover:opacity-80 active:border-stone-500"
        >
          <img src={iconClose} className="w-5" />
        </button>

        <div className="">
          <h3 className="mb-4 text-center text-xl font-semibold text-stone-500">
            Products you added to your cart
          </h3>
          
          <div className="max-h-[22rem] overflow-y-auto">
            <table className="w-full border text-center">
              <thead className="text-stone-500">
                <tr>
                  <th>Name</th>
                  <th className="min-w-24">Price</th>
                  <th className="w-20">Options</th>
                </tr>
              </thead>
              <tbody className="border font-semibold">
                {arrLen.map((x, i) => (
                  <tr className="border" key={i}>
                    <td>Trakinas de limones</td>
                    <td className="border-l border-r">$ 1,50</td>
                    <td>
                      <button className="m-1 h-8 w-20 border border-red-800 font-normal text-red-900 duration-300 hover:bg-red-800 hover:text-white active:bg-red-500">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default ShoppingCartModal
