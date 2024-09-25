import useCarrinho from '@/data/hooks/useCarrinho';
import Produto from '@/data/model/Produto';
import Image from 'next/image';

export interface CartaoProdutoProps {
    produto: Produto;
}

export default function CartaoProduto(props: CartaoProdutoProps) {
    const { adicionar } = useCarrinho();
    const { nome, descricao, preco, imagem } = props.produto;

    return (
        <div className="flex flex-col w-72 bg-zinc-900 rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-52">
                <Image 
                    src={imagem} 
                    alt={nome} 
                    fill 
                    className="object-cover" 
                    quality={80} // Melhora a qualidade da imagem
                    priority // Carrega a imagem de forma prioritária
                />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl font-bold text-white">{nome}</h2>
                <p className="flex-1 text-sm text-zinc-400">{descricao}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">R$ {preco.toFixed(2)}</span>
                    <button
                        onClick={() => adicionar(props.produto)}
                        className="border rounded-full px-5 py-1 text-sm text-white bg-blue-600 hover:bg-blue-500 transition duration-200"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
}
screenTop