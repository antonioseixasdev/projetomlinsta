import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

type Integracao = {
  nome: string
  conectado: boolean
  cor: string
  icone: string
}

const INTEGRACOES: Integracao[] = [
  { nome: 'Instagram', conectado: false, cor: 'bg-gradient-to-r from-pink-500 to-yellow-500', icone: '📷' },
  { nome: 'Mercado Livre', conectado: true, cor: 'bg-yellow-400', icone: '🛒' },
]

export default function Integracoes() {
  const [integracoes, setIntegracoes] = useState(INTEGRACOES)

  const toggleConexao = (nome: string) => {
    setIntegracoes(prev =>
      prev.map(i =>
        i.nome === nome ? { ...i, conectado: !i.conectado } : i
      )
    )
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Integrações</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integracoes.map((i) => (
              <div key={i.nome} className={`${i.cor} p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between`}>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{i.nome}</h2>
                  <span className="text-3xl">{i.icone}</span>
                </div>
                <div className="mt-4">
                  <p className="mb-2 text-sm">
                    Status: {i.conectado ? 'Conectado' : 'Desconectado'}
                  </p>
                  <button
                    onClick={() => toggleConexao(i.nome)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${i.conectado ? 'bg-white text-black' : 'bg-black text-white'}`}
                  >
                    {i.conectado ? 'Desconectar' : 'Conectar Conta'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
