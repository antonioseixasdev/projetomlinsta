import { getSession } from 'next-auth/react'
import Header from '@/components/layout/Header'
import { AuthProvider } from '@/context/AuthContext'

export async function getServerSideProps(context) {
  const session = await getSession(context)
  console.log('Sessão detectada:', session)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default function Dashboard() {
  return (
    <AuthProvider>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao Dashboard</h1>
      </div>
    </AuthProvider>
  )
}