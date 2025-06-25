'use client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signInWithEmail } from '@/lib/authService'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const user = await signInWithEmail(email, senha)
    if (user) {
      router.push('/dashboard')
    } else {
      alert('Login inválido ou erro na autenticação')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow w-96 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Login</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full px-3 py-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Entrar
        </button>
      </form>
    </div>
  )
}