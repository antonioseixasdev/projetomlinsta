"use client";
import { signInWithGoogle, signInWithFacebook, appSignOut } from '@/lib/authService';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';

const AuthControls = () => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (user) {
    return (
      <div className="flex items-center gap-2">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName || user.email || 'Avatar'}
            className="w-8 h-8 rounded-full border"
          />
        )}
        <span className="text-sm font-medium">{user.displayName?.split(' ')[0] || user.email?.split('@')[0]}</span>
        <Button onClick={appSignOut} variant="outline" size="sm">
          Sair
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Button onClick={signInWithGoogle} variant="secondary" size="sm">
        Google
      </Button>
      <Button
        onClick={signInWithFacebook}
        variant="secondary"
        size="sm"
        className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white"
      >
        Facebook
      </Button>
    </div>
  );
};

export default AuthControls;