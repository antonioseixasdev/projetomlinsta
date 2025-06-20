'use client';

import { useEffect, useState } from 'react';
import firebase_app from '@/lib/firebaseConfig.js';
import { getAuth } from 'firebase/auth';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { Toast } from "@/components/ui/Toast";

// Exemplo de ícone simples (SVG inline)
const IconCheck = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const IconUser = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconLock = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect width="20" height="12" x="2" y="10" rx="2" />
    <path d="M7 10V7a5 5 0 0110 0v3" />
  </svg>
);

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type?: "success" | "error" | "info" | "warning" } | null>(null);

  useEffect(() => {
    try {
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
        <div className="flex gap-4 mt-8 flex-wrap">
          <Button variant="primary" size="md" iconLeft={<IconCheck />}>Com ícone à esquerda</Button>
          <Button variant="secondary" size="md" iconRight={<IconArrowRight />}>Com ícone à direita</Button>
          <Button variant="outline" size="md" iconLeft={<IconCheck />} iconRight={<IconArrowRight />}>Ícones nos dois lados</Button>
          <Button variant="ghost" size="md" isLoading iconLeft={<IconCheck />}>Carregando</Button>
        </div>
        <div className="flex flex-col gap-4 mt-8 w-full max-w-md">
          <Input label="Usuário" placeholder="Digite seu usuário" iconLeft={<IconUser />} />
          <Input label="Senha" type="password" placeholder="Digite sua senha" iconLeft={<IconLock />} error="Senha inválida" />
          <Input label="Somente texto" placeholder="Sem ícone" />
        </div>
        <div className="flex flex-col gap-4 mt-8 w-full max-w-md">
          <Card>
            <h2 className="text-lg font-bold mb-2">Card padrão</h2>
            <p>Este é um card básico, ótimo para agrupar informações.</p>
          </Card>
          <Card shadow={false} border>
            <h2 className="text-lg font-bold mb-2">Card com borda</h2>
            <p>Card sem sombra, mas com borda visível.</p>
          </Card>
          <Card rounded={false}>
            <h2 className="text-lg font-bold mb-2">Card sem borda arredondada</h2>
            <p>Card com cantos retos.</p>
          </Card>
        </div>
        <div className="flex gap-4 mt-8">
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Abrir Modal
          </Button>
        </div>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Exemplo de Modal">
          <p>Este é um modal reutilizável. Você pode colocar qualquer conteúdo aqui.</p>
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Fechar
            </Button>
          </div>
        </Modal>
        <div className="flex gap-4 mt-8 flex-wrap">
          <Button variant="primary" onClick={() => setToast({ message: "Ação realizada com sucesso!", type: "success" })}>
            Mostrar Toast Sucesso
          </Button>
          <Button variant="secondary" onClick={() => setToast({ message: "Ocorreu um erro!", type: "error" })}>
            Mostrar Toast Erro
          </Button>
          <Button variant="outline" onClick={() => setToast({ message: "Informação importante.", type: "info" })}>
            Mostrar Toast Info
          </Button>
          <Button variant="ghost" onClick={() => setToast({ message: "Atenção!", type: "warning" })}>
            Mostrar Toast Aviso
          </Button>
        </div>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </main>
  );
}
