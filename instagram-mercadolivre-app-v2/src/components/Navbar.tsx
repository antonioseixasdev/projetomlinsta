"use client";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">ML Insta</div>
      <div className="flex items-center gap-4">
        <button className="text-sm text-blue-600">Perfil</button>
        <button className="text-sm text-red-500">Sair</button>
      </div>
    </nav>
  )
}
