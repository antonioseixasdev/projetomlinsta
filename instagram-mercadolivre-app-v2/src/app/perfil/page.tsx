"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

const PerfilPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="text-center py-10 animate-pulse">Carregando perfil...</div>;
  }

  const getProviderName = (providerId: string) => {
    if (providerId.includes('google')) return 'Google';
    if (providerId.includes('facebook')) return 'Facebook';
    return providerId;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-texto-base-light dark:text-texto-base-dark">
        Meu Perfil
      </h1>
      <Card className="max-w-3xl mx-auto p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-10">
          {user.photoURL ? (
            <Image
              src={user.photoURL}
              alt={`Foto de ${user.displayName || 'usuário'}`}
              width={150}
              height={150}
              className="rounded-full object-cover border-4 border-areia-light dark:border-areia-dark mb-6 md:mb-0"
            />
          ) : (
            <div className="w-32 h-32 md:w-36 md:h-36 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center text-5xl text-gray-500 dark:text-gray-400 mb-6 md:mb-0">
              {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
            </div>
          )}
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-2xl lg:text-3xl font-semibold text-texto-base-light dark:text-texto-base-dark">
              {user.displayName || 'Nome não fornecido'}
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-1">
              {user.email || 'E-mail não fornecido'}
            </p>
            {user.emailVerified === false && (
                 <p className="text-sm text-yellow-600 dark:text-yellow-500 mt-1">E-mail não verificado.</p>
            )}
            <div className="mt-5 text-sm text-gray-500 dark:text-gray-300 space-y-1">
              <p><strong>UID:</strong> {user.uid}</p>
              {user.providerData?.length > 0 && (
                <p><strong>Conectado com:</strong> {user.providerData.map(p => getProviderName(p.providerId)).join(', ')}</p>
              )}
              <p><strong>Conta criada em:</strong> {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</p>
              <p><strong>Último login:</strong> {user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString() : 'N/A'}</p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="outline" onClick={() => alert('Editar Perfil: a implementar!')}>
                Editar Perfil
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PerfilPage;
