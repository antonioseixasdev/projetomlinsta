"use client";
import ProtectedRoute from '@/components/ProtectedRoute';

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p>Bem-vindo ao seu painel! (Conteúdo protegido)</p>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
