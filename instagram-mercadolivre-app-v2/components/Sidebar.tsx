import { useRouter } from 'next/router'

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Relatórios', href: '/relatorios' },
  { name: 'Integrações', href: '/integracoes' },
  { name: 'Perfil', href: '/perfil' },
]

export default function Sidebar() {
  const router = useRouter()

  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8 text-blue-600">ML Insta</h2>
      <nav className="flex flex-col gap-4">
        {links.map(link => (
          <button
            key={link.name}
            onClick={() => router.push(link.href)}
            className={`text-left px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-gray-700 ${router.pathname === link.href ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-200'}`}
          >
            {link.name}
          </button>
        ))}
      </nav>
    </aside>
  )
}
