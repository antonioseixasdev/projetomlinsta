import Navbar from '@/components/Navbar'
import Sidebar from '../../components/Sidebar'

const produtos = [
  { id: 1, nome: 'Produto A', preco: 99.90, estoque: 10, imagem: '/placeholder.png' },
  { id: 2, nome: 'Produto B', preco: 149.90, estoque: 5, imagem: '/placeholder.png' },
]

export default function Produtos() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Produtos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtos.map(produto => (
              <div key={produto.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img src={produto.imagem} alt={produto.nome} className="w-full h-40 object-cover rounded mb-4" />
                <h2 className="text-lg font-semibold">{produto.nome}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Estoque: {produto.estoque}</p>
                <p className="text-green-600 font-bold mt-2">R$ {produto.preco.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
