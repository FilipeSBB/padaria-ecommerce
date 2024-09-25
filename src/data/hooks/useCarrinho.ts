import { useContext } from 'react'
import ContextoCarrinho from '../contexts/ContextCarrinho'

const useCarrinho = () => useContext(ContextoCarrinho)
export default useCarrinho