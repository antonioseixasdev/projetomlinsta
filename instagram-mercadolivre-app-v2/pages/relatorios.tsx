import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

const dadosLinha = [
  { dia: 'Seg', vendas: 320 },
  { dia: 'Ter', vendas: 410 },
  { dia: 'Qua', vendas: 300 },
  { dia: 'Qui', vendas: 480 },
  { dia: 'Sex', vendas: 530 },
  { dia: 'Sáb', vendas: 700 },
  { dia: 'Dom', vendas: 650 },
]

const dadosPizza = [
  { nome: 'Instagram', valor: 500 },
  { nome: 'Mercado Livre', valor: 1200 },
  { nome: 'Loja Física', valor: 300 },
]

const cores = ['#2563eb', '#facc15', '#10b981']

export default function Relatorios() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Relatórios</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">Vendas por Dia</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dadosLinha}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="dia" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="vendas" stroke="#2563eb" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">Distribuição por Canal</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dadosPizza}
                    dataKey="valor"
                    nameKey="nome"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {dadosPizza.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
