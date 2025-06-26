import firebase_app from '@/lib/firebaseConfig';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword, // ADICIONADO
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';

const auth = getAuth(firebase_app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Função para definir o cookie de login
const setLoginCookie = () => {
  if (typeof document !== 'undefined') {
    document.cookie = "isLoggedIn=true; path=/; max-age=" + (60 * 60 * 24 * 7); // 7 dias
  }
};

// Função para remover o cookie de login
const removeLoginCookie = () => {
  if (typeof document !== 'undefined') {
    document.cookie = "isLoggedIn=; path=/; max-age=0";
  }
};

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      setLoginCookie();
    }
    return result.user;
  } catch (error: any) {
    console.error("Erro Google Sign-In:", error.message);
    return null;
  }
};

export const signInWithFacebook = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    if (result.user) {
      setLoginCookie();
    }
    return result.user;
  } catch (error: any) {
    console.error("Erro Facebook Sign-In:", error.message);
    return null;
  }
};

// NOVA FUNÇÃO: Login com e-mail e senha
export const signInWithEmail = async (email: string, password: string): Promise<User | null> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    if (result.user) {
      setLoginCookie();
    }
    return result.user;
  } catch (error: any) {
    console.error("Erro ao fazer login com e-mail:", error.message);
    return null;
  }
};

export const appSignOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
    removeLoginCookie();
  } catch (error: any) {
    console.error("Erro Logout:", error.message);
  }
};

export const onAuthListener = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged(callback);
};