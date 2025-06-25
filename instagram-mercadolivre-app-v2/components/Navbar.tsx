import { useEffect, useState } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">ML Insta</div>
      <div className="flex items-center gap-4">
        <button onClick={() => setDark(!dark)} className="text-sm text-gray-500 dark:text-gray-300">Alternar Tema</button>
        <button className="text-sm text-blue-600">Perfil</button>
        <button className="text-sm text-red-500">Sair</button>
      </div>
    </nav>
  )
}
