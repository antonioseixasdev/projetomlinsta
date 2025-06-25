"use client"
import { useState } from 'react'

export default function Perfil() {
  const [nome, setNome] = useState('Antonio Seixas')
  const [email, setEmail] = useState('antonio@example.com')
  const [foto, setFoto] = useState('/avatar.png')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (senha && senha !== confirmarSenha) {
      alert('As senhas não coincidem')
      return
    }
    alert('Perfil atualizado com sucesso!')
    // Enviar dados atualizados ao backend
  }

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Meu Perfil</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-4">
          <img src={foto} alt="Foto de perfil" className="w-16 h-16 rounded-full object-cover" />
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">URL da Foto</label>
            <input
              type="text"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
              className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300">Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300">Nova Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-300">Confirmar Senha</label>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  )
}
