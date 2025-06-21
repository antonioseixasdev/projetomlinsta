import AuthControls from '@/components/AuthControls';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="mb-2">Faça login para acessar o sistema:</p>
      <div className="mt-4">
        <AuthControls />
      </div>
    </div>
  );
}
