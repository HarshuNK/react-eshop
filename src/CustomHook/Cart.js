import { useContext } from "react"
import { CartContext } from "../Context/CardContext"

// useCart => custom hook represents the cartContext
const useCart = () => {
    return useContext(CartContext)
}

export default useCart