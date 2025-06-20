"use client";
import { signInWithGoogle, signInWithFacebook, appSignOut } from '@/lib/authService';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';

const AuthControls = () => {
  const { user, loading } = useAuth();

  if (loading) return <p className="animate-pulse">Carregando auth...</p>;

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        {user.photoURL && (
          <img src={user.photoURL} alt={user.displayName || user.email || 'Avatar'} className="w-8 h-8 rounded-full border border-gray-300 dark:border-cinza-fundo-dark" />
        )}
        <div className="flex flex-col text-xs text-left">
          <span className="font-semibold">{user.displayName || user.email}</span>
          <span className="text-gray-500 dark:text-gray-400">{user.email}</span>
        </div>
        <Button onClick={appSignOut} variant="outline" size="sm">Logout</Button>
      </div>
    );
  }

  return (
    <div className="flex space-x-2">
      <Button onClick={signInWithGoogle} variant="secondary" size="sm">
        Login Google
      </Button>
      <Button onClick={signInWithFacebook} variant="secondary" size="sm" className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white">
        Login Facebook
      </Button>
    </div>
  );
};

export default AuthControls;
