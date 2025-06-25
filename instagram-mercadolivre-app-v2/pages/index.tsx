import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = () => {
    if (email && senha) router.push('/dashboard')
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md transition">
        <h1 className="text-2xl font-bold mb-6 text-center">Entrar no ML Insta</h1>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail"
          className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha"
          className="w-full mb-4 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
        <button onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-medium transition">
          Entrar
        </button>
        <div className="mt-4 text-sm text-center text-gray-500">
          <a href="#" className="text-blue-500 hover:underline">Esqueci a senha</a> | <a href="#" className="text-blue-500 hover:underline">Cadastrar</a>
        </div>
      </div>
    </div>
  )
}
