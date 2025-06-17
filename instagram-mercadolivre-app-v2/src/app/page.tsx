'use client';

import { useEffect } from 'react';
import firebase_app from '@/lib/firebaseConfig.js';
import { getAuth } from 'firebase/auth';

export default function Home() {
  useEffect(() => {
    try {
      // @ts-expect-error: firebase_app is JS default export, trust its type
      const auth = getAuth(firebase_app);
      console.log("Firebase Auth object:", auth);
    } catch (e) {
      console.error("Erro ao inicializar Firebase Auth:", e);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Bem-vindo ao Instagram + Mercado Livre App</h1>
        <p>Verificando a configuração do Firebase. Abra o console do desenvolvedor (F12).</p>
      </div>
    </main>
  );
}
